import { ValidationError, useForm } from '@formspree/react';
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

function SuccessMessage({ onReset }) {
    return (
        <div className="form-success" role="alert" aria-live="polite">
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button onClick={onReset} className="btn">
                Send Another Message
            </button>
        </div>
    );
}

function ConfigError() {
    return (
        <div className="form-error" role="alert">
            Contact form is not configured. Please try again later.
        </div>
    );
}

export default function Contact() {
    const [state, handleSubmit, reset] = useForm(FORMSPREE_ID);

    if (!FORMSPREE_ID) return <ConfigError />;

    if (state.succeeded) return <SuccessMessage onReset={reset} />;

    return (
        <section id="contact-me" aria-label="Contact Me">
            <div className="container">

                <h2>Let's Connect</h2>

                <form
                    onSubmit={handleSubmit}
                    aria-label="Contact form"
                    noValidate
                >
                    <div className="form-group">
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
                    </div>

                    <div className="form-group">
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
                    </div>

                    <div className="form-group">
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
                    </div>

                    <ValidationError errors={state.errors} />

                    <button
                        type="submit"
                        disabled={state.submitting}
                        aria-busy={state.submitting}
                        className="submit-btn"
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>

            </div>
        </section>
    );
}