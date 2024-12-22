import styles from './About.module.css'

function About() {
    return(
       <section className={styles.about_section}>
            <div className="col-12">
                <h1 className={`${styles.h1_first_about} ms-4 ps-4 pt-4`}>About Us</h1>
            </div>
            <div className='col-12'>
                <p className={styles.about_para}>Welcome to Quantum Digital, where creativity meets strategy. We’re a passionate team dedicated to helping 
                   businesses thrive in the ever-evolving digital landscape. From crafting compelling campaigns to driving 
                   measurable results, we specialize in solutions that make your brand stand out.At Quantum Digital, we believe 
                   in more than just marketing — we believe in building lasting connections. Whether it’s through engaging content, 
                   innovative strategies, or data-driven insights, our goal is simple: to empower your success.
                   Let’s create something extraordinary together.</p>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <div className={`${styles.keypoints} col-11 p-3`}>
                    <p className='p-1'>1. Empowering businesses to succeed online through innovative digital marketing strategies, creative solutions, and measurable results.</p>
                    <p className='p-1'>2. Transforming brands into digital leaders by delivering personalized marketing strategies that inspire engagement and growth.</p>
                    <p className='p-1'>3. At Quantum Digital, our mission is to drive meaningful connections between businesses and their audiences through creativity, innovation, and data-driven insights.</p>
                    <p className='p-1'>4. Helping businesses harness the power of digital marketing to achieve their goals and build lasting relationships with their customers.</p>
                    <p className='p-1'>5. To simplify digital marketing for businesses and provide impactful solutions that drive real-world results.</p>
                </div>
            </div>
            <div className='col-12'>
                <h1 className={`${styles.h3_company_his} ms-4 ps-4 pt-4`}>Company History</h1>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <div className={`${styles.keypoints} col-11 p-3`}>
                    <h2>Our Journey</h2>
                    <div>
                        <h4>2020 – The Beginning</h4>
                        <p className='p-1'>1. Quantum Digital was founded with a mission to help businesses harness the power of digital marketing.</p>
                        <p className='p-1'>2. Started as a small team of marketing enthusiasts, driven by creativity and innovation.</p>
                    </div>
                    <div>
                        <h4>2021 – Expanding Horizons</h4>
                        <p className='p-1'>1. Partnered with our first 10 clients, delivering impactful marketing campaigns and measurable growth.</p>
                        <p className='p-1'>2. Launched specialized services in SEO, social media marketing, and paid advertising.</p>
                    </div>
                    <div>
                        <h4>2022 – Building a Reputation</h4>
                        <p className='p-1'>1. Achieved recognition for exceptional results, winning our first industry award for campaign excellence.</p>
                        <p className='p-1'>2. Expanded our team with experts in content creation, analytics, and design.</p>
                    </div>
                    <div>
                        <h4>2023 – Innovation and Growth</h4>
                        <p className='p-1'>1. Introduced AI-powered marketing solutions and advanced analytics tools for clients.</p>
                        <p className='p-1'>2. Grew our client base internationally, serving businesses across multiple industries.</p>
                    </div>
                    <div>
                        <h4>2024 – Looking Ahead</h4>
                        <p className='p-1'>1. Continuing our commitment to innovation and client success.</p>
                        <p className='p-1'>2. Striving to set new standards in digital marketing and build long-term relationships with our partners.</p>
                    </div>
                </div>
            </div>
       </section>
    );
}

export default About