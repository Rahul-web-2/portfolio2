import '../css/about.css'
import coding2 from "../assets/img/Coding2.png";

export default function About() {
    return (
        <section id="about">
            <div className='container'>
                <h1>About Me</h1>
                <div className='coding'>
                    <img src={coding2}
                        alt='A person sitting with a laptop, coding, with a code editor window floating behind'></img>
                </div>

                <div className='introduction'>
                    <p>
                        I’m a Full-Stack Developer skilled in Java, Spring Boot, and React.js, with an M.Tech in Computer Science Engineering.
                        I build scalable web applications, REST APIs, and responsive user interfaces with a focus on clean architecture and best practices.
                        I enjoy working across frontend and backend — from UI design to secure backend services — and continuously improve my skills through real-world projects and modern technologies.
                    </p>
                </div>

            </div>
        </section>
    )
}