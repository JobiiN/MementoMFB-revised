import Core1 from './assets/integrity.png'
import Core2 from './assets/reliability.png'
import Core3 from './assets/growth.png'
import Core4 from './assets/customerF.png'
import Core5 from './assets/innovation.png'
import whcG from './assets/whcG.png'
import whcGMobile from './assets/whcGMobile.png'
import marWom from './assets/marWom.png'
import pillLogo from './assets/logoR2.png'
import { ShieldCheck, BadgeCheck, TrendingUp, HeartHandshake, Lightbulb } from 'lucide-react'


function AboutUss() {

    return (
        <>
            <div className='color-back'>
                <div id='AboutUs' />

                <div className='AboutSection2'>
                    <div className='WWa' data-aos="fade-up">
                        <span className="little-title">
                            <img className="little-title-logo" src={pillLogo} alt="" />
                            About Us
                        </span>
                        <h2 className="big-title">Empowering Dreams. Driving Growth.</h2>
                        <p className='fintech-driven'>At Memento Microfinance Bank, we combine modern technology, financial expertise, and customer-focused service to provide accessible
                            banking solutions for Nigerians. Built on a foundation of trust, we are committed to promoting financial inclusion and empowering local communities. Whether
                            supporting individual dreams or driving business success, we deliver the secure, innovative, and reliable financial services our customers need to build lasting
                            stability and create new opportunities for growth. </p>

                        <img src={marWom} className='marWom' />
                    </div>




                </div>

            </div>

        </>
    );

}
export default AboutUss