import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faCalendar } from '@fortawesome/free-solid-svg-icons';

const HARD_CODED_STATS = {
    EVENTS_ADDED: 450,
    ETH_RAISED: '550',
    AWARDS_WON: '36',
}

const Stats = () => {
    return (
        <section id="stats">
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <span className="number">{HARD_CODED_STATS.EVENTS_ADDED}</span>
                <span>EVENTS ADDED</span>
            </div>
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faEthereum} />
                </div>
                <span className="number">{HARD_CODED_STATS.ETH_RAISED}</span>
                <span>ETH RAISED</span>
            </div>
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faMedal} style={{ bottom: -3 }}/>
                </div>
                <span className="number">{HARD_CODED_STATS.AWARDS_WON}</span>
                <span>AWARDS WON</span>
            </div>
        </section>
    )
};

export default Stats;