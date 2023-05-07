import gaEvents from '../../utils/events';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/artemshchirov/portfolio"
        className="link footer__link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gaEvents.eventClickSource()}
      >
        source
      </a>
    </footer>
  );
}

export default Footer;
