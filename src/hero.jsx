import video from './assets/video2.mp4'
import videoWebm from './assets/video2.webm'
import PosterImg from './assets/poster.png'
import cbn from './assets/cbnlogo.png'
import ndic from './assets/ndicLogo_dark.png'
import p1 from './assets/person1.avif'
import p2 from './assets/person2.avif'
import p3 from './assets/person3.avif'
import woman from './assets/agent.png'
import bigLog from './assets/rectangle.png'
function Hero() {

    return (
        <>
            <section className="hero">

                <div className="hero-overlay" />

                <div className="hero-content">


                <div className='heropictext'>
                    <div className="herodiv">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <strong className="heroh1">Banking for </strong>
                            <small className="heroh2">Bigger Dreams.</small>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h6>
                                Simple, secure and technology-driven
                                banking solutions designed to help individuals,
                                traders, salary earners and SMEs grow confidently.
                            </h6>
                        </div>

                        <div className='CTAs' data-aos="fade-up" data-aos-delay="100">
                            <a href="#contact" className="contact">
                                <span className="roll-wrap">
                                    <span className="roll-text top">Contact Us</span>
                                    <span className="roll-text bottom">Contact Us</span>
                                </span>
                            </a>
                            <a href="#Services" className="contact SoSc">
                                <span className="roll-wrap">
                                    <span className="roll-text top">See Our Services</span>
                                    <span className="roll-text bottom">See Our Services</span>
                                </span>
                            </a>
                        </div>

                    </div>

                    <div className='herodiv2'>
                        <img src={bigLog} className='herobigL'/>
                        <img src={woman} className='heropic'/>
                    </div>
</div>

                    <section className='hero-stats' data-aos="fade-up" data-aos-delay="300">
                        <div className='total-cust'>
                            <p>100+</p>
                            <span>Loans disbursed to individuals, traders and SMEs across Nigeria.</span>
                        </div>

                        <div className="line-divider">

                        </div>

                        <div className='licensed'>
                            <span>Licensed & Protected</span>
                            <pic className='licensedIMAGES'>
                                <img className="cbnLogo" src={cbn} />
                                <img className="ndicLogo" src={ndic} />
                            </pic>
                        </div>

                        <div className="line-divider">

                        </div>

                        <div className='disbursed'>
                            <div className='disbursed-title'>
                                <div className='disbursed-pics'>
                                    <img className="sPeople" src={p1} />
                                    <img className="sPeople" src={p2} />
                                    <img className="sPeople" src={p3} />
                                </div>
                                <p>2000+</p>
                            </div>
                            <span>Customers have accessed our banking services and growing daily.</span>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
};

export default Hero