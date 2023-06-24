import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { ImUser } from 'react-icons/im'
import { MdWork } from 'react-icons/md'
import { IoBuild } from 'react-icons/io5'
import { TbCertificate } from 'react-icons/tb'
import { MdContactMail } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
    const [active, setActive] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiFillHome /></a>
            <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><ImUser /></a>
            <a href='#experience' onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><MdWork /></a>
            <a href='#projects' onClick={() => setActive('#projects')} className={active === '#projects' ? 'active' : ''}><IoBuild /></a>
            <a href='#certificates' onClick={() => setActive('#certificates')} className={active === '#certificates' ? 'active' : ''}><TbCertificate /></a>
            <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdContactMail /></a>
        </nav>
    )
}

export default Nav