import React from "react";
import styles from "../../styles/landingpage/HeroSection.module.scss";
import heromain from '@/public/assets/hero/heromain.png'
import herotext1 from '@/public/assets/hero/heroText1.webp'
import herotext2 from '@/public/assets/hero/heroText2.webp'
import decor1 from '@/public/assets/decor/decor3.webp'
import decor2 from '@/public/assets/decor/decor4.webp'
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <span>Imported Luxury Furniture</span>
        <h1 className={styles.heroTitle}>
          Bringing

          <span className={styles.imageWrap}>
            <Image src={herotext1} alt="sofa" priority />
          </span>

          World-Class Furniture To



          Modern
          <span className={styles.imageWrap}>
            <Image src={herotext2} alt="sofa" priority />
          </span>Spaces.
        </h1>
        <p>13+ years of expertise in sourcing and importing premium furniture.</p>
      </div>
      <div className={styles.heroImageContainer}>
        <h2>ONEHOME</h2>
        <div className={styles.heromainImg}>
          <Image src={heromain} alt="sofa" priority />
        </div>

      </div>
      <div className={styles.herodecor1}>
        <Image src={decor1} alt="decor" fill priority />
      </div>
      <div className={styles.herodecor2}>
        <Image src={decor2} alt="decor" fill priority />
      </div>

    </section>
  );
};

export default HeroSection;
