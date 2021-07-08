import styles from "./Header.module.css";
import logo from "../../Assets/Reche Wears -01 1.png";
import cart from "../../Assets/Vector.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [click, isClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header className={isScrolled ? styles.scrolled : styles.navbar}>
      <nav className="container flex items-center justify-between py-1">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className={`flex items-center justify-evenly flex-1 ${
            click ? styles.navMenu : styles.navMenuMobile
          }`}
        >
          <div className="font-Montserrat font-medium">
            <ul
              className={`flex items-center lg:gap-3 md:gap-1  ${styles.menuItems}`}
            >
              <li>
                <Link className="border-b-2 border-red-400" to="/">
                  HOME
                </Link>
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
          <div className="flex items-center gap-x-2 search_$_cart">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white py-2 px-5 pr-8 rounded-full text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search Your Items"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 my-3 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 h-4 w-4 fill-current"
                  viewBox="0 0 57 57"
                  width="512"
                  height="512"
                >
                  <path d="M55.1 51.9L41.6 37.8c3.5-4.1 5.4-9.4 5.4-14.8 0-12.7-10.3-23-23-23s-23 10.3-23 23 10.3 23 23 23c4.8 0 9.3-1.4 13.2-4.2l13.7 14.2c0.6 0.6 1.3 0.9 2.2 0.9 0.8 0 1.5-0.3 2.1-0.8C56.3 55 56.3 53.1 55.1 51.9zM24 6c9.4 0 17 7.6 17 17s-7.6 17-17 17 -17-7.6-17-17S14.6 6 24 6z" />
                </svg>
              </button>
            </div>
            <div className="cart relative cursor-pointer">
              <img width="30px" src={cart} alt="cart" />
              <div className={`absolute -top-1 -right-1 ${styles.cartNumber}`}>
                <span className="text-xs absolute font-medium text-white right-1.5">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="menuBar md:hidden">
          {click ? (
            <FaTimes
              className="cursor-pointer"
              onClick={() => isClick(!click)}
              size="30px"
            />
          ) : (
            <FaBars
              className="cursor-pointer"
              onClick={() => isClick(!click)}
              size="30px"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
