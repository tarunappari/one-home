import styles from '@/styles/common/Footer.module.scss';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.logo}>
                    Furn<span>ia</span>
                </div>
                <div className={styles.socialIcons}>
                    <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="#" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                </div>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.bottomSection}>
                <div className={styles.links}>
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy Environmental Policy</a>
                </div>
                <div className={styles.copyright}>
                    Copyright © 2021 FILON By LUPINUS. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
