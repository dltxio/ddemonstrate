import './styles.css'
import { useState } from 'react';

const Home = () => {
    const [typewriter, setTypewriter] = useState('PGP Public Key Fingerprint (SHA256):');
    return (
        <section id="home">
            <h1>Decentralised Demonstrations</h1>
            <h2>{typewriter}</h2>
        </section>
    );
};

export default Home;