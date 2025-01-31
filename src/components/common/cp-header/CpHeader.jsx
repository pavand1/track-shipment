import { useState, useEffect } from "react";
import styles from "./cpHeader.module.scss"; // Import CSS Module
import mockMenuData from "./CpHeader_data"; // Import the mock data
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const accountURL = import.meta.env.VITE_ACCOUNT_URL;
const rateCheckURL = import.meta.env.VITE_RATE_CHECK_URL;
const trackOrderURL = import.meta.env.VITE_TRACK_ORDER_URL;

const CpHeader = ({ setRouteChange, outsideClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuRight, setIsMenuRight] = useState(false); // New state to track menu alignment
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const { pathname } = useLocation();

  const handleScroll = () => {
    setIsMenuRight(window.scrollY > 300);
    if (window.scrollY < 300) {
      setScrollY(window.scrollY);
    } else setScrollY(300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(outsideClick);
  }, [outsideClick]);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu Open State:", !isMenuOpen);
  };

  // Toggle the dropdown menu for the respective item
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Handle menu click events based on route name
  const handleMenuClick = (index, route) => {
    setMenuOpen(false);
    setActiveIndex(index);
    setActiveDropdown(null);
    setRouteChange(route?.name);
    if (route.name === "Account") {
      window.open(accountURL, "_blank");
    }
    if (route.name === "Pricing") {
      window.open(rateCheckURL, "_blank");
    }
    if (route.name === "Track Order") {
      window.open(trackOrderURL, "_blank");
    }
  };

  const scaleFactor = Math.max(1 - scrollY * 0.0015, 0.5);
  const width = Math.max(530 - scrollY * 1.5, 200);
  const height = Math.max(200 - scrollY * 1.5, 60);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {scrollY > 250 || window.innerWidth < 767 ? (
        <div
          className={styles.mobileLogo}
          style={{
            position: "absolute",
            width: `12%`,
            cursor: "pointer",
            marginLeft: "2rem",
          }}
          onClick={() => {
            navigate("/");
            setRouteChange("/");
          }}
        >
          <img
            className="bt-logo"
            src="../../images/Home/Buckle Track Option.svg"
            alt=""
          />
        </div>
      ) : (
        <div
          className={styles.headerLogo}
          style={{
            transform: `translateY(${-(scrollY * 0.7)}px) translateX(${-(
              scrollY * 0.6
            )}px) scale(${scaleFactor})`,

            width: `${width}px`,
            height: `${height}px`,
          }}
          onClick={() => navigate("/")}
        >
          <img src="../../images/Home/Buckle Track Option.svg" alt="" />
        </div>
      )}
      <div
        className={`${styles.menuList} ${isMenuRight ? styles.rightAlign : ""}`} // Apply rightAlign class when scrolled
      >
        <div
          className={`${
            scrollY > 150 || window.innerWidth < 767
              ? styles.logoPlaceholder
              : ""
          }`}
        ></div>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            {mockMenuData.map((item, index) => (
              <li
                key={index}
                className={`
                  ${
                    item.dropdown
                      ? `${styles.dropdown} ${
                          activeDropdown === index ? styles.active : ""
                        }`
                      : ""
                  } 
                ${pathname.includes(item.route) ? styles.active : ""}`}
                onClick={() => {
                  !item.dropdown && handleMenuClick(index, item);
                }}
                onMouseOver={
                  !item.dropdown
                    ? null
                    : (e) => {
                        e.preventDefault();
                        setActiveDropdown(index);
                        setActiveIndex(index);
                      }
                }
                onMouseLeave={
                  !item.dropdown
                    ? null
                    : (e) => {
                        e.preventDefault();
                        setActiveDropdown(null);
                        setActiveIndex(index);
                      }
                }
              >
                <Link
                  to={item.route}
                  onClick={
                    item.dropdown
                      ? (e) => {
                          e.preventDefault();
                          toggleDropdown(index);
                          setActiveIndex(index);
                          navigate(item.route);
                          setRouteChange(item.route);
                        }
                      : null
                  }
                >
                  {item.name}{" "}
                  {item.dropdown ? (
                    activeDropdown === index ? (
                      <UpOutlined />
                    ) : (
                      <DownOutlined />
                    )
                  ) : null}
                </Link>
                {item.dropdown && activeDropdown === index && (
                  <ul
                    className={styles.dropdownMenu}
                    style={{
                      display: activeDropdown === index ? "block" : "none",
                    }}
                  >
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          toggleDropdown(index);
                        }}
                      >
                        <Link to={dropdownItem.link}>{dropdownItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actionItems}>
          <div className={styles.social}>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://facebook.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/facebook.svg" alt="" />
            </div>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://instagram.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/instagram.svg" alt="" />
            </div>
            {/* <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://twitter.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/twitter.svg" alt="" />
            </div> */}
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://linkedin.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/linkedin.svg" alt="" />
            </div>
          </div>
          <div>
            <button
              className={styles.loginButton}
              onClick={(e) => {
                window.open("https://nol.ifreightbox.net/trackbyno", "_blank");
                e.preventDefault();
              }}
            >
              Track Your Order
            </button>
            <button
              className={styles.loginButton}
              onClick={(e) => {
                window.open(accountURL, "_blank");
                e.preventDefault();
              }}
            >
              Login
            </button>
            <button
              className={styles.signupButton}
              onClick={(e) => {
                window.open(accountURL, "_blank");
                e.preventDefault();
              }}
            >
              Sign up for Free
            </button>
          </div>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className={styles.closeButton}>
                &times; {/* Close icon */}
              </div>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CpHeader;
