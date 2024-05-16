import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon5 from '../assets/images/nav-icon5.svg';

export const HeaderNavbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    {/* <img src="" alt="Logo" /> */}
                    <h2 className="title">rizkiwnf</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                        <Nav.Link href="#portofolio" className={activeLink === 'portofolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portofolio')}>Portofolio</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/rizki-wahyu-nurcahyani-fajarwati-3438991b8/" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://wa.me/6285731544494" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/rizkiwnf" target="_blank"><img src={navIcon3} alt="" /></a>
                            <a href="https://www.github.com/rizkiwnf" target="_blank"><img src={navIcon4} alt="" /></a>
                            <a href="https://www.gitlab.com/rizkiwnf" target="_blank"><img src={navIcon5} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}