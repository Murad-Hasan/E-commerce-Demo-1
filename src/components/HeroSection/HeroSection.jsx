import styles from './HeroSection.module.css'
import HeroSlider from './HeroSlider';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className="container">
                <HeroSlider/>
            </div>
        </section>
    );
};

export default HeroSection;