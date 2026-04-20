import { useEffect, useRef, useState } from "react";
import { useCursor } from "../../contexts/CursorContext";
import gsap from "gsap";
import "../../styles/navbar.css";

const navLinks = [
    { id: "home", label: "Home", href: "#home", x: 0 },
    { id: "about", label: "About", href: "#about", x: 88 },
    { id: "projects", label: "Projects", href: "#projects", x: 188 },
    { id: "gallery", label: "Gallery", href: "#gallery", x: 310 },
    { id: "skills", label: "Skills", href: "#skills", x: 405 },
    { id: "contact", label: "Contact", href: "#contact", x: 510 },
];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { setVariant } = useCursor();

    const navRef = useRef(null);
    const trackRef = useRef(null);
    const linksRef = useRef([]);
    const mobileRef = useRef(null);
    const isSidebarRef = useRef(false);

    useEffect(() => {
        const ITEM_H = 48;
        const SIDEBAR_LEFT = 24; // px from left edge
        const TRACK_W = 520;
        const RIGHT_PAD = 40;

        // x delta to bring track from right:RIGHT_PAD to left:SIDEBAR_LEFT
        // track's natural left = viewportW - TRACK_W - RIGHT_PAD
        const getSidebarX = () => SIDEBAR_LEFT - window.innerWidth + TRACK_W + RIGHT_PAD;
        const getSidebarY = () => window.innerHeight / 2 - (navLinks.length * ITEM_H) / 2;

        // ── Entrance animation ──────────────────────────────────────────
        gsap.set(trackRef.current, { y: -48, opacity: 0 });
        gsap.set(linksRef.current, { opacity: 0, y: -18, rotate: -65 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(trackRef.current, { y: 0, opacity: 1, duration: 0.65 })
            .to(
                linksRef.current,
                { opacity: 1, y: 0, rotate: -55, duration: 0.45, stagger: 0.07 },
                "-=0.32"
            );

        // ── Sidebar enter / exit ────────────────────────────────────────
        const enterSidebar = () => {
            if (isSidebarRef.current) return;
            isSidebarRef.current = true;

            gsap.to(trackRef.current, {
                x: getSidebarX(),
                y: getSidebarY(),
                duration: 0.72,
                ease: "power3.inOut",
            });

            linksRef.current.forEach((el, i) => {
                gsap.to(el, {
                    left: 0,
                    top: i * ITEM_H,
                    rotate: 0,
                    duration: 0.5,
                    delay: i * 0.09,
                    ease: "power3.out",
                });
            });
        };

        const exitSidebar = () => {
            if (!isSidebarRef.current) return;
            isSidebarRef.current = false;

            gsap.to(trackRef.current, {
                x: 0,
                y: 0,
                duration: 0.72,
                ease: "power3.inOut",
            });

            linksRef.current.forEach((el, i) => {
                gsap.to(el, {
                    left: navLinks[i].x * 0.8,
                    top: 36,
                    rotate: -55,
                    duration: 0.5,
                    delay: (navLinks.length - 1 - i) * 0.09,
                    ease: "power3.in",
                });
            });
        };

        const onWindowScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > window.innerHeight * 0.6) {
                enterSidebar();
            } else {
                exitSidebar();
            }
        };

        // check initial scroll state after entrance completes
        tl.eventCallback("onComplete", onWindowScroll);
        window.addEventListener("scroll", onWindowScroll, { passive: true });

        return () => {
            tl.kill();
            window.removeEventListener("scroll", onWindowScroll);
        };
    }, []);

    useEffect(() => {
        if (!mobileRef.current) return;

        if (isMenuOpen) {
            gsap.fromTo(
                mobileRef.current,
                { opacity: 0, y: -10, pointerEvents: "none" },
                { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.28, ease: "power2.out" }
            );
        } else {
            gsap.to(mobileRef.current, {
                opacity: 0,
                y: -10,
                pointerEvents: "none",
                duration: 0.2,
                ease: "power2.in",
            });
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );

        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (link) => {
        const el = document.querySelector(link.href);
        if (el && window.lenis) {
            window.lenis.scrollTo(el, { offset: 0, immediate: false, duration: 1.2 });
        } else if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setActiveLink(link.id);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav ref={navRef} className="tilt-nav" aria-label="Main navigation">
                <div ref={trackRef} className="tilt-nav__track">
                    {navLinks.map((link, idx) => (
                        <button
                            key={link.id}
                            type="button"
                            ref={(el) => (linksRef.current[idx] = el)}
                            onClick={() => handleScroll(link)}
                            onMouseEnter={(e) => {
                                setVariant("navlink");
                                gsap.to(e.currentTarget, {
                                    rotate: 0,
                                    y: -4,
                                    scale: 1.06,
                                    duration: 0.48,
                                    ease: "back.out(1.7)",
                                });
                            }}
                            onMouseLeave={(e) => {
                                setVariant("default");
                                gsap.to(e.currentTarget, {
                                    rotate: isSidebarRef.current ? 0 : -55,
                                    y: 0,
                                    scale: 1,
                                    duration: 0.48,
                                    ease: "back.out(1.7)",
                                });
                            }}
                            className={`tilt-nav__item cursor-none ${activeLink === link.id ? "tilt-nav__item--active" : ""}`}
                            style={{ "--x": `${link.x}px`, "--rotate": "-55deg" }}
                            aria-current={activeLink === link.id ? "page" : undefined}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </nav>

            <nav className="tilt-mobile" aria-label="Mobile navigation">
                <span className="tilt-mobile__brand">Dev</span>
                <button
                    type="button"
                    className="tilt-mobile__toggle cursor-none"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    onMouseEnter={() => setVariant("navlink")}
                    onMouseLeave={() => setVariant("default")}
                >
                    <span className={`tilt-mobile__line ${isMenuOpen ? "tilt-mobile__line--top" : ""}`} />
                    <span className={`tilt-mobile__line ${isMenuOpen ? "tilt-mobile__line--middle" : ""}`} />
                    <span className={`tilt-mobile__line ${isMenuOpen ? "tilt-mobile__line--bottom" : ""}`} />
                </button>
            </nav>

            <div ref={mobileRef} className="tilt-mobile__menu" style={{ opacity: 0, pointerEvents: "none" }}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        type="button"
                        onClick={() => handleScroll(link)}
                        onMouseEnter={() => setVariant("navlink")}
                        onMouseLeave={() => setVariant("default")}
                        className={`tilt-mobile__link cursor-none ${activeLink === link.id ? "tilt-mobile__link--active" : ""}`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

        </>
    );
};

export default Navbar;
