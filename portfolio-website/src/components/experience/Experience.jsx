import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { jobs } from './jobs'
import { volunteering_positions } from './volunteering'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Experience I Have</h5>
            <h2>Intership</h2>
            <div className="container work__container">
                {
                    jobs.map((job) => {
                        return (
                            <div className="experience__work">
                                <div className="work__header">
                                    <h3 className='title'>{job.title}</h3>
                                    <h5 className='date'>{job.date}</h5>
                                </div>
                                <div className="work__subheader">
                                    <h5 className='company'>{job.company}</h5>
                                    <h5 className='city'>{job.location}</h5>
                                    <h5 className='description'>
                                        <ul>
                                            {
                                                job.description.map((point) => {
                                                    return (
                                                        <li className='point' key={point}>{point}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </h5>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            <h2>Volunteering</h2>
            <div className="container work__container">
                {
                    volunteering_positions.map((position) => {
                        return (
                            <div className="experience__work">
                                <div className="work__header">
                                    <h3 className='title'>{position.title}</h3>
                                    <h5 className='date'>{position.date}</h5>
                                </div>
                                <div className="work__subheader">
                                    <h5 className='company'>{position.company}</h5>
                                    <h5 className='city'>{position.location}</h5>
                                    <h5 className='description'>
                                        <ul>
                                            {
                                                position.description.map((point) => {
                                                    return (
                                                        <li className='point' key={point}>{point}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </h5>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            <h2>My Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>

                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Material UI</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>

                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>

                <div className="experience__frameworks-libraries">
                    <h3>Frameworks/Libraries</h3>

                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>OpenCV</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>pandas</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NumPy</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PyTorch</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience