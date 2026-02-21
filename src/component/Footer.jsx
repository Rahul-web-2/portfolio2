import { OWNER_NAME, NAV_LINKS, CURRENT_YEAR, SOCIAL_LINKS } from "../data/footerData.js";
import github from "../assets/img/GitHub.png";
import linkedin from "../assets/img/linkedin.png";
import "../css/footer.css";

const SOCIALS = [
    { ...SOCIAL_LINKS[0], src: github },
    { ...SOCIAL_LINKS[1], src: linkedin },
];
export default function Footer() {
    return (

        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <p className="footer-logo">{OWNER_NAME}</p>
                </div>

                <nav aria-label="footer-navigation">
                    <ul>
                        {NAV_LINKS.map(({ id, label, href }) => (
                            <li key={id}>
                                <a href={href} className="footer-link">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="social-media-icon" role="list">
                    {SOCIALS.map(({ id, href, src, alt, ariaLabel }) => (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={ariaLabel}
                            role="listitem"
                        >
                            <img src={src} alt={alt} width={50} height={50} />
                        </a>
                    ))}
                </div>

                <div className="copyright">
                    <span>
                        Copyright &copy; {CURRENT_YEAR} · All rights reserved · Designed by {OWNER_NAME}
                    </span>
                </div>

            </div>
        </footer>
    );
}