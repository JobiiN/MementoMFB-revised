import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './assets/animation (2).json'


function jsun() {
    return (
        < section className="jsun-section">

            <div className="jsun-title-overlay">
                <h1 className='jsun-big-title sub-heading'>Ready to Bank for your Bigger Dreams?</h1>
                <a href="#contact" className="contact">
                    <span className="roll-wrap">
                        <span className="roll-text top">Contact Us</span>
                        <span className="roll-text bottom">Contact Us</span>
                    </span>
                </a>
            </div>


            <div className="jsun-animation-wrap">
                <Player
                    autoplay
                    loop
                    src={animationData}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                />
            </div>
        </section>
    )
}

export default jsun
