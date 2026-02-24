import { INTRO, SOCIAL_LINKS } from "../data/introData.js";
import coding from "../assets/Coding.png";
import '../css/intro.css';
import '../css/media_css/intro.css'
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, pop, stagger } from "../animation/animations.js";

export default function Intro() {

    return (
        <motion.section id="home"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
        >
            <motion.div className="intro-container"
            >
                <motion.div className="hero-left"
                    variants={fadeLeft}
                >
                    <motion.div className="hero-text" variants={stagger} initial="hidden" whileInView="show">
                        <motion.p className="hero-greeting" variants={fadeUp}>{INTRO.greeting}</motion.p>
                        <motion.p className="hero-name" variants={fadeUp}>{INTRO.name}</motion.p>
                        <motion.p className="hero-role" variants={fadeUp}>{INTRO.role}</motion.p>
                        <motion.p className="hero-role2" variants={fadeUp}>{INTRO.role2}</motion.p>
                        <motion.p className="hero-para" variants={fadeUp}>{INTRO.para}</motion.p>
                        <motion.p className="hero-para2" variants={fadeUp}>{INTRO.para2}</motion.p>
                    </motion.div>

                    <motion.div className="hire-button" variants={stagger} initial="hidden" whileInView="show">
                        <motion.a
                            href="#contact"
                            className="hire-btn"
                            role="button"
                        >
                            Hire Me
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div className="hero-right" variants={fadeRight}>
                    <motion.div className="coding"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={coding}
                            alt="Developer typing on a keyboard with multiple monitors displaying code"
                            width={450}
                            height={447}
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div className="intro-social-media-icon" role="list">
                        {SOCIAL_LINKS.map(({ id, href, src, alt, ariaLabel }) => (
                            <motion.a
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={ariaLabel}
                                role="listitem"
                                whileHover={{ rotate: 28 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={src} alt={alt} width={50} height={50} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.section >
    )
}