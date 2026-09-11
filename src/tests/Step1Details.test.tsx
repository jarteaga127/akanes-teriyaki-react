import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Step1Details from '../components/Step1Details'

// Mock external data constants to keep tests predictable
vi.mock('../data/BookingData', () => ({
  TIME_SLOTS: [
    { time: '17:00', label: '5:00 PM', isAvailable: true },
    { time: '18:00', label: '6:00 PM', isAvailable: false },
  ],
  SEAT_TYPES: [
    { seat: 'table', label: 'Standard Table', isAvailable: true },
    { seat: 'booth', label: 'Booth', isAvailable: true },
  ],
}))

const defaultFormData = {
  id: '',
  guests: 1,
  date: '',
  time: '',
  seat: '',
  name: '',
  email: '',
  phone: '',
}

describe('Step1Details Component', () => {
  it('disables time select and next button when date is empty', () => {
    const mockUpdateFields = vi.fn()
    const mockOnNext = vi.fn()

    render(
      <Step1Details
        formData={defaultFormData}
        updateFields={mockUpdateFields}
        onNext={mockOnNext}
      />
    )

    // Time input should be disabled
    const timeSelect = screen.getByLabelText(/what time will you be coming\?/i)
    expect(timeSelect).toBeDisabled()

    // Next button should be disabled
    const nextButton = screen.getByRole('button', { name: /next/i })
    expect(nextButton).toBeDisabled()
  })

  it('calls updateFields when date is selected', async () => {
    const user = userEvent.setup()
    const mockUpdateFields = vi.fn()

    render(
      <Step1Details
        formData={defaultFormData}
        updateFields={mockUpdateFields}
        onNext={vi.fn()}
      />
    )

    const dateInput = screen.getByLabelText(/what day will you be coming\?/i)
    await user.type(dateInput, '2026-10-15')

    expect(mockUpdateFields).toHaveBeenCalledWith({ date: '2026-10-15' })
  })

  it('enables time select when date is provided and handles selection', async () => {
    const user = userEvent.setup()
    const mockUpdateFields = vi.fn()

    const formDataWithDate = { ...defaultFormData, date: '2026-10-15' }

    render(
      <Step1Details
        formData={formDataWithDate}
        updateFields={mockUpdateFields}
        onNext={vi.fn()}
      />
    )

    const timeSelect = screen.getByLabelText(/what time will you be coming\?/i)
    expect(timeSelect).not.toBeDisabled()

    // Select available time slot
    await user.selectOptions(timeSelect, '17:00')
    expect(mockUpdateFields).toHaveBeenCalledWith({ time: '17:00' })
  })

  it('enables the Next button when both date and time are provided', async () => {
    const user = userEvent.setup()
    const mockOnNext = vi.fn()

    const completeFormData = {
      ...defaultFormData,
      date: '2026-10-15',
      time: '17:00',
    }

    render(
      <Step1Details
        formData={completeFormData}
        updateFields={vi.fn()}
        onNext={mockOnNext}
      />
    )

    const nextButton = screen.getByRole('button', { name: /next/i })
    expect(nextButton).not.toBeDisabled()

    await user.click(nextButton)
    expect(mockOnNext).toHaveBeenCalledTimes(1)
  })

  it('handles guest count changes', async () => {
    const mockUpdateFields = vi.fn()

    const formDataWithTime = { ...defaultFormData, date: '2026-10-15', time: '17:00' }

    render(
      <Step1Details
        formData={formDataWithTime}
        updateFields={mockUpdateFields}
        onNext={vi.fn()}
      />
    )

    const guestsInput = screen.getByLabelText(/how many are in your party\?/i)
    fireEvent.change(guestsInput, { target: { value: '4' } })

    expect(mockUpdateFields).toHaveBeenCalledWith({ guests: 4 })
  })
})