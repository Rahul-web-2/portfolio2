import '../css/footer.css';
import github from "../assets/img/GitHub.png";
import linkedin from "../assets/img/linkedin.png";

const socials = [
        { href: "https://github.com/Rahul-web-2", src: github, alt: "GitHub logo" },
        { href: "https://www.linkedin.com/in/rahullakhchaura/", src: linkedin, alt: "LinkedIn logo" },
    ];

export default function Footer() {

    return (
        <footer>
            <div className="footer">
                <div className="logo">
                    <h1>Rahul Lakhchaura</h1>
                </div>

                <div className="navbar">
                    <ul>
                        <li className="home">
                            <a href="#home" className="link-home">Home</a>
                        </li>
                        <li className="about">
                            <a href="#about" className="link-about">About Me</a>
                        </li>
                        <li className="project">
                            <a href="#project" className="link-project">Project</a>
                        </li>
                        <li className="contact">
                            <a href="#contact-me" className="link-contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
                <div className='social-media-icon'>
                    {socials.map((social) => (
                        <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                            <img src={social.src} alt={social.alt} />
                        </a>
                    ))}
                </div>


                <div className="copyright">
                    <span>Copyright © 2026 - All rights reserved || Designed By: Rahul Lakhchaura</span>
                </div>
            </div>
        </footer>
    )
}