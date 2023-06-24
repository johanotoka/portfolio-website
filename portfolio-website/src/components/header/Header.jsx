import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/steeve.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello there! I'm</h5>
                <h1>Steeve</h1>
                <h5 className="text-light">Computer Engineering Student</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Steeve-Johan Otoka-Eyota" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header