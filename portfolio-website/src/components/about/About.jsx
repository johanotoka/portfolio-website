import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { MdSchool } from 'react-icons/md'
import { BsPinterest } from 'react-icons/bs'
import { AiOutlineFileDone } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <MdSchool className='about__card-icon' />
                            <h3>Education</h3>
                            <p>Currently pursuing a Honours Bachelor's degree in Computer Engineering at York University - Graduation expected Spring 2024</p>
                        </article>
                        <article className='about__card'>
                            <BsPinterest className='about__card-icon' />
                            <h3>Interests</h3>
                            <p>Software Development, Web Development, Machine Learning, Artificial Intelligence, Data Science, Cybersecurity, Embedded Systems, Computer Vision, XR and more!</p>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFileDone className='about__card-icon' />
                            <h3>Projects</h3>
                            <p>30+ completed</p>
                        </article>
                    </div>

                    <p className='about__text'>
                        Outside the world of tech, I enjoy playing sports, watching movies, and spending time with friends and family. I am also a huge fan of FC Barcelona and the Golden State Warriors. I am a very outgoing person and love to meet new people. I am always looking for new opportunities to learn and grow as a person and as a professional. I am currently looking for a new graduate position starting May 2024.
                    </p>


                    <a href='#contact' className='btn btn-primary'>Let's Have a Chat!</a>
                </div>
            </div>

        </section>
    )
}

export default About