import styles from "./InstagramShop.module.css";
import shopImage1 from "../../Assets/Rectangle 967.png";
import shopImage2 from "../../Assets/Rectangle 968.png";
import shopImage3 from "../../Assets/Rectangle 969.png";
import shopImage4 from "../../Assets/Rectangle 970.png";
import shopImage5 from "../../Assets/Rectangle 971.png";
import shopImage6 from "../../Assets/Rectangle 972.png";
import shopImage7 from "../../Assets/Rectangle 973.png";
import shopImage8 from "../../Assets/Rectangle 974.png";
import shopImage9 from "../../Assets/Rectangle 975.png";
import shopImage10 from "../../Assets/Rectangle 976.png";
import shopImage11 from "../../Assets/Rectangle 977.png";
import shopImage12 from "../../Assets/Rectangle 978.png";

const InstagramShop = () => {
  return (
    <section className={`py-24 ${styles.InstagramShop}`}>
      <div className="container">
        <div className="instagramShop">
          <p className="text-font-blue font-bold text-2xl text-center font-Montserrat">
            {" "}
            <span className="text-font-blue font-bold text-3xl">
              I</span>NSTAGRAM{" "}
            <span className="text-font-blue font-bold text-3xl">S</span>HOP
          </p>
        </div>
        <div className={`grid grid-cols-4 gap-4 py-20 ${styles.shopCard}`}>
          <div className={styles.card1}>
          <div className={styles.hoverImg}>

          </div>
          </div>
          <div className="card2">
            <div className="content">
              <img src={shopImage2} alt="" />
            </div>
          </div>
          <div  className="card3">
            <div className="content">
            <img src={shopImage3} alt="" />
            </div>
          </div>
          <div  className="card4">
            <div className="content">
            <img src={shopImage4} alt="" />
            </div>
          </div>
          <div className="card5">
            <div className="content">
            <img src={shopImage5} alt="" />
            </div>
          </div>
          <div className="card6">
            <div className="content">
            <img src={shopImage6} alt="" />
            </div>
          </div>
          <div className="card7">
            <div className="content">
            <img src={shopImage7} alt="" />
            </div>
          </div>
          <div className="card8">
            <div className="content">
            <img src={shopImage8} alt="" />
            </div>
          </div>
          <div className="card9">
            <div className="content">
            <img src={shopImage9} alt="" />
            </div>
          </div>
          <div className="card10">
            <div className="content">
            <img src={shopImage10} alt="" />
            </div>
          </div>
          <div className="card11">
            <div className="content">
            <img src={shopImage11} alt="" />
            </div>
          </div>
          <div className="card12">
            <div className="content">
            <img src={shopImage12} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.button}>
        <button className="block mx-auto shadow bg-button-blue hover:bg-font-blue focus:shadow-outline focus:outline-none text-white text-xl py-3 px-10 md:w-96 rounded">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default InstagramShop;
