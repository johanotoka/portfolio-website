import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Certificates from './components/certificates/Certificates'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </React.Fragment>
    )

}

export default App