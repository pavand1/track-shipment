import styles from './cpFooter.module.scss';
import { socialLinks, linksColumn2, linksColumn3, contactInfo } from './CpFooter_data';
import { Link } from 'react-router-dom';

const CpFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.column} ${styles.socialColumn}`}>
                    <img src="../../images/footer/logo.png" alt="Logo" className={styles.logo} />
                    <h4 className={styles.socialHeading}>Follow Us On</h4>
                    <div className={styles.socialIcons}>
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.src} alt={link.alt} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.footerHeading}>Categories</h4>
                    <ul>
                        {linksColumn2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.footerHeading}>Other Links</h4>
                    <ul>
                        {linksColumn3.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.footerHeading}>Get In Touch with US</h4>
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