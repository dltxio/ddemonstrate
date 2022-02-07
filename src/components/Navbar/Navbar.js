import './styles.css';


const NAVBAR_TITLE = "ddemonstrate.org"

const Navbar = ({ scrollY }) => {
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
    return (
        <div id="navbar">
            <div className={scrollY > 1 ? "scroll-down" : "scroll-up"}>
                <h2>{NAVBAR_TITLE}</h2>
                <div className="links">
                    {NAVBAR_ELEMENTS.map(element => (
                        <button key={element.name}>
                            {element.name}
                            <span className="line"></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>)
}

export default Navbar;