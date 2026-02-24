import { ABOUT } from "../data/aboutData.js";
import coding2 from "../assets/Coding2.png";
import '../css/about.css'
import '../css/media_css/about.css'
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, pop, stagger } from "../animation/animations.js";

export default function About() {
    return (

        <motion.section id="about"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
        >
            <motion.div className="about-container">
                <motion.div className="about-left" variants={fadeLeft}>

                    <motion.div className="coding2"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={coding2}
                            alt={ABOUT.image.alt}
                            width={450}
                            height={447}
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>

                <motion.div className="about-right" variants={fadeRight}>
                    <h2 className="about-heading" variants={fadeUp}>{ABOUT.heading}</h2>
                    <motion.div className="about-introduction" variants={stagger}>
                        <motion.p variants={fadeUp}>{ABOUT.bio}</motion.p>

                        <motion.ul className="about-highlights" variants={stagger}>
                            {ABOUT.highlights.map(({ id, label, value }) => (
                                <motion.li key={id} variants={fadeUp}>
                                    <span className="highlight-label">{label}:</span>
                                    <span className="highlight-value">{value}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.section>
    )
}