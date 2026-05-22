
import styles from '@/styles/landingpage/Customize.module.scss'
import RoomModelScene from '../3dmodels/RoomModelScene';
import { Armchair, PencilRuler, Gem, Headset } from 'lucide-react';
import decorlight from '@/public/assets/decor/decor4.webp'
import decorlight2 from '@/public/assets/decor/decor3.webp'
import Image from 'next/image';

const Customize = () => {
    return (
        <div className={styles.container}>
            <div className={styles.decorWrap}>
                <Image src={decorlight} alt="decorlight" className={styles.light1} sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            <div className={styles.decorWrap2}>
                <Image src={decorlight2} alt="decorlight" className={styles.light2} sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            <div className={styles.contentContainer}>
                <span>Customized Interiors</span>
                <h2>
                    Crafted Around Your Space.
                </h2>
                <p>Every space deserves furniture that reflects its personality, comfort, and lifestyle.From concept to completion, we bring your vision to life with precision and care.</p>
                <div className={styles.points}>
                    <div className={styles.point}>
                        <div className={styles.iconWrapper}><Armchair /></div>
                        <h3>Personalized Selection</h3>
                    </div>
                    <div className={styles.point}>
                        <div className={styles.iconWrapper}><PencilRuler /></div>
                        <h3>Tailored To Your Space</h3>
                    </div>
                    <div className={styles.point}>
                        <div className={styles.iconWrapper}><Gem /></div>
                        <h3>Premium Quality</h3>
                    </div>
                    <div className={styles.point}>
                        <div className={styles.iconWrapper}><Headset /></div>
                        <h3>Expert Support</h3>
                    </div>
                </div>
            </div>
            <div className={styles.modelContainer}>
                <RoomModelScene />
            </div>
        </div>
    );
};

export default Customize;