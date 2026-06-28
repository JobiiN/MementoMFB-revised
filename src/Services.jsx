import officeMan from './assets/office.png'
import shopMan from './assets/shop.png'
import cbn from './assets/cbnlogo.png'
import ndic from './assets/ndicLogo_dark.png'
import healthMan from './assets/health.jpg'

import NairaIcon from "./NairaIcon";

function Services() {
    return (
        <>
            <div id='Services' />
            <div className='ServicesSection'>
                <div className='services-header' data-aos="fade-up">
                    <span className='little-title'>OUR SERVICES</span>
                    <h2 className='big-title'>Banking that fits every kind of customer.</h2>
                </div>

                <div className='services-cards'>
                    <div className='service-card' data-aos="fade-up" data-aos-delay="100">
                        <div className='service-icon savings-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9.5L12 4L22 9.5" stroke="#F36C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 9.5V19H20V9.5" stroke="#F36C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 19V13H15V19" stroke="#F36C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>Savings Accounts</h3>
                        <p>Secure savings solutions that help customers grow financially.</p>
                    </div>

                    <div className='service-card' data-aos="fade-up" data-aos-delay="200">
                        <div className='service-icon current-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="5" width="20" height="14" rx="2" stroke="#F26A1F" strokeWidth="2" />
                                <path d="M2 10H22" stroke="#616163" strokeWidth="2" />
                                <path d="M6 15H10" stroke="#616163" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3>Current Accounts</h3>
                        <p>Flexible banking for individuals and businesses.</p>
                    </div>

                    <div className='service-card' data-aos="fade-up" data-aos-delay="300">
                        <div className='service-icon loans-icon'>
                            <NairaIcon/>
                        </div>
                        <h3>Loans & Asset Financing</h3>
                        <p>Quick and accessible financing for salary earners, traders and SMEs.</p>
                    </div>

                    <div className='service-card' data-aos="fade-up" data-aos-delay="400">
                        <div className='service-icon agent-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12L12 3L21 12" stroke="#FDC32E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 10V20H19V10" stroke="#FDC32E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="15" r="2" stroke="#FDC32E" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Agency Banking</h3>
                        <p>Convenient banking services closer to your community.</p>
                    </div>
                </div>

                  </div>
        </>
    )
}

export default Services
