import { useState } from 'react'
import '../styles.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <a href="/" className="logo">Divesh</a>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                Menu
            </button>
        </nav>
    )
}

