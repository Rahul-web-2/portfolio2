import { ValidationError, useForm } from '@formspree/react';
import '../css/contact.css'
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, pop, stagger } from "../animation/animations.js";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

function SuccessMessage({ onReset }) {
    return (
        <motion.div className="form-success" role="alert">
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <motion.div className='form-success-btn'>
                <a onClick={onReset} className="btn-send">
                    Send Another Message
                </a>
            </motion.div>
        </motion.div>
    );
}

function ConfigError() {
    return (
        <motion.div className="form-error" role="alert">
            Contact form is not configured. Please try again later.
        </motion.div>
    );
}

export default function Contact() {
    const [state, handleSubmit, reset] = useForm(FORMSPREE_ID);

    if (!FORMSPREE_ID) return <ConfigError />;

    if (state.succeeded) return <SuccessMessage onReset={reset} />;

    return (
        <motion.section id="contact"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
        >
            <h2 className='contact-heading' variants={fadeUp}>Let's Connect</h2>
            <motion.div className="contact-container" variants={fadeUp}>

                <form
                    onSubmit={handleSubmit}
                    className="Contac-form">
                    <motion.div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                            aria-describedby="name-error"
                            required
                        />

                        <ValidationError
                            id="name-error"
                            field="name"
                            prefix="Name"
                            errors={state.errors}
                        />
                    </motion.div>

                    <motion.div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            aria-describedby="email-error"
                            required
                        />
                        <ValidationError
                            id="email-error"
                            field="email"
                            prefix="Email"
                            errors={state.errors}
                        />
                    </motion.div>

                    <motion.div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here"
                            aria-describedby="message-error"
                            rows={5}
                            required
                        />
                        <ValidationError
                            id="message-error"
                            field="message"
                            prefix="Message"
                            errors={state.errors}
                        />
                    </motion.div>

                    <ValidationError errors={state.errors} />
                    <motion.div className='contact-button'>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            aria-busy={state.submitting}
                            className="send-btn"
                        >
                            {state.submitting ? "Sending..." : "Send"}
                        </button>
                    </motion.div>

                </form>

            </motion.div>
        </motion.section>
    );
}