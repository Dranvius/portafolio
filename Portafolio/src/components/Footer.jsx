import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Footer = () => {
  return(
    <>
      <footer>
      <Link className ="arriba" activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={500}>
      <img src="src/icons/up-arrows.png" alt=""/>
      </Link>

        <div className="redes">
          <a href="https://www.linkedin.com/in/sergio-numael-linares-ducuara-994266196/">
            <img
              src="./src/icons/icone-linkedin-ronde-jaune.png"
              alt="linkin"
              style={{ width: 30, height: 30 }}
            />
          </a>
          <a href="https://github.com/Dranvius">
            <img
              src="./src/icons/git.png"
              alt="git"
              style={{ width: 30, height: 30 }}
            />
          </a>
        </div>
      </footer>
    </>
  );
};
