'use client'
import React from "react";
import Image from "next/image";
import styles from "../../styles/landingpage/About.module.scss";

// Image imports
import decorlight from '@/public/assets/decor/decorlights.webp'
import chairdecor from '@/public/assets/decor/chairdecor.webp'
import decorlight2 from '@/public/assets/decor/decorlights2.webp'
import decorlight3 from '@/public/assets/decor/decorlights3.webp'
import chairdecor2 from '@/public/assets/decor/chairdecor2.webp'
import img1 from '@/public/assets/images/hori1.webp'
import sofa1 from '@/public/assets/sofa/sofa7.webp'
import sofa2 from '@/public/assets/sofa/sofa2.webp'
import sofa3 from '@/public/assets/sofa/sofa5.webp'
import sofa4 from '@/public/assets/sofa/sofa8.webp'
import sofa5 from '@/public/assets/sofa/sofa6.webp'
import { TextAnimate } from "../animations/TextAnimation";
import BlurReveal from "../animations/BlurAnimation";

const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.aboutHeading}>
                <TextAnimate animation="blurInUp" by="character" className={styles.subtitle} once as="span">
                    Legacy of Quality
                </TextAnimate>
                <BlurReveal delay={0.25}>
                    <h3>
                        <span className={styles.imageWrap}>
                            <Image src={sofa1} alt="sofa" sizes="(max-width: 768px) 50vw, 33vw" />
                        </span>
                        For over 13 years,
                        <span className={styles.imageWrap}>
                            <Image src={sofa2} alt="sofa" sizes="(max-width: 768px) 50vw, 33vw" />
                        </span>
                        we have helped customers source premium-quality furniture
                        <span className={styles.imageWrap}>
                            <Image src={sofa3} alt="sofa" sizes="(max-width: 768px) 50vw, 33vw" />
                        </span>
                        with complete transparency
                        <span className={styles.imageWrap}>
                            <Image src={sofa5} alt="sofa" sizes="(max-width: 768px) 50vw, 33vw" />
                        </span>
                        and trusted logistics support.
                        <span className={styles.imageWrap}>
                            <Image src={sofa4} alt="sofa" sizes="(max-width: 768px) 50vw, 33vw" />
                        </span>
                    </h3>
                </BlurReveal>
            </div>
            <div className={styles.aboutContainer}>
                {/* Left main image card */}
                <div className={styles.mainCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={img1}
                            alt="Gorgeous Modern Minimalist Interior"
                            fill
                            sizes="(max-width: 1024px) 100vw, 65vw"
                            priority
                            className={styles.bgImage}
                        />
                    </div>
                </div>

                {/* Right stacked cards */}
                <div className={styles.sideCardsContainer}>
                    {/* Top card: Aesthetic text card */}
                    <div className={styles.textCard}>
                        <BlurReveal className={styles.decorWrap} direction="top" delay={0.5}>
                            <Image src={decorlight} alt="decorlight" className={styles.light1} sizes="(max-width: 768px) 50vw, 33vw" />
                        </BlurReveal>

                        <h3>
                            Built On Trust,<br />
                            Experience &<br />
                            Global Sourcing.
                        </h3>
                        <div className={styles.chairWrap}>
                            <Image src={chairdecor} alt="chairdecor" sizes="(max-width: 768px) 50vw, 33vw" />
                        </div>
                    </div>

                    {/* Bottom card: Image overlay card with arrow button */}
                    <div className={styles.imageCard}>
                        <BlurReveal className={styles.decorWrap} direction="top" delay={0.5}>
                            <Image src={decorlight2} alt="decorlight" className={styles.light1} sizes="(max-width: 768px) 50vw, 33vw" />
                        </BlurReveal>
                        <BlurReveal className={styles.decorWrap2} direction="top" delay={0.75}>
                            <Image src={decorlight3} alt="decorlight" className={styles.light1} sizes="(max-width: 768px) 50vw, 33vw" />
                        </BlurReveal>
                        
                        <div className={styles.chairWrap}>
                            <Image src={chairdecor2} alt="chairdecor" sizes="(max-width: 768px) 50vw, 33vw" />
                        </div>
                        <h3>
                            Redefining Modern Living &<br />
                            Timeless Design
                        </h3>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
