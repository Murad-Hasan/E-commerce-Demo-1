import styles from './Footer.module.css'
import logo from '../../Assets/Reche Wears -01 1.svg'
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className="container">
                <div className={` ${styles.footerContainer}`}>
                <div className={styles.footerLogo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.footerHeading}></div>
                <div className={styles.footerMenu}></div>
                <div className={styles.footerSocialIcon}></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;