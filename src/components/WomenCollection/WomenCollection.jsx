import { FaArrowRight, FaStar } from "react-icons/fa";
import image1 from "../../Assets/Rectangle 945 (2).png";
import image2 from "../../Assets/Rectangle 945 (1).png";
import image3 from "../../Assets/Rectangle 946 (1).png";
import image4 from "../../Assets/Rectangle 947 (1).png";
import styles from "./WomenCollection.module.css";

const WomenCollection = () => {
  return (
    <section className="md:py-20 sm:py-5">
      <div className="container grid sm:grid-cols-1  md:grid-cols-2 gap-4">
        <div className="py-24">
          <div>
            <div className="right-header">
              <h2 className="text-4xl font-Montserrat text-font-blue font-semibold">
                Women’s Collection
              </h2>
            </div>
            <div className="favorite flex justify-between items-center py-4">
              <p className="text-font-blue text-xl font-semibold font-Montserrat">
                Buy your favorite products
              </p>
              <p className="text-red-500 text-xl font-semibold font-Montserrat">
                See more <FaArrowRight className="inline-block" />{" "}
              </p>
            </div>
            <div className={`grid grid-cols-3 gap-3 ${styles.productCard}`}>
              <div className={styles.singleCard}>
                <img className='cursor-pointer transform duration-300  hover:scale-105' src={image2} alt="" />
                <p className="font-Montserrat font-semibold text-lg text-font-blue py-2">
                  Girl’s Cloth
                </p>
                <p className="font-Montserrat font-bold text-lg text-font-blue py-1">
                  $120.00
                </p>
                <span className="text-yellow-300 flex items-center justify-start">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
              <div className={styles.singleCard}>
                <img className='cursor-pointer transform duration-300  hover:scale-105' src={image3} alt="" />
                <p className="font-Montserrat font-semibold text-lg text-font-blue py-2">
                  Girl’s Shoes
                </p>
                <p className="font-Montserrat font-semibold text-lg py-2">
                  <span className="text-gray-400 line-through">$100.00</span>{" "}
                  <span className=" text-font-blue">$70.00</span>
                </p>
              </div>
              <div className={styles.singleCard}>
                <img className='cursor-pointer transform duration-300  hover:scale-105' src={image4} alt="" />
                <p className="font-Montserrat font-semibold text-lg text-font-blue py-2">
                  Woen’s T-shirt
                </p>
                <p className="font-Montserrat font-bold text-lg text-font-blue py-1">
                  $80.00
                </p>
                {/* <span className="text-yellow-300 flex items-center justify-start">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className={`rounded overflow-hidden mx-auto cursor-pointer transform duration-300  hover:scale-105 ${styles.leftPic}`}>
          <img className="rounded" src={image1} alt=".." />
        </div>
      </div>
    </section>
  );
};

export default WomenCollection;
