import React from 'react';
import styles from './cpFooter.module.scss';
import { socialLinks, linksColumn2, linksColumn3, contactInfo } from './CpFooter_data';


const CpFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.column} ${styles.socialColumn}`}>
                    <img src="logo.png" alt="Logo" className={styles.logo} />
                    <h4>Follow Us</h4>
                    <div className={styles.socialIcons}>
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.src} alt={link.alt} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.column}>
                    <h4>Column 2</h4>
                    <ul>
                        {linksColumn2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Column 3</h4>
                    <ul>
                        {linksColumn3.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <img src={contactInfo.address.icon} alt="Location" />
                            <span>{contactInfo.address.text}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <img src={contactInfo.email.icon} alt="Email" />
                            <span>{contactInfo.email.text}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <img src={contactInfo.phone.icon} alt="Phone" />
                            <span>{contactInfo.phone.text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};




export default CpFooter;