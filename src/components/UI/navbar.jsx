import { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const el = document.querySelector(id);
        if (el && window.lenis) {
            window.lenis.scrollTo(el, {
                offset: 0,
                immediate: false,
                duration: 1.2,
            });
        }
        setActiveLink(id.replace('#', ''));
        setIsMenuOpen(false);
    };

    const navLinks = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "contact", label: "Contact Us", href: "#contact" }
    ];

    return (
        <nav className="z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-white font-['La-Gagliane']">
                            Dev
                        </h1>
                    </div>

                    {/* Navigation Links (hidden under 420px) */}
                    <div className="block max-[420px]:hidden">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleScroll(link.href)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeLink === link.id
                                        ? 'text-white bg-white/20'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Burger button (visible under 420px) */}
                    <div className="hidden max-[420px]:block">
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (only under 420px when toggled) */}
            {isMenuOpen && (
                <div className="hidden max-[420px]:block">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-white/10">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleScroll(link.href)}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${activeLink === link.id
                                    ? 'text-white bg-white/20'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
