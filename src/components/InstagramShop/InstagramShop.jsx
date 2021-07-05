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
        <hr  style={{border:'2px solid #F26649', background:'#F26649', width:'200px', margin:'auto'}}/>
        <div className={`grid grid-cols-4 gap-4 py-20 ${styles.shopCard}`}>
          {/* <div className={styles.card1}>
          <div className={styles.hoverImg}>

          </div>
          </div> */}
          <div className={styles.card}>
              <img src={shopImage1} alt='cardPic' />
              <div className={styles.card__overlay}>
                <div className={styles.overlay__text}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="text-white h-7 w-7 mx-auto text-4xl"
              >
                <path d="M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z" />
              </svg>
              <div className={styles.button}>
                <button className="block mx-auto px-4 py-2 mt-4 shadow bg-button-blue text-white text-base rounded">Shop Now</button>
                </div>
                </div>
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
