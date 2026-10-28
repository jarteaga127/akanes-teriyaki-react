import { render, screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
//import { vi } from 'vitest'
import ContactForm from '../components/ContactForm'

describe('ContactForm component', () => {
    it('renders all form inputs and the submit button initially', () => {
    render(<ContactForm />);

    // Check heading
    expect(screen.getByRole('heading', { name: /Send Us a Message/i })).toBeInTheDocument();

    // Check inputs by their labels or placeholders
    expect(screen.getByPlaceholderText('Rick Duck')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('rickduck@ducksrock.com')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('What would it take to win your business today?')).toBeInTheDocument();

    // Check submit button
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });
})