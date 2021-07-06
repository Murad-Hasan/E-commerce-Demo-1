import logo from "../../Assets/Reche Wears -01 1.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className='pt-5'>
      <div className="container">
        <div className='flex justify-between flex-wrap md:flex-row items-center flex-col sm:gap-y-1'>
         <div className='flex'>
         <div className='footerLogo'>
            <img src={logo} alt="logo" />
          </div>
          <div className={`self-end footerHeading`}>
            <h2 className="text-font-blue font-semibold text-base">
              Reche Wears <br /> Style Meets Serendipity
            </h2>
          </div>
         </div>
          <div className={`self-center md:self-end footerMenu`}>
            <ul className="flex gap-x-4 text-gray-500 font-medium flex-wrap">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Elements</Link>
              </li>
              <li>
                <Link to="/">Pages</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={`self-center md:self-end footerSocialIcon`}>
            <div className="icons flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="text-gray-600 h-7 w-7 fill-current"
                role="img"
              >
                <path d="M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="text-gray-600 h-7 w-7 fill-current"
                role="img"
              >
                <path d="M1.2 21.7h13V61h-13zm46.6-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="text-gray-600 h-7 w-7 fill-current"
                role="img"
              >
                <path d="M39.8 12.2H48V0h-9.7C26.6.5 24.2 7.1 24 14v6.1h-8V32h8v32h12V32h9.9l1.9-11.9H36v-3.7a3.962 3.962 0 0 1 3.8-4.2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                style={{color:'#06B6D4'}}
                className="h-7 w-7 fill-current"
                role="img"
              >
                <path d="M64 13.194a23.1 23.1 0 0 1-7.3 2.1 14.119 14.119 0 0 0 5.5-7.2c-1.9 1.2-6.1 2.9-8.2 2.9a13.782 13.782 0 0 0-9.6-4 13.187 13.187 0 0 0-13.2 13.2 13.576 13.576 0 0 0 .3 2.9c-9.9-.3-21.5-5.2-28-13.7a13.206 13.206 0 0 0 4 17.4c-1.5.2-4.4-.1-5.7-1.4-.1 4.6 2.1 10.7 10.2 12.9-1.6.8-4.3.6-5.5.4.4 3.9 5.9 9 11.8 9-2.1 2.4-9.3 6.9-18.3 5.5a39.825 39.825 0 0 0 20.7 5.8 36.8 36.8 0 0 0 37-38.6v-.5a22.861 22.861 0 0 0 6.3-6.7z" />
              </svg>
            </div>
          </div>
        </div>
        <hr  style={{border:'2px solid #f2f2f2', background:'#f2f2f2', marginTop:'20px'}}/>
        <div className='py-5 flex justify-between flex-col md:flex-row items-center'>
            <div className="left-content">
                <p className='text-gray-400 font-semibold text-base '>Terms of use <br /> Privacy Environmental Policy</p>
            </div>
            <div className="right-content">
                <p className='text-gray-400 font-semibold text-base'> Copyright © 2021 Rechi Wears. All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
