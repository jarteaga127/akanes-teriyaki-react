import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Step4Details from '../components/Step4Details'

const mockFormData = {
  id: 'bk-999',
  name: 'Joseph Josephson',
  email: 'joseph@example.com',
  phone: '1234567890',
  date: '2026-10-15',
  time: '18:00',
  guests: 2,
  seat: 'booth',
}

describe('Step4Details Component', () => {
  it('renders confirmation message with user name and form values', () => {
    render(
      <Step4Details
        formData={mockFormData}
        resetForm={vi.fn()}
      />
    )

    // Heading and personalized greeting
    expect(screen.getByRole('heading', { name: /reservation confirmed!/i })).toBeInTheDocument()
    expect(screen.getByText(/joseph josephson/i)).toBeInTheDocument()

    // Form summary details
    expect(screen.getByText(/2026-10-15 at 18:00/i)).toBeInTheDocument()
    expect(screen.getByText('2 people')).toBeInTheDocument()
    expect(screen.getByText('booth')).toBeInTheDocument()
    expect(screen.getByText(/joseph@example.com/i)).toBeInTheDocument()
  })

  it('renders fallback texts when name or email are missing', () => {
    const emptyFormData = {
      ...mockFormData,
      name: '',
      email: '',
    }

    render(
      <Step4Details
        formData={emptyFormData}
        resetForm={vi.fn()}
      />
    )

    expect(screen.getByText(/we look forward to hosting you/i)).toBeInTheDocument()
    expect(screen.getByText(/your provided email/i)).toBeInTheDocument()
    expect(screen.getByText('Guest')).toBeInTheDocument()
expect(screen.getByText(/your provided email/i)).toBeInTheDocument()
  })

  it('triggers resetForm when clicking "Book Another Table"', async () => {
    const user = userEvent.setup()
    const mockResetForm = vi.fn()

    render(
      <Step4Details
        formData={mockFormData}
        resetForm={mockResetForm}
      />
    )

    const resetButton = screen.getByRole('button', { name: /book another table/i })
    await user.click(resetButton)

    expect(mockResetForm).toHaveBeenCalledTimes(1)
  })
})