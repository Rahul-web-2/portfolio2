import { ABOUT } from "../data/aboutData.js";
import '../css/about.css'
import coding2 from "../assets/img/Coding2.png";

export default function About() {
    return (

        <section id="about">
            <div className="about-container">
                <div className="about-left">

                    <div className="about-image">
                        <img
                            src={coding2}
                            alt={ABOUT.image.alt}
                            width={450}
                            height={447}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="about-right">
                    <h2 className="about-heading">{ABOUT.heading}</h2>
                    <div className="about-introduction">
                        <p>{ABOUT.bio}</p>

                        <ul className="about-highlights" aria-label="Key skills and background">
                            {ABOUT.highlights.map(({ id, label, value }) => (
                                <li key={id}>
                                    <span className="highlight-label">{label}:</span>
                                    <span className="highlight-value">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}