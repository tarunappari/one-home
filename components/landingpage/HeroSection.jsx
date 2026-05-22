import React from "react";
import styles from "../../styles/landingpage/HeroSection.module.scss";
import heromain from '@/public/assets/hero/heromain.webp'
import herotext1 from '@/public/assets/hero/heroText1.webp'
import herotext2 from '@/public/assets/hero/heroText2.webp'
import decor1 from '@/public/assets/decor/decor3.webp'
import decor2 from '@/public/assets/decor/decor4.webp'
import Image from "next/image";
import AnimatedContent from "../animations/AnimatedContent";
import { TextAnimate } from "../animations/TextAnimation";
import BlurReveal from "../animations/BlurAnimation";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <TextAnimate animation="blurInUp" by="character" className={styles.span} once as="span">
          Imported Luxury Furniture
        </TextAnimate>

        <BlurReveal delay={0.35} rootMargin="-50px">
          <h1 className={styles.heroTitle}>

            Bringing

            <span className={styles.imageWrap}>
              <Image src={herotext1} alt="sofa" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </span>

            World-Class Furniture To <br />



            Modern
            <span className={styles.imageWrap}>
              <Image src={herotext2} alt="sofa" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </span>Spaces.
          </h1>
        </BlurReveal>

        <TextAnimate animation="blurInUp" by="word" className={styles.p} delay={0.75} once as="span">
          13+ years of expertise in sourcing and importing premium furniture.
        </TextAnimate>
        {/* <p>13+ years of expertise in sourcing and importing premium furniture.</p> */}
      </div>
      <div className={styles.heroImageContainer}>
        <h2>ONEHOME</h2>
        <AnimatedContent className={styles.heromainImg} delay={1.1}>
          <Image src={heromain} alt="sofa" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </AnimatedContent>

      </div>
      <AnimatedContent direction="horizontal" distance={100} delay={0.8} className={styles.herodecor1}>
        <Image src={decor1} alt="decor" fill priority sizes="(max-width: 768px) 100vw, 50vw" />
      </AnimatedContent>

      <AnimatedContent direction="horizontal"  distance={100} delay={1} reverse className={styles.herodecor2}>
        <Image src={decor2} alt="decor" fill priority sizes="(max-width: 768px) 100vw, 50vw" />
      </AnimatedContent>

      

    </section>
  );
};

export default HeroSection;
