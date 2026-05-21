
"use client"; import React from "react";
import styles from "@/styles/landingpage/Crafting.module.scss";
import { motion } from "framer-motion";
import sofa1 from '@/public/assets/sofa/sofa1.webp'
import sofa2 from '@/public/assets/sofa/sofa3.webp'
import Image from "next/image";

const Crafting = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            // transition: {
            //   staggerChildren: 0.3,
            //   delayChildren: 0.2,
            // },
        },
    };

    const leftVariants = {
        hidden: { x: -80, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
            },
        },
    };

    const rightVariants = {
        hidden: { x: 80, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
            },
        },
    };
    return (
        <section className={styles.craftingSection}>
            <div
               
                className={styles.container}
            >
                <div className={styles.titleContainer}>
                    <div className={styles.titleContent}>
                        <Image src={sofa1} alt="sofa" />
                        <h1
                            style={{ marginBottom: "-1rem" }}
                        >
                            Crafted Experiences, <br />
                            Designing Timeless Comfort
                        </h1>
                    </div>
                    <div className={styles.xText}>
                        <h2> Modern</h2>
                    </div>
                </div>
                <div className={styles.descContainer}>
                    <div className={styles.xText2}>
                        <h2> Luxury</h2>
                    </div>
                    <div className={styles.content}>
                        <p>
                            From tailored interior concepts to refined furniture collections, we create immersive living experiences that blend modern elegance with timeless comfort. Every detail is designed to elevate spaces with sophistication and purpose.
                        </p>
                        <Image src={sofa2} alt="sofa" />
                    </div>
                </div>

                <div className={styles.divider}></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                className={styles.container2}
            >
                <div className={styles.titleContainer}>
                    <div className={styles.titleContent}>
                        <Image src={sofa1} alt="sofa" />
                        <motion.h1 variants={leftVariants}>
                            Crafted Experiences, <br />
                            Designing Timeless Comfort
                        </motion.h1>
                    </div>
                </div>
                <div className={styles.strokeText}>
                    <h2 className={styles.xText}> MODERN</h2>
                    <h2
                        className={styles.xText2}
                        style={{ alignSelf: "flex-end", marginTop: "-4rem" }}
                    >
                        {" "}
                        LUXURY
                    </h2>
                </div>
                <div className={styles.descContainer}>
                    <div className={styles.content}>
                        <motion.p variants={rightVariants}>
                            From tailored interior concepts to refined furniture collections, we create immersive living experiences that blend modern elegance with timeless comfort. Every detail is designed to elevate spaces with sophistication and purpose.
                        </motion.p>
                        <Image src={sofa2} alt="sofa" />
                    </div>
                </div>
                <div className={styles.divider}></div>
            </motion.div>
        </section>
    );
};

export default Crafting;

