
import marWom from './assets/marWom.png'


function AboutUss() {

    return (
        <>
            <div className='color-back'>
                <div id='AboutUs' />

                <div className='AboutSection2'>
                    <div className='WWa' data-aos="fade-up">
                        <span className="little-title">
                            About Us
                        </span>
                        <h2 className="big-title sub-heading">Empowering Dreams. Driving Growth.</h2>
                        <p className='fintech-driven'>We combine modern technology, financial expertise, and customer-focused service to provide accessible
                            banking solutions for Nigerians. We are committed to promoting financial inclusion and empowering local communities. We deliver reliable financial services our customers need to build lasting
                            stability and create new opportunities for growth. </p>

                        <img src={marWom} alt="shining Woman" className='marWom' />
                    </div>




                </div>

            </div>

        </>
    );

}
export default AboutUss
