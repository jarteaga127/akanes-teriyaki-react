import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Step2Details from '../components/Step2Details'

const defaultFormData = {
  id: '',
  guests: 2,
  date: '2026-10-15',
  time: '18:00',
  seat: 'table',
  name: '',
  email: '',
  phone: '',
}

describe('Step2Details Component', () => {
  it('disables the confirm button when name is empty', () => {
    render(
      <Step2Details
        formData={defaultFormData}
        updateFields={vi.fn()}
        onNext={vi.fn()}
        onBack={vi.fn()}
      />
    )

    const confirmButton = screen.getByRole('button', { name: /confirm your reservation/i })
    expect(confirmButton).toBeDisabled()
  })

  it('enables the confirm button when name is provided', () => {
    const formDataWithName = { ...defaultFormData, name: 'Joseph Josephson' }

    render(
      <Step2Details
        formData={formDataWithName}
        updateFields={vi.fn()}
        onNext={vi.fn()}
        onBack={vi.fn()}
      />
    )

    const confirmButton = screen.getByRole('button', { name: /confirm your reservation/i })
    expect(confirmButton).not.toBeDisabled()
  })

  it('calls updateFields when typing into inputs', async () => {
    const user = userEvent.setup()
    const mockUpdateFields = vi.fn()

    render(
      <Step2Details
        formData={defaultFormData}
        updateFields={mockUpdateFields}
        onNext={vi.fn()}
        onBack={vi.fn()}
      />
    )

    const nameInput = screen.getByLabelText(/write your name here/i)
    const phoneInput = screen.getByLabelText(/phone number/i)
    const emailInput = screen.getByLabelText(/your email/i)

    await user.type(nameInput, 'J')
    expect(mockUpdateFields).toHaveBeenCalledWith({ name: 'J' })

    await user.type(phoneInput, '1')
    expect(mockUpdateFields).toHaveBeenCalledWith({ phone: '1' })

    await user.type(emailInput, 'a')
    expect(mockUpdateFields).toHaveBeenCalledWith({ email: 'a' })
  })

  it('triggers onBack callback when "Go back" button is clicked', async () => {
    const user = userEvent.setup()
    const mockOnBack = vi.fn()

    render(
      <Step2Details
        formData={defaultFormData}
        updateFields={vi.fn()}
        onNext={vi.fn()}
        onBack={mockOnBack}
      />
    )

    const backButton = screen.getByRole('button', { name: /go back/i })
    await user.click(backButton)

    expect(mockOnBack).toHaveBeenCalledTimes(1)
  })

  it('triggers onNext callback when "Confirm your reservation" is clicked', async () => {
    const user = userEvent.setup()
    const mockOnNext = vi.fn()
    const formDataWithName = { ...defaultFormData, name: 'Joseph Josephson' }

    render(
      <Step2Details
        formData={formDataWithName}
        updateFields={vi.fn()}
        onNext={mockOnNext}
        onBack={vi.fn()}
      />
    )

    const confirmButton = screen.getByRole('button', { name: /confirm your reservation/i })
    await user.click(confirmButton)

    expect(mockOnNext).toHaveBeenCalledTimes(1)
  })
})