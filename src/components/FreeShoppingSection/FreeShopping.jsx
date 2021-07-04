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
       </section>
    );
};

export default FreeShopping;