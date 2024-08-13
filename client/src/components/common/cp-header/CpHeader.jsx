// src/Header.js

import { useState } from 'react';
import styles from './cpHeader.module.scss'; // Import CSS Module
import mockMenuData from './CpHeader_data'; // Import the mock data



const CpHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          {mockMenuData.map((item, index) => (
            <li
              key={index}
              className={item.dropdown ? `${styles.dropdown} ${activeDropdown === index ? styles.active : ''}` : ''}
            >
              <a href={item.link} onClick={item.dropdown ? (e) => { e.preventDefault(); toggleDropdown(index); } : null}>
                {item.name}
              </a>
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
      <div className={styles.search}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <button className={styles.actionButton}>Get Started</button>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};




export default CpHeader;

