import '../css/navbar.css'

export default function Navbar() {

    return (
        <nav>
            <div className='container'>

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

                <div className='button'>
                    <a href='/Rahul_Resume.pdf' target='_blank' rel='noreferrer'>
                        <button>
                            Resume
                        </button>
                    </a>
                </div>

            </div>
        </nav>
    )
}