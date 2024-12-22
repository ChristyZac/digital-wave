import styles from './Home.module.css'
import heroSide from '../../assets/images/hero-right.png';
import testimonialLeft from '../../assets/images/testimonial-left.png'
import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

function Home() {

    const [activeIndex, setActiveIndex] = useState(null);
    
        const toggleAccordion = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        const testimonials = [
            {
              id: 1,
              name: 'John Doe',
              image: 'https://via.placeholder.com/100', // Replace with actual image URL
              feedback: 'This service was amazing! Highly recommend to anyone looking for quality and professionalism.',
              designation: 'Software Engineer',
            },
            {
              id: 2,
              name: 'Jane Smith',
              image: 'https://via.placeholder.com/100', // Replace with actual image URL
              feedback: 'I was thoroughly impressed with the attention to detail. Will definitely use this service again.',
              designation: 'Product Manager',
            },
            {
              id: 3,
              name: 'Emily Johnson',
              image: 'https://via.placeholder.com/100', // Replace with actual image URL
              feedback: 'The team was fantastic! Everything was delivered on time and exceeded expectations.',
              designation: 'UX Designer',
            },
          ];


    return(
        <>
            <section className={styles.hero_section}>
                <div className='col-12 d-flex h-75 flex-wrap'>
                    <div className='col-6 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className={styles.h1_first}>Elevate Your</h1>
                            <h1 className={styles.h1_first}>Brand with </h1>
                            <h1 className={styles.h1_second}>Cutting-Edge</h1>
                            <h1 className={styles.h1_second}> Marketing Strategies.</h1>
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <img className={styles.hero_right} src={heroSide} />
                    </div>
                </div>
                <div className={`${styles.company} col-12`}>
                    <button className={styles.button}>Get Started</button>
                </div>
            </section>

            <section className={styles.about_section}>
                <div className="col-12">
                    <h1 className={`${styles.h1_first_about} ms-4 ps-4 pt-4`}>About Us</h1>
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

            <section className={styles.service_section}>
                <div className='col-12 d-flex'>
                    <div className='col-6'>
    
                    </div>
                    <div className='col-6'>
                            <h1 className={`${styles.h1_first_service} ms-4 ps-4 pt-4`}>Service</h1>
                    </div>
                </div>
                <div className='col-12 d-flex'>
                    <div className='col-3'>
                        <div className={`${styles.e_card} ${styles.playing}` }>
                            <div className={styles.image}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                        
                            <div className={styles.infotop}>
    
                                <br />      
                                    Social Media Management
                                <br />
                                <div className={styles.name}><a href="#">Know more..</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.e_card} ${styles.playing}` }>
                            <div className={styles.image}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                        
                            <div className={styles.infotop}>
    
                                <br />      
                                    SEO Optimization
                                <br />
                                <div className={styles.name}><a href="#">Know more..</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.e_card} ${styles.playing}` }>
                            <div className={styles.image}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                        
                            <div className={styles.infotop}>
    
                                <br />      
                                    PPC Companies
                                <br />
                                <div className={styles.name}><a href="#">Know more..</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className={`${styles.e_card} ${styles.playing}` }>
                            <div className={styles.image}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                            <div className={styles.wave}></div>
                        
                            <div className={styles.infotop}>
    
                                <br />      
                                    Content Marketing
                                <br />
                                <div className={styles.name}><a href="#">Know more..</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonial_section_main}>
                <div className='col-12'>
                    <h1 className={`${styles.h1_first_testimonial} ms-4 ps-4 pt-4`}>What People Say</h1>
                </div>
               
               <div className='col-12'>
                    <div className={`${styles.testimonial_section} col-12 d-flex`}>
                        <div className={`${styles.testimonial_cards} col-12 d-flex flex-wrap`}>
                            {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className={`${styles.testimonial_card} col-4`}>
                                
                                <h3 className={styles.testimonial_name}>{testimonial.name}</h3>
                                <p className={styles.testimonial_designation}>{testimonial.designation}</p>
                                <p className={styles.testimonial_feedback}>"{testimonial.feedback}"</p>
                            </div>
                            ))}
                        </div>
                    </div>
               </div>
            </section>  
        </>
    );
}

export default Home



