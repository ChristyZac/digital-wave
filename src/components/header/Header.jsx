import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState to manage sidebar visibility

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Manage mobile menu state

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); // Toggle the sidebar menu
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false); // Close the sidebar menu
    };

    return (
        <header className={`${styles.header} mt-0`}>
            <div className="col-12 d-flex">
                <div className="col-3">
                    <img className={styles.logo} src={logo} alt="Logo" />
                </div>
                <div className="col-9 d-flex justify-content-between align-items-center">
                    <nav className="d-none d-md-block">
                        <ul className="d-flex m-0 ps-0">
                            <li className="d-flex align-items-center">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="d-flex align-items-center">
                                <Link to="/service">Services</Link>
                            </li>
                            <li className="d-flex align-items-center">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="d-flex align-items-center">
                                <Link to="/">Blogs</Link>
                            </li>
                            <li className="d-flex align-items-center">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <button className={styles.button}>Get Started</button>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile menu toggle button (Hamburger icon) */}
                    <button className={`${styles.menuButton} d-md-none`} onClick={toggleMobileMenu}>
                        &#9776; {/* Hamburger icon */}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`${styles.sideMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={closeMobileMenu}>
                    &#10005; {/* Close icon */}
                </button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button className={styles.button}>Get Started</button></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
