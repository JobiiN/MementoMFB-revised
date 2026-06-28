import Core1 from './assets/integrity.png'
import Core2 from './assets/reliability.png'
import Core3 from './assets/growth.png'
import Core4 from './assets/customerF.png'
import Core5 from './assets/innovation.png'

import { ShieldCheck, BadgeCheck, TrendingUp, HeartHandshake, Lightbulb } from 'lucide-react'


function AboutUss() {

    return (
        <>
        <div className='color-back'>
            <div id='AboutUs' />
            <div className='AboutSection'>
                <div className="WWa" data-aos="fade-up">
                    <span className="little-title">ABOUT US</span>
                    <h2 className="big-title">We help customers grow.</h2>
                    <p>At Memento Microfinance Bank, we combine technology, financial expertise and customer-focused service to provide accessible banking solutions for Nigerians.</p>
                    <br />
                    <p>Our goal is to support bigger dreams through secure, innovative and reliable financial services.</p>

                    <p>We are committed to promoting FINANCIAL INCLUSION & EMPOWERING communities through accessible & responsible banking.</p>
                </div>

            </div>

            <div className='WWa' data-aos="fade-up">
                <h2 className="big-title">A fintech-driven bank, built on trust.</h2>
                <p>Memento Microfinance Bank is a fintech-driven microfinance institution committed to delivering accessible and innovative banking services to individuals and businesses across Nigeria.</p>
                <p>We help our customers build finance stability & CREATE OPPORTUNITIES for growth.</p>
            </div>

            <div className="coreV" data-aos="fade-up">
                <div className="integrity" data-aos="fade-up" data-aos-delay="100">
                    <ShieldCheck size={48} strokeWidth={1.5} color="#C8500F" />
                    <p>Integrity</p>
                </div>

                <div className="reliability" data-aos="fade-up" data-aos-delay="200">
                    <BadgeCheck size={48} strokeWidth={1.5} color="#C8500F" />
                    <p>Reliability</p>
                </div>

                <div className="growth" data-aos="fade-up" data-aos-delay="300">
                    <TrendingUp size={48} strokeWidth={1.5} color="#C8500F" />
                    <p>Growth</p>
                </div>

                <div className="customerF" data-aos="fade-up" data-aos-delay="400">
                    <HeartHandshake size={48} strokeWidth={1.5} color="#C8500F" />
                    <p>Customer Focus</p>
                </div>

                <div className="innovation" data-aos="fade-up" data-aos-delay="500">
                    <Lightbulb size={48} strokeWidth={1.5} color="#C8500F" />
                    <p>Innovation</p>
                </div>





            </div>

</div>

        </>
    );

}
export default AboutUss