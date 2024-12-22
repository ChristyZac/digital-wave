import styles from './ContactUs.module.css'


function ContactUs () {
    return(
        <section className={styles.section}>
            <div className='col-12'>
                <h1 className={styles.h1_first}>Contact Us</h1>
            </div>
            <div className='col-12 d-flex justify-content-center pb-4'>
                <div className='col-10'>
                    <div className={styles.contact_form}>
                        <span className="heading">Contact Us</span>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder='Enter Name...' required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value="" placeholder='Enter Email...' required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value="" placeholder='Enter Message...' required></textarea>
                            <div className='d-flex justify-content-end'>
                                <button type="submit">Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default ContactUs