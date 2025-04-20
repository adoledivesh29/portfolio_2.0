import { useState } from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <nav className="navbar">
                <ul className='nav-Items'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
        </div>
    )
}

