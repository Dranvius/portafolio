//import {} from '@fortawesome/free-regular-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll';
export const Navbar = () => {


    return (
        <>

            <div id="container-header">
                <header>

                    <div className="logo">
                        <a href="Nappy">Sergio Linares</a>
                    </div>


                    <nav id="header">

                        <ul>
                            <li>
                            <Link className ="a" activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={500}>inicio</Link>
                                </li>
                            <li>
                            <Link className ="a" activeClass="active" to="sobremi" spy={true} smooth={true} offset={0} duration={500}>Sobre mi</Link>    
                                </li>
                            <li>
                            <Link className ="a" activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>Skils</Link>    
                                </li>
                            <li>
                            <Link className ="a" activeClass="active" to="curriculum" spy={true} smooth={true} offset={0} duration={500}>Estudios/Experiencias</Link>    
                                </li>
                            <li>
                            <Link className ="a" activeClass="active" to="portafolio" spy={true} smooth={true} offset={0} duration={500}>Portafolio</Link>    
                                </li>
                            <li>
                            <Link className ="a" activeClass="active" to="contacto" spy={true} smooth={true} offset={0} duration={500}>Contacto</Link>    
                                </li>
                        </ul>

                    </nav>

                    <nav id="navbarTop-responsive">

                    <FontAwesomeIcon icon={faBars} />

                        <ul>
                            <li><a href="#inicio">inicio</a></li>
                            <li><a href="#sobremi">sobremi</a></li>
                            <li><a href="#skills">skills</a></li>
                            <li><a href="#curriculum">curriculum</a></li>
                            <li><a href="#portafolio">portafolio</a></li>
                            <li><a href="#contacto">contacto</a></li>
                        </ul>

                    </nav>


                </header>


            </div>


        </>

    )


}