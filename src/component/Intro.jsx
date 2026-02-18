import '../css/intro.css';
import coding from "../assets/img/Coding.png";
import github from "../assets/img/GitHub.png";
import linkedin from "../assets/img/linkedin.png";
const socials = [
        { href: "https://github.com/Rahul-web-2", src: github, alt: "GitHub logo" },
        { href: "https://www.linkedin.com/in/rahullakhchaura/", src: linkedin, alt: "LinkedIn logo" },
    ];
    
export default function Intro() {
    
    return (
        <section id="home">
            <div className='container'>

                <div className="hero-text">
                    <p className="hero-greeting">Hi I am </p>
                    <p className="hero-name">Rahul Lakhchaura </p>
                    <p className="hero-role-fullstack">Full Stack Developer </p>
                    <p className="hero-role-developer">Developer</p>
                </div>

                <div className='coding'>
                    <img src={coding}
                        alt='A developer typing on a keyboard at a desk with multiple monitors displaying code, representing software development and programming work'></img>
                </div>

                <div className='social-media-icon'>
                    {socials.map((social) => (
                        <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                            <img src={social.src} alt={social.alt} />
                        </a>
                    ))}
                </div>

                <div className='hire-me'>
                    <a href='#contact-me' >
                        <button>Hire Me</button>
                    </a>
                </div>

            </div>
        </section>
    )
}