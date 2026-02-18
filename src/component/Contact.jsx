import '../css/contact.css'
import { ValidationError, useForm } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
    if (state.succeeded) { return <div>Thank You for Your Time and Consideration</div>; }
    return (

        <section id="contact-me">
            <div className='container'>
                <h1>Lets Connect</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name' placeholder='Enter your Name' required />
                    <ValidationError field='name' prefix='name' errors={state.errors} />

                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' placeholder='Enter your Email' required />
                    <ValidationError field='email' prefix='email' errors={state.errors} />

                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='textarea' placeholder='Write your message......' required></textarea>
                    <ValidationError field='message' prefix='message' errors={state.errors} />

                    <button type='submit' disabled={state.submitting}>Send</button>
                </form>
            </div>
        </section>
    )
}