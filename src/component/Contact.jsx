import { ValidationError, useForm } from '@formspree/react';
import '../css/contact.css'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

function SuccessMessage({ onReset }) {
    return (
        <div className="form-success" role="alert" aria-live="polite">
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <div className='form-success-btn'>
                <a onClick={onReset} className="btn-send">
                    Send Another Message
                </a>
            </div>
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
        <section id="contact">
            <h2 className='contact-heading'>Let's Connect</h2>
            <div className="contact-container">

                <form
                    onSubmit={handleSubmit}
                    className="Contac-form"
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
                    <div className='contact-button'>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            aria-busy={state.submitting}
                            className="send-btn"
                        >
                            {state.submitting ? "Sending..." : "Send"}
                        </button>
                    </div>

                </form>

            </div>
        </section>
    );
}