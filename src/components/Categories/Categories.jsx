import styles from './Categories.module.css'
import man from '../../Assets/pngegg (12) 1.png'
import women from '../../Assets/pngegg (11) 1.png'
const Categories = () => {
    return (
        <section className='category py-32'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <div className='bg-card-gray rounded relative h-96 align-middle mb-10'>
                        <h2 className='text-4xl text-font-blue pt-20 pb-5 font-extrabold p-5 font-Montserrat'>Men <br /> Collection</h2>
                        <button className="border-button-blue border ml-5 text-white py-2 px-4 rounded">
                <span className='text-font-blue'>SHOP NOW</span>
              </button>
                        <img className='absolute right-0 top-24' src={man} alt="" />
                    </div>

                    <div className={styles.middleBackground}>
                     <div className="h-3/4 w-3/4 mx-auto flex items-center justify-center">
                        <div>
                        <h2 className='text-4xl text-font-blue  font-extrabold font-Montserrat'>Beats <br /> Collection</h2>
                         <button className="border-button-blue border text-white py-2 px-4 rounded">
                           <span className='text-font-blue'>SHOP NOW</span>
                            </button>
                        </div>
                     </div>
                    </div>

                    <div className='bg-card-gray rounded relative h-96 align-middle mb-10'>
                        <h2 className='text-4xl text-font-blue pt-20 pb-5 font-extrabold p-5 font-Montserrat'>Women <br /> Collection</h2>
                        <button className="border-button-blue border ml-5 text-white py-2 px-4 rounded">
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