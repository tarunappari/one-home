import styles from '@/styles/landingpage/CTASection.module.scss';
import ChairModelScene from '../3dmodels/ChairModelScene';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import decorlight from '@/public/assets/decor/decorlights3.webp'
import Image from 'next/image';

const CTASection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.decorWrap}>
                <Image src={decorlight} alt="decorlight" className={styles.light1} />
            </div>
            <div className={styles.contentContainer}>
                <span>Premium Furniture Sourcing</span>
                <h2>Transform Your Space With Global Furniture Collections.</h2>
                <p>Connect with us to explore premium furniture sourcing and showroom collections.</p>
                <div className={styles.buttons}>
                    <button className={styles.primary}>
                        <Mail size={20} />
                        Contact Us
                    </button>
                    <button className={styles.secondary}>
                        <FaWhatsapp size={20} />
                        WhatsApp Inquiry
                    </button>
                </div>
            </div>
            <div className={styles.modelContainer}>
                <ChairModelScene />
            </div>
        </div>
    );
};

export default CTASection;
