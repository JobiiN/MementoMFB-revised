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
              <a href="mailto:info@memento.ng" data-aos="fade-up" data-aos-delay="100">
                <div className="mfb-footer__card">
                  <div className="mfb-footer__card-body">
                    <p className="mfb-footer__card-label"><Mail /> Email</p>
                    <div className="mfb-footer__card-value">
                      <a href="mailto:info@memento.ng">info@memento.ng</a>
                    </div>
                  </div>
                </div>
              </a>

              {/* ── Col 3 · Address ──────────────── */}
              <a href="https://maps.google.com/?q=194+Herbert+Macaulay+Way,+Yaba,+Lagos" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200">
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
              </a>

            </div>{/* /row */}
            <div className='footerAbou'>
              <p className='footerAbout'>
                {`We are a technology-driven microfinance bank built to help individuals and businesses achieve bigger dreams across Nigeria.

                Memento MFB is a subsidiary of `} <a href="https://www.mypaga.com/pagagroup/" style={{ color: '#F26A1F' }}>Paga Group LTD</a> {`(UK) and is licensed by the Central Bank of Nigeria (CBN). Deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC). 

                Paga Group owns Memento and the associated trademarks, which are licensed to its subsidiaries.`}</p>
            </div>

            <p className="mfb-footer__copyright">© 2026 Memento Microfinance Bank Ltd. All rights reserved.</p>

          </div>


        </div>


      </footer>

    </>
  );
}

export default Footee;
