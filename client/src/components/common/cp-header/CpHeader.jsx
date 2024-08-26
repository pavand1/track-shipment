import { useState } from 'react';
import styles from './cpHeader.module.scss'; // Import CSS Module
import mockMenuData from './CpHeader_data'; // Import the mock data
import { Link, useNavigate } from 'react-router-dom';

const CpHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const naviagate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index);
};

  return (
    <> 
    <div className={styles.topHeader}>
        <div className={styles.top}></div>
        <div className={styles.topHeaderInfo}>
          <div className={styles.contactItem}>
            <span className={styles.icon}><img src="../../images/header/phone.png" alt="phone"/></span>91-022-2821-3835
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}><img src="../../images/header/email.png" alt="email"/></span>enquiry@buckletrack.in
          </div>
        </div>
    </div>
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => naviagate("/")}>
        <img src="../../images/header/logo.png" alt="logo"/>
      </div>
      <div className={styles.menuList}>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            {mockMenuData.map((item, index) => (
              <li
                key={index}
                //className={item.dropdown ? `${styles.dropdown} ${activeDropdown === index ? styles.active : ''}` : ''}
                className={`${item.dropdown ? `${styles.dropdown} ${activeDropdown === index ? styles.active : ''}` : ''} ${index === activeIndex ? styles.active : ''}`}

                onClick={() => handleMenuClick(index)}
              >
                {/* <a href={item.link} onClick={item.dropdown ? (e) => { e.preventDefault(); toggleDropdown(index); } : null}>
                  {item.name}
                </a> */}
                <Link to={item.route} onClick={item.dropdown ? (e) => { e.preventDefault(); toggleDropdown(index); } : null}>{item.name}</Link>
                {item.dropdown && (
                  <ul className={styles.dropdownMenu}>
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <a href={dropdownItem.link}>{dropdownItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className={styles.actionButton}>Get Quote</button>
        <div className={styles.search}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    </>
  );
};




export default CpHeader;

