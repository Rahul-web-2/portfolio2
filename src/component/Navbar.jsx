import { NAV_LINKS, OWNER_NAME, RESUME_PATH } from "../data/navbarData.js";
import '../css/navbar.css'

export default function Navbar() {

    return (
        <nav>
            <div className="container">

                <div className="logo">
                    <h1>{OWNER_NAME}</h1>
                </div>

                <div className="navbar">
                    <ul>
                        {NAV_LINKS.map(({ id, label, href }) => (
                            <li key={id}>
                                <a
                                    href={href}
                                    className={`link-${id}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="button">
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
        </nav>
    )
}