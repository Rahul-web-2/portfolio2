import { useState } from "react";
import { NAV_LINKS, OWNER_NAME, RESUME_PATH } from "../data/navbarData.js";
import "../css/header.css";
import '../css/media_css/header.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleHamburger() {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className="site-header">
            <div className="header-container">

                <nav className="header-navigation">

                    <div className="header-logo">
                        <h1>{OWNER_NAME}</h1>
                    </div>

                    <button
                        className="hamburger"
                        onClick={handleHamburger}
                        aria-expanded={isOpen}
                        aria-controls="primary-nav"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        type="button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul
                        id="primary-nav"
                        className={`nav-links ${isOpen ? "active" : ""}`}
                    >
                        {NAV_LINKS.map(({ id, label, href }) => (
                            <li key={id}>
                                <a
                                    href={href}
                                    className="header-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}

                        <li className="mobile-only">
                            <a
                                href={RESUME_PATH}
                                target="_blank"
                                rel="noreferrer"
                                className="resume-btn"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>

                    <div className="resume-button desktop-only">
                        <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noreferrer"
                            className="resume-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </nav>

            </div>
        </header>
    );
}