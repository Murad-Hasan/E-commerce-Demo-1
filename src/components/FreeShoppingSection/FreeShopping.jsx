import styles from './FreeShopping.module.css'

const FreeShopping = () => {
    return (
       <section className={`md:my-9 sm:my-4 ${styles.freeShopping}`}>
            <div className={styles.bgSize}>
                <div className="container py-32">
                        <div className={styles.innerContainer}>
                            <h3 className='text-font-blue text-center text-4xl font-Montserrat font-medium'>
                            Free shipping worldwide on all <br />
                            baskets over $800.
                            </h3>
                        </div>
                    </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="0.5" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </section>
    );
};

export default FreeShopping;