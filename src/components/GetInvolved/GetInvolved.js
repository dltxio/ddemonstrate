import './styles.css';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faCalendar } from '@fortawesome/free-solid-svg-icons';

const GetInvolved = () => {
    return (
        <section id="get-involved">
            <div className="container">
                <div className="title">
                    <h1>GET INVOLVED</h1>
                    <span>"Silence in the face of evil is itself evil"</span>
                </div>
                <div className="content">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <h2>ACTIVATE</h2>
                        <p>Use ddemonstrate.org to co-ordinate your event in a safe and secure way</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEthereum} />
                        </div>
                        <h2>DONATE</h2>
                        <p>Individual campaigns can be funded by Ethereum only by selecting one below. Or if you wish to donate to the project to help development costs: BTC bc1qejx6pwfcvya5z3q5h2cua5wffz0n8rey4th2q9</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMedal} style={{ bottom: -3 }}/>
                        </div>
                        <h2>PARTICIPATE</h2>
                        <p>Participants who attend in person can earn digtal attestations for their attendance via poap.xyz Developers can submit pull requests via <a href="https://github.com/ddemonstrate" target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInvolved;