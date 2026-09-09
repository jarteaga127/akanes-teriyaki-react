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
    it('Renders the quick links to the correct paths', () => {
        renderFooter()
        expect(screen.getByRole('link', { name: /read our story/i })).toHaveAttribute('href', '/about-us')
            expect(screen.getByRole('link', { name: /check out our menu/i })).toHaveAttribute('href', '/our-menu')
            expect(screen.getByRole('link', { name: /book a table with us/i })).toHaveAttribute('href', '/book-a-table')
    })
})