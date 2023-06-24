import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="http://linkedin.com/in/johanotoka" target='_blank'><BsLinkedin /></a>
            <a href="http://github.com/johanotoka" target='_blank'><BsGithub /></a>
            <a href="http://twitter.com/johan_otoka" target='_blank'><BsTwitter /></a>
        </div>
    )
}

export default HeaderSocials