import styles from "./Header.module.css";
import logo from "../../Assets/Reche Wears -01 1.svg";
import searchIcon from '../../Assets/🌈 COLOR.svg'
import cart from '../../Assets/Vector.svg'
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [click, isClick] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header className={isScrolled ? styles.scrolled :  styles.navbar}>
      <nav className="container flex items-center justify-between py-1">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={`flex items-center justify-evenly flex-1 ${click ? styles.navMenu : styles.navMenuMobile}`}>
        <div className="font-Montserrat font-medium">
          <ul className={`flex items-center lg:gap-3 md:gap-1 ${styles.menuItems}`}>
            <li>
              <Link className='border-b-2 border-red-400' to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <li>
              <Link to="/">ELEMENTS</Link>
            </li>
            <li>
              <Link to="/">PAGES</Link>
            </li>
            <li>
              <Link to="/">BLOG</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-4 search_$_cart">
            <div className="search__box">
                <form className='relative'>
                   <input type='text' placeholder='Search Your Items' className="border bg-gray-50 shadow-md rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                   <img className='absolute top-2.5 right-3' src={searchIcon} alt="searchIcon" />
                </form>
            </div>
            <div className="cart relative">
                <img width='30px' src={cart} alt="cart" />
                <div className={`absolute -top-1 -right-1 ${styles.cartNumber}`}>
                    <span className='text-xs absolute font-medium text-white right-1.5'>2</span>
                </div>
            </div>
        </div>
        </div>
        <div className="menuBar md:hidden">
            {
                click ? <FaTimes className='cursor-pointer' onClick={ ()=> isClick(!click) } size='30px'/> : <FaBars className='cursor-pointer' onClick={ ()=> isClick(!click) } size='30px'/>
            }
            
        </div>
      </nav>
    </header>
  );
};

export default Header;
