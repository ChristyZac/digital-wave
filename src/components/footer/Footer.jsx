import styles from './Footer.module.css';
import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'
import youtube from '../../assets/images/youtube.png'

function Footer() {
        return(
           <footer className={styles.footer}>
                <div className='col-12 d-flex flex-wrap'>
                    <div className='col-4 '>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.logo} src={logo} />
                        </div>
                        <div>
                            <ul className='d-flex ps-0 justify-content-center'>
                                <li>
                                    <img src={instagram} />
                                </li>
                                <li>
                                    <img src={facebook} />
                                </li>
                                <li>
                                    <img src={twitter} />
                                </li>
                                <li>
                                    <img src={linkedin} />
                                </li>
                                <li>
                                    <img src={youtube} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-4 d-flex justify-content-around align-items-center'>
                        <ul className={styles.footer_m_links}>
                           <li>
                                <h5>Home</h5>
                            </li>
                            <li>
                                <h5>Service</h5>
                            </li>
                            <li>
                                <h5>About</h5>
                            </li>
                            <li>
                                <h5>Blog</h5>
                            </li>
                            <li>
                                <h5>Contact</h5>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <div className={`${styles.contact_us} pt-4`}>
                            <h1>Contact Us</h1>
                        </div>
                        <div className={styles.input_group}>
                            <input type="email" className={styles.input} id="Email" name="Email" placeholder="Enter email.." autocomplete="off" />
                            <input className={styles.button_submit} value="Go" type="submit" />
                        </div>
                    </div>
                </div>
           </footer>
        );
}

export default Footer