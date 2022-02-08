import './styles.css'
import { useEffect, useState } from 'react';

const TYPE_STATEMENTS = [
    "Blockchain based activisim, Powered by Ethereum",
    "The future will not be centralised",
    "ddemonstrate.eth",
    "bc1qejx6pwfcvya5z3q5h2cua5wffz0n8rey4th2q9",
    "PGP Public Key Fingerprint 9ee37e66bac184e4cd13ce73a33304a5545027ca"
]

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const Home = () => {
    const [typewriter, setTypewriter] = useState('PGP Public Key Fingerprint (SHA256):');
    useEffect(() => {
        startTypeWriter(TYPE_STATEMENTS);
    }, []);

    async function startTypeWriter() {
        while (true) {
            for (let i = 0; i < TYPE_STATEMENTS.length; i++) {
                for (let letter = 0; letter < TYPE_STATEMENTS[i].length; letter++) {
                    setTypewriter(TYPE_STATEMENTS[i].slice(0, letter).replace(/ /g, '\u00a0'));
                    await sleep(200);
                }
                await sleep(2000)
                for (let letter = TYPE_STATEMENTS[i].length; letter > 0; letter--) {
                    setTypewriter(TYPE_STATEMENTS[i].slice(0, letter).replace(/ /g, '\u00a0'));
                    await sleep(100);
                }
            }
        }
    }

    return (
        <section id="home">
            <h1>Decentralised Demonstrations</h1>
            <h2>{typewriter}</h2>
        </section>
    );
};

export default Home;