import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 3A2.5 2.5 0 1 1 3 5.5 2.5 2.5 0 0 1 5.5 3ZM3.5 8.5h4V21h-4ZM10 8.5h3.83v1.7h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.95c0-1.42 0-3.25-1.98-3.25s-2.29 1.55-2.29 3.15V21h-4Z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.73.08-.73a2.53 2.53 0 0 1 1.85 1.25 2.57 2.57 0 0 0 3.51 1 2.56 2.56 0 0 1 .76-1.61c-2.67-.3-5.47-1.34-5.47-5.95A4.66 4.66 0 0 1 5.62 9a4.33 4.33 0 0 1 .12-3.2s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.33 4.33 0 0 1 .12 3.2 4.65 4.65 0 0 1 1.23 3.22c0 4.62-2.81 5.64-5.49 5.94a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2Zm10.55 1.65a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm15 2.24-6.38 5.43a1 1 0 0 1-1.24 0L5 8.24V17h14V8.24ZM6.55 8l5.45 4.64L17.45 8Z" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.62 15.17 16.9 14a1.52 1.52 0 0 0-1.75.44l-1.2 1.46a15.2 15.2 0 0 1-5.85-5.85l1.46-1.2A1.52 1.52 0 0 0 10 7.1L8.83 4.38A1.5 1.5 0 0 0 7.12 3.5H4.55A1.55 1.55 0 0 0 3 5.11 18.9 18.9 0 0 0 18.89 21a1.55 1.55 0 0 0 1.61-1.55v-2.57a1.5 1.5 0 0 0-.88-1.71Z" />
    </svg>
);

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5A7.5 7.5 0 0 0 4.5 10c0 5.3 6.24 11 7 11.64a.76.76 0 0 0 1 0c.76-.67 7-6.34 7-11.64A7.5 7.5 0 0 0 12 2.5Zm0 10.5A3 3 0 1 1 15 10a3 3 0 0 1-3 3Z" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 0 0 1.42 1.41l4.58-4.58a1 1 0 0 0 0-1.42L10.71 6.7a1 1 0 0 0-1.42 0Z" />
    </svg>
);

const SparkIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5 13.75 10 21.5 12l-7.75 2-1.75 7.5L10.25 14 2.5 12l7.75-2Z" />
    </svg>
);

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallary" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
    const footerRef = useRef(null);
    const wordmarkRef = useRef(null);

    useLayoutEffect(() => {
        const footer = footerRef.current;
        const wordmark = wordmarkRef.current;
        if (!footer || !wordmark) return undefined;

        const ctx = gsap.context(() => {
            gsap.set(wordmark, {
                yPercent: 28,
                opacity: 0,
            });

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) return;

                    gsap.to(wordmark, {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    });

                    observer.disconnect();
                },
                { threshold: 0.3 }
            );

            observer.observe(footer);

            return () => observer.disconnect();
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="footer" id="footer" ref={footerRef}>
            <div className="footer-shell">
                <div className="footer-wordmark" aria-hidden="true" ref={wordmarkRef}>
                    namaskar
                </div>

                <div className="footer-grid">
                    <div className="footer-brand">
                        <p className="footer-brand__copy">
                            Crafting digital experiences
                            <br />
                            that inspire and make
                            <br />
                            an impact.
                        </p>

                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/divesh-adole-314969204/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <LinkedinIcon />
                            </a>
                            <a href="https://github.com/adoledivesh29/" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <GithubIcon />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h3 className="footer-heading">Navigation</h3>
                        <div className="footer-heading__underline" aria-hidden="true" />
                        <nav className="footer-nav__links" aria-label="Footer navigation">
                            {navItems.map((item) => (
                                <a key={item.label} href={item.href} className="footer-nav__link">
                                    <span>{item.label}</span>
                                    <span className="footer-nav__arrow" aria-hidden="true">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-heading">Get in Touch</h3>
                        <div className="footer-heading__underline" aria-hidden="true" />

                        <div className="footer-contact__list">
                            <a className="footer-contact__item" href="mailto:adoledipesh@gmail.com">
                                <span className="footer-contact__icon"><MailIcon /></span>
                                <span>adoledipesh@gmail.com</span>
                            </a>

                            <a className="footer-contact__item" href="tel:+919876543210">
                                <span className="footer-contact__icon"><PhoneIcon /></span>
                                <span>+91 7498385438</span>
                            </a>

                            <div className="footer-contact__item">
                                <span className="footer-contact__icon"><LocationIcon /></span>
                                <span>Amravati, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="footer-bottom__copyright">© 2026 Divesh Adole. All Rights Reserved.</span>
                    <div className="footer-bottom__note">
                        <span className="footer-bottom__spark" aria-hidden="true"><SparkIcon /></span>
                        <span>Let&apos;s build something great together.</span>
                    </div>
                </div>

                <div className="footer-glow" aria-hidden="true" />
            </div>
        </footer>
    );
};

export default Footer;
