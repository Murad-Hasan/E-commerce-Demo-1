import styles from "./TopCategory.module.css";
import bag from "../../Assets/Rectangle 948.svg";
import hoodies from "../../Assets/Rectangle 956.svg";
import sneaker from "../../Assets/Rectangle 957.svg";
import watch from "../../Assets/Rectangle 958.svg";
import bags from "../../Assets/Rectangle 959.svg";
import pants from "../../Assets/Rectangle 960.svg";
import tShirt from "../../Assets/Rectangle 961.svg";
import gadget from "../../Assets/Rectangle 962.svg";
import { FaStar } from "react-icons/fa";

const TopCategory = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div
          className={`flex justify-center items-center overflow-hidden py-10 gap-6 ${styles.heading}`}
        >
          <p className="md:text-4xl sm:text-xs border-b-2 border-red-600 text-font-blue font-semibold font-Montserrat">
            TOP SELLER
          </p>
          <p className="md:text-4xl sm:text-xs text-gray-400 font-semibold font-Montserrat">
            TOP RATE
          </p>
          <p className="md:text-4xl sm:text-xs text-gray-400 font-semibold font-Montserrat">
            TOP SALE
          </p>
        </div>
        <div className={`grid grid-cols-4 gap-4${styles.productContainer}`}>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={bag} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $80.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Backpack
              </p>
              <span className="text-yellow-300 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={hoodies} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $60.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Hoodie
              </p>
              <span className="text-gray-500 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={sneaker} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $250.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Sneaker
              </p>
              <span className="text-gray-500 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={watch} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $80.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Watch
              </p>
              <span className="text-yellow-300 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={bags} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $65.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Bags
              </p>
              <span className="text-gray-500 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={pants} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $20.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Pants
              </p>
              <span className="text-gray-500 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={tShirt} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $50.00
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                T-Shirt
              </p>
              <span className="text-yellow-300 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className={`py-5 ${styles.singleProductCard}`}>
            <div className={styles.productsImage}>
              <img src={gadget} alt="bag" />
            </div>
            <div className={`py-3 ${styles.productsContent}`}>
              <p className="font-Montserrat font-bold text-font-blue text-xl text-center py-1">
                $95.99
              </p>
              <p className="font-Montserrat font-medium text-font-blue text-xl text-center py-1">
                Cool Gadget
              </p>
              <span className="text-gray-500 flex items-center justify-center py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.button}>
        <button class="block mx-auto shadow bg-button-blue hover:bg-font-blue focus:shadow-outline focus:outline-none text-white text-xl py-3 px-10 md:w-96 rounded">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default TopCategory;
