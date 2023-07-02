import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4enk5cg', 'template_9x9p05y', form.current, 'gnqB0vNDfI7QSNO1f')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>jotok15@my.yorku.ca</h5>
                        <a href="mailto:jotok15@my.yorku.ca">Send a Message</a>
                    </article>

                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>johanotoka</h5>
                        <a href="http://linkedin.com/in/johanotoka">Send a Message</a>
                    </article>

                    <article className='contact__option'>
                        <BsTwitter className='contact__option-icon' />
                        <h4>Twitter</h4>
                        <h5>johan_otoka</h5>
                        <a href="http://twitter.com/johan_otoka">Send a Message</a>
                    </article>
                </div>

                <form ref={form} className='contact__form' onSubmit={sendEmail}>
                    <input type="text" name='from_name' placeholder='Full Name' className='contact__form-input' required />
                    <input type="email" name='from_email' placeholder='Email' className='contact__form-input' required />
                    <textarea name="message" rows="10" placeholder='Message' className='contact__form-textarea' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact