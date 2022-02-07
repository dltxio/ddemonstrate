import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1>Get in touch</h1>
                <p>
                Your ideas, contributions and opinions are important to us. Please contact us with your questions, comments and recommendations, we look forward to hearing from you. PGP Public Key | Fingerprint 9ee37e66bac184e4cd13ce73a33304a5545027ca
                </p>
                <div className="contact">
                    <FontAwesomeIcon icon={faEthereum} />
                    ddemonstrate.eth
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    ddemonstrate.@protonmail.com
                </div>
                <div id="socials">
                    <a href="https://www.twitter.com/ddemonstrate" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.github.com/ddemonstrate" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </section>)
}

export default Contact;