import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowDownLeftSquareFill, BsHandbag } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { useToasts } from "react-toast-notifications";
import { Cart } from "../../../pages";
import { logo } from "../../../assets";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishListOpen, setisWishListOpen] = useState(false);

  //   const user = useSelector((state) => state.userLogin);
  //   const { userInfo } = user;
  //   console.log(user, "user");
  //   const logoutUser = useSelector((state) => state.userLogout);
  //   const { userLogout, error } = logoutUser;

  //   const { cartItems } = useSelector((state) => state.cart);

  const toggleCart = () => {
    setCartOpen(false);
  };

  const toogleWishList = () => {
    setisWishListOpen(false);
  };

  const handleLogout = () => {
    // if (!user?.userInfo?.access_token) return;
    // dispatch(logout(userInfo?.access_token));
  };

  //   useEffect(() => {
  //     if (error) {
  //       dispatch({ type: USER_LOGOUT_RESET });
  //       addToast(error, { appearance: "error", autoDismiss: true });
  //     } else if (userLogout) {
  //       dispatch({ type: USER_LOGOUT_RESET });

  //       addToast(userLogout?.message, {
  //         appearance: "success",
  //         autoDismiss: true,
  //       });
  //       navigate("/");
  //     }
  //   }, [userLogout, error, addToast, dispatch, navigate]);

  return (
    <header className="header scroll-header">
      <nav className="nav container-div">
        <a href="#home" className="nav__logo">
          <img width="70" src={logo} alt="shop" />
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="shop"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Shop
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="shop"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="shop"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Blog
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="nav__btns__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenuAltRight />
          </div>
        </div>

        <div className="nav__icons">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__mobileMenu nav__link">
                <AiOutlineHome />
              </Link>
            </li>

            <NavDropdown
              title={
                false ? (
                  <img
                    style={{ borderRadius: "50%" }}
                    width="22"
                    height="22"
                    src=""
                    alt=""
                  />
                ) : (
                  <AiOutlineUser className="nav__dropdown-icon" />
                )
              }
              id="collasible-nav-dropdown"
            >
              {false ? (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>

            <li className="nav__item">
              <a
                href="#services"
                className="nav__wrapper nav__icons__heart nav__link"
                aria-expanded={isWishListOpen ? "true" : "false"}
                onClick={() => {
                  setisWishListOpen((prev) => !prev);
                }}
              >
                <AiOutlineHeart />
                <span className="nav__icons__cart">1</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__wrapper nav__link"
                aria-expanded={isCartOpen ? "true" : "false"}
                onClick={() => {
                  setCartOpen((prev) => !prev);
                }}
              >
                <BsHandbag />
                <span className="nav__icons__cart">1</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hidden cart drawer */}
      <div className={isCartOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <Cart setCartOpen={setCartOpen} isCartOpen={isCartOpen} />
        </div>
        <div
          className={
            isCartOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toggleCart}
        />
      </div>

      {/* hidden wishlist drawer */}
      {/* <div className={isWishListOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <WishList
            setisWishListOpen={setisWishListOpen}
            isWishListOpen={isWishListOpen}
          />
        </div>
        <div
          className={
            isWishListOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toogleWishList}
        />
      </div> */}
    </header>
  );
};

export default Header;
