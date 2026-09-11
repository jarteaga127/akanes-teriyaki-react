import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Footer from "../components/Footer"

const renderFooter = () => {
    return render(
        <MemoryRouter>
            <Footer/>
        </MemoryRouter>
    )
}

describe('Footer component', () => {
    it('renders section headings correctly', () => {
    renderFooter()

    expect(screen.getByRole('heading', { name: /akane's teriyaki grill/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /quick links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /follow us online!/i })).toBeInTheDocument()
  })

  it('renders store details (address, phone, hours)', () => {
    renderFooter()

    expect(screen.getByText(/012-3456-7890/i)).toBeInTheDocument()
    expect(screen.getByText(/〒123-4567 tokyo, nerima-ku/i)).toBeInTheDocument()
    expect(screen.getByText(/11:00 a\.m\. ~ 11:00 p\.m\./i)).toBeInTheDocument()
  })

  it('renders internal router links with correct href attributes', () => {
    renderFooter()

    const menuLink = screen.getByRole('link', { name: /our menu/i })
    const bookLink = screen.getByRole('link', { name: /book a table/i })

    expect(menuLink).toHaveAttribute('href', '/our-menu')
    expect(bookLink).toHaveAttribute('href', '/book-a-table')
  })

  it('renders external social links with target="_blank" and rel="noreferrer"', () => {
    renderFooter()

    const twitterLink = screen.getByRole('link', { name: /x \/ twitter/i })
    const instagramLink = screen.getByRole('link', { name: /instagram/i })

    expect(twitterLink).toHaveAttribute('href', 'https://x.com')
    expect(twitterLink).toHaveAttribute('target', '_blank')
    expect(twitterLink).toHaveAttribute('rel', 'noreferrer')

    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com')
    expect(instagramLink).toHaveAttribute('target', '_blank')
  })
})