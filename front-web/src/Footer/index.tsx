import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Página desenvolvida por João Paulo
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCCedZAw5luaMhnQcx9qn6mQ" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/joao-paulo-taraciuk" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/jptaraciuk/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;