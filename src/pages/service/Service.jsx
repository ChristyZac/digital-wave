import { Link } from 'react-router-dom';
import styles from './Service.module.css';



function Service() {

    

    return(
        <section className={styles.service}>
            <div className="col-12">
                <h1 className={`${styles.h1_first_service} ms-4 ps-4 pt-4`}>Services</h1>
            </div>
            <div className='col-12'>
                <p className={styles.service_para}>
                    Our services are designed to empower businesses with innovative digital marketing strategies that deliver real results. 
                    From driving organic traffic through expert SEO techniques to creating impactful ad campaigns with PPC, we help your 
                    brand stand out in the competitive online space. Our social media management solutions build meaningful connections with 
                    your audience, while our content marketing strategies establish your authority in the industry. Additionally, we craft 
                    visually stunning and user-friendly websites that drive engagement and boost conversions. Let us help you achieve your 
                    marketing goals and take your business to the next level!
                </p>
            </div>
            <div className='col-12 p-4'>
                <div className='col-12 '>
                    <div class={styles.card}>
                        <div class={styles.card_inner}>
                            <div class={styles.card_front}>
                                <p>Social Media Management</p>
                            </div>
                            <div class={styles.card_back}>
                                <p>Social Media Management focuses on enhancing a brand's visibility and engagement across platforms like Facebook, 
                                    Instagram, LinkedIn, and Twitter. It includes creating and sharing high-quality, engaging content such as posts, 
                                    images, and videos that resonate with the target audience. The process involves planning content schedules, 
                                    analyzing audience behavior, and posting at the best times to maximize reach and interaction. Social media 
                                    managers also monitor and respond to comments and messages to build a strong relationship with the audience. 
                                    Additionally, they use analytics tools to track performance metrics, refine strategies, and ensure the brand's 
                                    online presence aligns with its overall marketing goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 '>
                    <div class={styles.card}>
                        <div class={styles.card_inner}>
                            <div class={styles.card_front}>
                                <p>SEO Optimization</p>
                            </div>
                            <div class={styles.card_back}>
                                <p>SEO Optimization, or Search Engine Optimization, is a strategic process to increase a website's ranking on 
                                    search engine result pages (SERPs). This involves researching relevant keywords to understand what potential 
                                    customers are searching for. On-page SEO ensures these keywords are effectively used in titles, descriptions, 
                                    and content, while off-page SEO focuses on building high-quality backlinks to enhance the website’s authority. 
                                    Technical SEO ensures that the website is mobile-friendly, loads quickly, and follows best practices for coding. 
                                    By continuously monitoring traffic, keyword rankings, and user behavior, SEO Optimization creates a seamless 
                                    online experience that attracts organic traffic and drives conversions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 '>
                    <div class={styles.card}>
                        <div class={styles.card_inner}>
                            <div class={styles.card_front}>
                                <p>PPC (Pay-Per-Click) Campaigns</p>
                            </div>
                            <div class={styles.card_back}>
                                <p>Pay-Per-Click (PPC) advertising is a cost-effective method to promote businesses and drive targeted traffic to 
                                    websites. PPC allows advertisers to bid for ad placement in search engine results or on social media platforms 
                                    based on specific keywords and audience demographics. Each time someone clicks the ad, a small fee is charged, 
                                    ensuring cost-efficiency. Campaigns include designing attention-grabbing advertisements, defining target 
                                    audiences, and continuously optimizing performance through analytics. Tools like Google Ads and social media 
                                    platforms provide insights into click-through rates, impressions, and conversions, enabling businesses to 
                                    fine-tune their strategies and achieve better ROI.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 '>
                    <div class={styles.card}>
                        <div class={styles.card_inner}>
                            <div class={styles.card_front}>
                                <p> Content Marketing</p>
                            </div>
                            <div class={styles.card_back}>
                                <p>Content Marketing is a long-term strategy focused on building a strong connection with an audience by providing 
                                    valuable, informative, and consistent content. It includes creating blogs, videos, infographics, and e-books that 
                                    address customer needs and interests. By sharing content across multiple channels like social media, email, and 
                                    websites, businesses can establish themselves as industry leaders and build trust with their audience. This 
                                    approach not only drives traffic to the website but also improves search engine rankings and boosts lead generation. 
                                    The ultimate goal is to nurture relationships with potential customers, keeping them engaged and encouraging 
                                    loyalty over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Service