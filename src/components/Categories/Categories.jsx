import styles from './Categories.module.css'
import man from '../../Assets/pngegg (12) 1.svg'
import women from '../../Assets/pngegg (11) 1.svg'
const Categories = () => {
    return (
        <section className='category py-32'>
            <div className="container">
                <div className='grid grid-cols-3 gap-6 '>
                    <div className='bg-card-gray rounded relative h-96 align-middle p-5'>
                        <h2 className='text-4xl text-font-blue pt-20 pb-5 font-extrabold  font-Montserrat'>Men <br /> Collection</h2>
                        <button class="border-button-blue border text-white py-2 px-4 rounded">
                <span className='text-font-blue'>SHOP NOW</span>
              </button>
                        <img className='absolute right-0 top-24' src={man} alt="" />
                    </div>
                    
                    <div className='bg-card-gray'>
                    <h2>1</h2>
                    </div>

                    <div className='bg-card-gray rounded relative h-96 align-middle p-5'>
                        <h2 className='text-4xl text-font-blue pt-20 pb-5 font-extrabold  font-Montserrat'>Women <br /> Collection</h2>
                        <button class="border-button-blue border text-white py-2 px-4 rounded">
                <span className='text-font-blue'>SHOP NOW</span>
              </button>
                        <img className='absolute right-0 top-24' src={women} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;