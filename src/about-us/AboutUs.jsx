// import styles from './AboutUs.module.css';
// import Accordion from 'react-bootstrap/Accordion';

// function AboutUs() {
//     return (
//         <section className={styles.about_section}>
//             <div className="col-12">
//                 <h1 className={`${styles.h1_first} ms-4 ps-4 pt-4`}>About Us</h1>
//             </div>
//             <div className="col-12 d-flex">
//                 <div className="col-6">
//                     <p className={`${styles.about_para} px-5`}>
//                         At Quantum Digital, we believe in transforming the way businesses connect with their audience in the digital era. 
//                         Our mission is to empower brands by delivering innovative marketing solutions that drive measurable results.
//                         Founded with a passion for creativity and data-driven strategies, Quantum Digital offers a comprehensive suite of 
//                         services, including social media management, SEO optimization, content marketing, and paid advertising campaigns.
//                         We tailor our approach to meet the unique needs of every client, ensuring maximum impact and sustainable growth.
//                         Our team of dedicated professionals combines expertise, creativity, and cutting-edge technology to help your business 
//                         thrive in the digital landscape. Whether you're a startup aiming to establish a strong online presence or an 
//                         established enterprise looking to enhance your reach, Quantum Digital is your partner in success.
//                         Join us as we redefine digital marketing with precision, innovation, and a commitment to excellence.
//                     </p>
//                 </div>
//                 <div className="col-6 d-flex justify-content-center">
//                     <div className='col-10 about'>
//                         <Accordion>
//                             <Accordion.Item eventKey="0">
//                                 <Accordion.Header>Our Mission</Accordion.Header>
//                                 <Accordion.Body>
//                                     To empower brands by delivering innovative marketing solutions that drive measurable results.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="1">
//                                 <Accordion.Header>Our Services</Accordion.Header>
//                                 <Accordion.Body>
//                                     We offer social media management, SEO optimization, content marketing, and paid advertising campaigns.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="2">
//                                 <Accordion.Header>Why Choose Us?</Accordion.Header>
//                                 <Accordion.Body>
//                                     Our team combines expertise, creativity, and cutting-edge technology to help your business thrive in 
//                                     the digital landscape.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                         </Accordion>
//                     </div>
                   
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AboutUs;



import React, { useState } from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.about_section}>
            <div className="col-12">
                <h1 className={`${styles.h1_first} ms-4 ps-4 pt-4`}>About Us</h1>
            </div>
            <div className="col-12 d-flex">
                <div className="col-6">
                    <p className={`${styles.about_para} px-5`}>
                        At Quantum Digital, we believe in transforming the way businesses connect with their audience in the digital era. 
                        Our mission is to empower brands by delivering innovative marketing solutions that drive measurable results.
                        Founded with a passion for creativity and data-driven strategies, Quantum Digital offers a comprehensive suite of 
                        services, including social media management, SEO optimization, content marketing, and paid advertising campaigns.
                        We tailor our approach to meet the unique needs of every client, ensuring maximum impact and sustainable growth.
                        Our team of dedicated professionals combines expertise, creativity, and cutting-edge technology to help your business 
                        thrive in the digital landscape. Whether you're a startup aiming to establish a strong online presence or an 
                        established enterprise looking to enhance your reach, Quantum Digital is your partner in success.
                        Join us as we redefine digital marketing with precision, innovation, and a commitment to excellence.
                    </p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className="col-10 about">
                        <div className={styles.accordion_custom}>
                            {[
                                { title: "Our Mission", content: "To empower brands by delivering innovative marketing solutions that drive measurable results." },
                                { title: "Our Services", content: "We offer social media management, SEO optimization, content marketing, and paid advertising campaigns." },
                                { title: "Why Choose Us?", content: "Our team combines expertise, creativity, and cutting-edge technology to help your business thrive in the digital landscape." }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.accordion_item} ${activeIndex === index ? styles.active : ''}`}
                                >
                                    <div
                                        className={styles.accordion_header}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {item.title}
                                        <span className={styles.arrow}>
                                            {activeIndex === index ? '▲' : '▼'}
                                        </span>
                                    </div>
                                    <div
                                        className={styles.accordion_body}
                                        style={{
                                            display: activeIndex === index ? 'block' : 'none',
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
