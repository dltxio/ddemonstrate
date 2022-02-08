import './styles.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NAVBAR_TITLE = "ddemonstrate.org"
const NAVBAR_ELEMENTS = [
    {
        name: 'HOME',
        section: 'home',
    },
    {
        name: 'ABOUT',
        section: 'about',
    },
    {
        name: 'GET INVOLVED',
        section: 'get-involved',
    },
    {
        name: 'EVENTS',
        section: 'events',
    },
    {
        name: 'CONTACT',
        section: 'contact',
    },
];

const Navbar = ({ scrollY }) => {
    const [activeElement, setActiveElement] = React.useState(NAVBAR_ELEMENTS[0]);
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const mappedElements = NAVBAR_ELEMENTS.map(element => ({
                ...element,
                offset: document.getElementById(element.section).offsetTop,
        }))
        const heights = mappedElements.map(element => element.offset);
        const goal = scrollY;

        // from https://stackoverflow.com/questions/8584902/get-the-closest-number-out-of-an-array
        // Gets the closest number to a goal out of an array of numbers
        const closest = heights.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        // End stackoverflow code

        setActiveElement(mappedElements.find(element => element.offset === closest));
    }, [scrollY]);

    const handleClick = (section) => {
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="navbar">
            <div id="navbar-desktop" className={scrollY > 100 ? "scroll-down" : "scroll-up"}>
                <h2>{NAVBAR_TITLE}</h2>
                <div className="links">
                    {NAVBAR_ELEMENTS.map(element => (
                        <button key={element.name} onClick={()=>handleClick(element.section)}>
                            {element.name}
                            <span className={element.section === activeElement.section ? "active-line" : "line"}></span>
                        </button>
                    ))}
                </div>
            </div>
            <div id="navbar-mobile" className={scrollY > 100 || isOpen ? "scroll-down" : "scroll-up"}>
                <h2>{NAVBAR_TITLE}</h2>
                {!isOpen && <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(true)} />}
                {isOpen && <FontAwesomeIcon icon={faTimes} onClick={() => setIsOpen(false)} />}
                <div className={isOpen ? "mobile-links" : "mobile-links menu-hidden"}>
                    {NAVBAR_ELEMENTS.map(element => (
                        <button key={element.name} onClick={()=>handleClick(element.section)}>
                            {element.name}
                            <span className={element.section === activeElement.section ? "active-line" : "line"}></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>)
}

export default Navbar;