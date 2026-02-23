import { INTRO, SOCIAL_LINKS } from "../data/introData.js";
import coding from "../assets/Coding.png";
import '../css/intro.css';
import '../css/media_css/intro.css'

export default function Intro() {

    return (
        <section id="home">
            <div className="intro-container">
                <div className="hero-left">
                    <div className="hero-text">
                        <p className="hero-greeting">{INTRO.greeting}</p>
                        <p className="hero-name">{INTRO.name}</p>
                        <p className="hero-role">{INTRO.role}</p>
                        <p className="hero-role2">{INTRO.role2}</p>
                        <p className="hero-para">{INTRO.para}</p>
                        <p className="hero-para2">{INTRO.para2}</p>
                    </div>

                    <div className="hire-button">
                        <a
                            href="#contact"
                            className="hire-btn"
                            role="button"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="coding">
                        <img
                            src={coding}
                            alt="Developer typing on a keyboard with multiple monitors displaying code"
                            width={450}
                            height={447}
                            loading="lazy"
                        />
                    </div>

                    <div className="social-media-icon" role="list" aria-label="Social media links">
                        {SOCIAL_LINKS.map(({ id, href, src, alt, ariaLabel }) => (
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
                </div>

            </div>
        </section>
    )
}