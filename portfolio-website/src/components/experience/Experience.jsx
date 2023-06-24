import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Experience I Have</h5>
            <h2>My Experience</h2>
            <div className="container work__container">
                <div className="experience__work">
                    <div className="work__header">
                        <h3 className='title'>Research Assistant</h3>
                        <h5 className='date'>May 2022 – Apr. 2023</h5>
                    </div>
                    <div className="work__subheader">
                        <h5 className='company'>Lassonde School of Engineering</h5>
                        <h5 className='city'>Toronto, ON</h5>
                    </div>
                </div>
                <div className="experience__work">
                    <div className="work__header">
                        <h3 className='title'>IT Executive</h3>
                        <h5 className='date'>Oct. 2022 – Feb. 2023</h5>
                    </div>
                    <div className="work__subheader">
                        <h5 className='company'>ElleHacks</h5>
                        <h5 className='city'>Toronto, ON</h5>
                    </div>
                </div>
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