import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './assets/animation.json'


function jsun() {
    return (
        < section className="jsun-section">


            <div className="jsun-animation-wrap">
                <div className="jsun-title-overlay">
                    <h1 className='jsun-big-title'>Ready to Bank for your Bigger Dreams?</h1>
                    <a href="#contact" className="contact">Contact Us</a>
                </div>

                <Player
                    autoplay
                    loop
                    src={animationData}
                    style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '2092 / 1230',
                        display: 'block'
                    }}
                />
            </div>
        </section>
    )
}

export default jsun
