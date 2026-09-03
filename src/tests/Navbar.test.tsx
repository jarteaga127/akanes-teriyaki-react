import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const renderNavbar = () => {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
}

describe('Navbar Component', () => {
  it('renders the brand logo with link to home', () => {
    renderNavbar()

    const logoLink = screen.getByRole('link', { name: /akane's teriyaki/i })
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders desktop navigation links with correct paths', () => {
    renderNavbar()

    expect(screen.getByRole('link', { name: /read our story/i })).toHaveAttribute('href', '/about-us')
    expect(screen.getByRole('link', { name: /check out our menu/i })).toHaveAttribute('href', '/our-menu')
    expect(screen.getByRole('link', { name: /book a table with us/i })).toHaveAttribute('href', '/book-a-table')
  })

  it('does not render mobile menu items by default', () => {
    renderNavbar()

    // Mobile menu starts closed; queryAllByRole allows us to check total links present
    // Desktop links = 7 total links (Logo + 6 links)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(7)
  })

  it('toggles mobile menu open and closed when hamburger button is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar()

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })

    // Click to open mobile menu
    await user.click(toggleButton)

    // With mobile menu open, mobile links render (7 original + 6 mobile = 13 total links)
    const linksAfterOpen = screen.getAllByRole('link')
    expect(linksAfterOpen).toHaveLength(13)

    // Click again to close mobile menu
    await user.click(toggleButton)

    const linksAfterClose = screen.getAllByRole('link')
    expect(linksAfterClose).toHaveLength(7)
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    renderNavbar()

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleButton)

    // Get all 'Read our story' links (desktop + mobile) and click the mobile one
    const storyLinks = screen.getAllByRole('link', { name: /read our story/i })
    await user.click(storyLinks[1])

    // Menu should close back down to 7 links total
    expect(screen.getAllByRole('link')).toHaveLength(7)
  })
})
