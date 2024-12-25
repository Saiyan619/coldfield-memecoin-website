import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
            <nav>
                <div>
                    <img className="hero_logo" src="./logo (1).svg" alt="Logo" />
                </div>

                <div className="hamburger">
                    <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                </div>

                <div
                    className={isOpen ? 'list_and_btn_container_active' : 'list_and_btn_container'}
                >
                    <ul>
                        <li onClick={() => handleScroll('section1')}>Home</li>
                        <li onClick={() => handleScroll('section3')}>About</li>
                        <li onClick={() => handleScroll('section4')}>Roadmap</li>
                        <li onClick={() => handleScroll('section5')}>Tokenomics</li>
                        <li onClick={() => handleScroll('section6')}>Faq</li>
                    </ul>

                    <div>
                        {/* <button className="connect_btn">Connect Wallet</button> */}
                        <button className="gradient-button">DexTools</button>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
