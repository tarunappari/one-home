import styles from '@/styles/common/Footer.module.scss';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import decorlight1 from '@/public/assets/decor/decor.webp'
import decorlight2 from '@/public/assets/decor/decorlights.webp'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.decorWrap1}>
                <Image src={decorlight1} alt="decorlight" className={styles.light1} />
            </div>
            <div className={styles.decorWrap2}>
                <Image src={decorlight2} alt="decorlight" className={styles.light1} />
            </div>
            <div className={styles.topSection}>
                <div className={styles.logo}>
                    <h2>
                        ONE<span>HOME</span>
                    </h2>
                    <p>Crafted For Elegant Spaces</p>
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
                    Copyright © 2026 ONEHOME. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
