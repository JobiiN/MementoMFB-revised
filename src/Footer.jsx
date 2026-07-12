import logo from './assets/logoR.png'
import pattern from './assets/pattern3.png'
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';

function Footee() {
  return (
    <>
      <footer className="mfb-footer" id="contact">
        <div className="mfb-footer__inner">
          <div className="mfb-footer__container">

            <div className="mfb-footer__row">

              {/* ── Col 1 · Brand ─────────────────────── */}
              <div className="mfb-footer__brand" data-aos="fade-up">
                <a href="#home" className="mfb-footer__brand-link" aria-label="Memento Microfinance Bank">

                  <span className="mfb-footer__brand-name">
                    <img className="footer-logo" src={logo}></img>
                  </span>
                </a>

                <div className="mfb-footer__socials" aria-label="Social media">

                </div>
              </div>

              {/* ── Col 2 · Email ──────────────── */}
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="mfb-footer__card">
                  <div className="mfb-footer__card-body">
                    <p className="mfb-footer__card-label"><Mail /> Email</p>
                    <div className="mfb-footer__card-value">
                      <a href="mailto:info@memento.ng">info@memento.ng</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Col 3 · Address ──────────────── */}
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="mfb-footer__card">
                  <div className="mfb-footer__card-body">
                    <p className="mfb-footer__card-label"><MapPin /> Head Office Address</p>
                    <div className="mfb-footer__card-value">
                      <a href="https://maps.google.com/?q=194+Herbert+Macaulay+Way,+Yaba,+Lagos" target="_blank" rel="noreferrer">
                        194 Herbert Macaulay Way, Yaba, Lagos
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>{/* /row */}

            <div className='footerAbou'>
            <p className='footerAbout'>We are a fintech-driven microfinance bank built to help individuals, traders, salary earners and SMEs achieve bigger dreams across Nigeria.</p>
            <p className='footerAbout'>Memento Microfinance Bank is a subsidiary of Paga Group LTD UK and is licensed as a Tier 1 Unit Microfinance Bank by the Central Bank of Nigeria (CBN), and deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC).</p>
            <p className='footerAbout'>Paga Group LTD UK owns Paga and associated trademarks which are licensed to its subsidiaries. Pagatech Limited is a subsidiary of Paga Group LTD UK.</p>
            </div>
            
            <p className="mfb-footer__copyright">© 2026 Memento Microfinance Bank Ltd. All rights reserved.</p>

          </div>


        </div>
        <img src={pattern} style={{ width: '100%', display: 'block', height: '60px', objectFit: 'cover', opacity: '80%' }} />    </footer>
    </>
  );
}

export default Footee;
