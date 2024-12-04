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
            <nav className="navbar flex items-center justify-between bg-white py-8">
                <div className="nav-brand cursor-hover">
                    <a href="/" className="logo text-2xl font-customHeading">Divesh.</a>
                </div>

                <button
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-hover"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <Menu className="w-8 h-8" />
                </button>
            </nav>

            <div
                className={`fixed inset-0 z-20 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="h-full flex flex-col md:flex-row">
                    {/* Left section */}
                    <div className="md:w-1/2 p-8 flex flex-col items-center md:items-start justify-center">
                        <div className="mb-12">
                            <span className="text-2xl font-bold">Divesh.</span>
                        </div>
                        <nav className="flex flex-col justify-center flex-1">
                            <ul className="space-y-20 gap-16">
                                <li>
                                    <a href="#" className="text-5xl md:text-8xl font-serif hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-5xl md:text-8xl font-serif hover:underline">
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-5xl md:text-8xl font-serif hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Right section */}
                    <div className="md:w-1/2 p-8 flex flex-col bg-gray-50">
                        <button
                            onClick={toggleMenu}
                            className="self-end mb-12"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex flex-col justify-center flex-1 gap-12">
                            <div className="flex flex-col space-y-2 mb-8 text-lg md:text-4xl">
                                <a href="tel:+86 13305969555" className="hover:text-gray-800">
                                    +86 13305969555
                                </a>
                                <a href="mailto:hello@lewiszhang.dev" className="hover:text-gray-800">
                                    hello@lewiszhang.dev
                                </a>
                            </div>
                            <div className="flex space-x-6 mb-12">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                                    <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                                    <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                                    <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
                                </a>
                            </div>
                            <div className="text-sm md:text-2xl mb-8">
                                <div className="flex justify-between mb-2">
                                    <span>Remote from</span>
                                    <span>Amoy, China</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Local Time</span>
                                    <span>7:22 PM UTC+8</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Current Status</span>
                                    <span className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

