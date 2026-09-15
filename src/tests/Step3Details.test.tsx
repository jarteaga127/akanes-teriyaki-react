import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Step3Details from '../components/Step3Details'

const mockFormData = {
  id: 'bk-123',
  name: 'Joseph Josephson',
  email: 'joseph@example.com',
  phone: '1234567890',
  date: '2026-10-15',
  time: '18:00',
  guests: 1,
  seat: 'booth',
}

describe('Step3Details Component', () => {
  it('renders all form data values correctly', () => {
    render(
      <Step3Details
        formData={mockFormData}
        onConfirm={vi.fn()}
        onBack={vi.fn()}
      />
    )

    expect(screen.getByText('Joseph Josephson')).toBeInTheDocument()
    expect(screen.getByText('joseph@example.com')).toBeInTheDocument()
    expect(screen.getByText('1234567890')).toBeInTheDocument()
    expect(screen.getByText('2026-10-15')).toBeInTheDocument()
    expect(screen.getByText('18:00')).toBeInTheDocument()
    expect(screen.getByText('booth')).toBeInTheDocument()
  })

  it('correctly handles pluralization for single vs multiple guests', () => {
    const { rerender } = render(
      <Step3Details
        formData={{ ...mockFormData, guests: 1 }}
        onConfirm={vi.fn()}
        onBack={vi.fn()}
      />
    )
    expect(screen.getByText('1 person')).toBeInTheDocument()

    rerender(
      <Step3Details
        formData={{ ...mockFormData, guests: 4 }}
        onConfirm={vi.fn()}
        onBack={vi.fn()}
      />
    )
    expect(screen.getByText('4 people')).toBeInTheDocument()
  })

  it('renders fallback dashes when fields are empty', () => {
    const emptyData = {
      id: '',
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
      seat: '',
    }

    render(
      <Step3Details
        formData={emptyData}
        onConfirm={vi.fn()}
        onBack={vi.fn()}
      />
    )

    // Should display fallback '—' strings for missing fields
    const dashes = screen.getAllByText('—')
    expect(dashes.length).toBeGreaterThanOrEqual(5)
  })

  it('calls onBack when clicking "Edit Details"', async () => {
    const user = userEvent.setup()
    const mockOnBack = vi.fn()

    render(
      <Step3Details
        formData={mockFormData}
        onConfirm={vi.fn()}
        onBack={mockOnBack}
      />
    )

    await user.click(screen.getByRole('button', { name: /edit details/i }))
    expect(mockOnBack).toHaveBeenCalledTimes(1)
  })

  it('calls onConfirm when clicking "Confirm & Book Table"', async () => {
    const user = userEvent.setup()
    const mockOnConfirm = vi.fn()

    render(
      <Step3Details
        formData={mockFormData}
        onConfirm={mockOnConfirm}
        onBack={vi.fn()}
      />
    )

    await user.click(screen.getByRole('button', { name: /confirm & book table/i }))
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
  })
})