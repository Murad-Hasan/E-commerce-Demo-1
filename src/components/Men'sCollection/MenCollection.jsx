import styles from './MenCollection.module.css'
import image1 from '../../Assets/Rectangle 944.svg'
import { FaArrowRight } from 'react-icons/fa'

const MenCollection = () => {
    return (
        <section className='m-16'>
            <div className="container grid grid-cols-2 gap-4">
                <div className={`rounded overflow-hidden ${styles.leftPic}`}>
                    <img src={image1} alt=".." />
                </div>
                <div className={styles.rightContent}>
                   <div className="mens-card py-5">
                        <div className="right-headLine">
                          <h2 className='text-4xl font-Montserrat text-font-blue font-semibold'>Men’s Collection</h2>
                        </div>
                        <div className="favorite flex justify-between items-center py-4">
                            <p className='text-font-blue text-xl font-semibold font-Montserrat'>Buy your favorite products</p>
                            <p className='text-red-500 text-xl font-semibold font-Montserrat'>See more <FaArrowRight className='inline-block'/> </p>
                        </div> 
                   </div>
                </div>
            </div>
        </section>
    );
};

export default MenCollection;