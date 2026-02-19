import { INTRO, SOCIAL_LINKS } from "../data/introData.js";
import github from "../assets/img/GitHub.png";
import linkedin from "../assets/img/linkedin.png";
import coding from "../assets/img/Coding.png";
import '../css/intro.css';

const SOCIALS = [
    { ...SOCIAL_LINKS[0], src: github },
    { ...SOCIAL_LINKS[1], src: linkedin },
];

export default function Intro() {

    return (
        <section id="home">
            <div className="container">

                <div className="hero-text">
                    <p className="hero-greeting">{INTRO.greeting}</p>
                    <h1 className="hero-name">{INTRO.name}</h1>
                    <p className="hero-role">{INTRO.role}</p>
                </div>


                <div className="coding">
                    <img
                        src={coding}
                        alt="Developer typing on a keyboard with multiple monitors displaying code"
                        width={500}
                        height={400}
                        loading="lazy"
                    />
                </div>


                <div className="social-media-icon" role="list" aria-label="Social media links">
                    {SOCIALS.map(({ id, href, src, alt, ariaLabel }) => (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={ariaLabel}
                            role="listitem"
                        >
                            <img src={src} alt={alt} width={32} height={32} />
                        </a>
                    ))}
                </div>


                <div className="hire-me">
                    <a
                        href="#contact-me"
                        className="hire-me-btn"
                        role="button"
                    >
                        Hire Me
                    </a>
                </div>

            </div>
        </section>
    )
}