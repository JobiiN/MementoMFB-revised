import cbn from './assets/cbnlogo.png'
import ndic from './assets/ndicLogo_dark.png'
import woman from './assets/agent.png'
import heroCompact from './assets/agen.png'
import bigLog from './assets/rectangle.png'
function Hero() {

    return (
        <>
            <section className="hero">

                <div className="hero-overlay" />

                <div className="hero-content" data-aos="fade-up" data-aos-delay="100">


                    <div className='heropictext'>
                        <div className="herodiv">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <h1 className="heroh1">Banking for </h1>
                                <h2 className="heroh2">Bigger Dreams.</h2>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <p>
                                    Simple, secure and technology-driven
                                    banking solutions designed to help individuals,
                                    and businesses grow confidently.
                                </p>
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
                            <div className="hero-layered-art">
                                <img src={bigLog} alt="MementoM" className='herobigL' />
                                <img src={woman} alt="MementoLady" className='heropic' />
                            </div>

                            <img
                                src={heroCompact}
                                className="hero-compact-art"
                                alt="Memento banking agent"
                            />

                            <div className='licensed'>
                                <span>Licensed & Protected</span>
                                <div className='licensedIMAGES'>
                                    <img className="cbnLogo" src={cbn} alt="Central Bank of Nigeria" />
                                    <img className="ndicLogo" src={ndic} alt="Nigeria Deposit Insurance Corporation" />
                                </div>
                            </div>
                        </div>


                    </div>




                </div>
            </section>
        </>
    )
};

export default Hero