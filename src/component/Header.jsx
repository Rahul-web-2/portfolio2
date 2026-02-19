import { NAV_LINKS, OWNER_NAME, RESUME_PATH } from "../data/navbarData.js";
import '../css/header.css'

export default function Header() {

    return (
        <header className="site-header">
            <div className="header-container">

                <div className="header-logo">
                    <h1>{OWNER_NAME}</h1>
                </div>

                <nav aria-label="header-navigation">
                    <ul>
                        {NAV_LINKS.map(({ id, label, href }) => (
                            <li key={id}>
                                <a href={href} className="header-link">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="resume-button">
                    <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noreferrer"
                        className="resume-btn"
                        aria-label="View Rahul's resume (opens in new tab)"
                    >
                        Resume
                    </a>
                </div>

            </div>
        </header>
    )
}