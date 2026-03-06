import { motion } from "framer-motion";
import { OWNER_NAME, NAV_LINKS, CURRENT_YEAR, SOCIAL_LINKS } from "../data/footerData.js";
import "../css/footer.css";
import '../css/media_css/footer.css';
import { stagger, navStagger, fadeUp, pop } from "../animation/animations.js";

export default function Footer() {
    return (
        <motion.footer
            className="site-footer"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="footer-container">

                <motion.div className="footer-logo" variants={fadeUp}>
                    <p className="footer-logo">{OWNER_NAME}</p>
                </motion.div>

                <motion.nav className="footer-navigation" variants={navStagger}>
                    <motion.ul variants={navStagger}>
                        {NAV_LINKS.map(({ id, label, href }) => (
                            <motion.li key={id} variants={fadeUp}>
                                <a href={href} className="footer-link">
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.nav>

                <motion.div
                    className="footer-social-media-icon"
                    role="list"
                    variants={stagger}
                >
                    {SOCIAL_LINKS.map(({ id, href, src, alt, ariaLabel }) => (
                        <motion.a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={ariaLabel}
                            role="listitem"
                            variants={pop}
                            whileHover={{ rotate: 28 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={src} alt={alt} width={50} height={50} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div className="copyright" variants={fadeUp}>
                    <span>
                        Copyright &copy; {CURRENT_YEAR} · All rights reserved · Designed by {OWNER_NAME}
                    </span>
                </motion.div>

            </div>
        </motion.footer>
    );
}
