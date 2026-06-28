import officeM from './assets/worker.png'
import shopM from './assets/trader.png'
import cbm from './assets/cbnlogo.png'
import ndi from './assets/ndicLogo_dark.png'
import healthM from './assets/doctor.png'

function Loans() {
    return (<>

       
<div className='color-back2'>
        <div className='loans-title-card' data-aos="fade-up" data-aos-delay="100">
            <span className='little-title'>LOANS & ASSET FINANCE</span>
            <h2 className='big-title'>Working capital, when it counts.</h2>
        </div>
        <div className='bento-grid'>



            <div className='Salary-loan-card' data-aos="fade-up" data-aos-delay="100">
                <div className='card-img-wrap'>
                    <div className='card-img-bubble'></div>
                    <img src={officeM} />
                </div>
                <h2 className='card-title'>Salary Loans</h2>
                <span>Quick financing for working professionals. Cover personal needs, emergencies or opportunities without the wait</span>

            </div>

            <div className='SME-loan-card' data-aos="fade-up" data-aos-delay="100">
                <div className='card-img-wrap'>
                    <div className='card-img-bubble'></div>
                    <img src={shopM} />
                </div>
                <h2 className='card-title'>SME Loans</h2>
                <span>Business growth support for small and medium enterprises. Get the capital you need to expand and scale.</span>
            </div>



            <div className='SME-card' data-aos="fade-up" data-aos-delay="100">
                <div className='healthcare-deets'>
                    <h2 className='card-title'>HealthCare Loans</h2>
                    <span>Financing for clinics, pharmacies, and healthcare providers. Equip your facility, expand services, or manage cash flow.</span>
                </div>
                <div className='card-img-wrap'>
                    <div className='card-img-bubble'></div>
                    <img src={healthM} />
                </div>
            </div>

        </div>
        <div className='NDIC-card' data-aos="fade-up" data-aos-delay="100">
            <div className='licensed-loan'>
                <span>Licensed & Protected</span>
                <img className="cbnLogo" src={cbm} />
                <img className="ndicLogo" src={ndi} />
            </div>
        </div>
        </div>
    </>)
}
export default Loans