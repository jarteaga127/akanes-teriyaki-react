import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import BookingForm from '../components/BookingForm'

// Mock sub-components to keep unit tests isolated
vi.mock('../components/Step1Details', () => ({
  default: ({ onNext }: { onNext: () => void }) => (
    <div>
      <p>Step 1 Content</p>
      <button type="button" onClick={onNext}>Next to Step 2</button>
    </div>
  ),
}))

vi.mock('../components/Step2Details', () => ({
  default: ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => (
    <div>
      <p>Step 2 Content</p>
      <button type="button" onClick={onBack}>Back to Step 1</button>
      <button type="button" onClick={onNext}>Next to Step 3</button>
    </div>
  ),
}))

vi.mock('../components/Step3Details', () => ({
  default: ({ onConfirm, onBack }: { onConfirm: () => void; onBack: () => void }) => (
    <div>
      <p>Step 3 Content</p>
      <button type="button" onClick={onBack}>Back to Step 2</button>
      <button type="button" onClick={onConfirm}>Confirm Booking</button>
    </div>
  ),
}))

vi.mock('../components/Step4Details', () => ({
  default: ({ resetForm }: { resetForm: () => void }) => (
    <div>
      <p>Step 4 Confirmation</p>
      <button type="button" onClick={resetForm}>Reset Form</button>
    </div>
  ),
}))

describe('BookingForm Multi-Step Flow', () => {
  beforeEach(() => {
    // Clear localStorage before each test run
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('renders Step 1 by default', () => {
    render(<BookingForm />)
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument()
    expect(screen.getByText('Pick a date and table')).toBeInTheDocument()
  })

  it('navigates forward through step 1 to step 3', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    // Move to Step 2
    await user.click(screen.getByRole('button', { name: /next to step 2/i }))
    expect(screen.getByText('Step 2 Content')).toBeInTheDocument()

    // Move to Step 3
    await user.click(screen.getByRole('button', { name: /next to step 3/i }))
    expect(screen.getByText('Step 3 Content')).toBeInTheDocument()
  })

  it('navigates backward when back buttons are clicked', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    // Advance to Step 2
    await user.click(screen.getByRole('button', { name: /next to step 2/i }))
    expect(screen.getByText('Step 2 Content')).toBeInTheDocument()

    // Click back to return to Step 1
    await user.click(screen.getByRole('button', { name: /back to step 1/i }))
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument()
  })

  it('saves booking to localStorage and moves to Step 4 on final submit', async () => {
    const user = userEvent.setup()
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    render(<BookingForm />)

    // Advance to Step 3
    await user.click(screen.getByRole('button', { name: /next to step 2/i }))
    await user.click(screen.getByRole('button', { name: /next to step 3/i }))

    // Submit booking
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))

    // Verify step transition
    expect(screen.getByText('Step 4 Confirmation')).toBeInTheDocument()

    // Verify localStorage persistence
    expect(setItemSpy).toHaveBeenCalledWith(
      'restaurant_bookings',
      expect.stringContaining('bk-')
    )

    const savedData = JSON.parse(localStorage.getItem('restaurant_bookings') || '[]')
    expect(savedData).toHaveLength(1)
    expect(savedData[0]).toMatchObject({ guests: 1, name: '' })
  })

  it('resets back to Step 1 when resetForm is invoked', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    // Navigate to step 3 and confirm
    await user.click(screen.getByRole('button', { name: /next to step 2/i }))
    await user.click(screen.getByRole('button', { name: /next to step 3/i }))
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))

    // Click reset on Step 4
    await user.click(screen.getByRole('button', { name: /reset form/i }))

    // Verify reset
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument()
  })
})