
import React from "react";
import Image from "next/image";
import styles from "@/styles/landingpage/ShowCase.module.scss";

// Import showcase images matching square and horizontal aspects
import luxuryLivingImg from "@/public/assets/images/squa2.webp";
import diningImg from "@/public/assets/images/hori2.webp";
import bedroomImg from "@/public/assets/images/hori3.webp";
import commercialImg from "@/public/assets/images/squa3.webp";

const ShowCase = () => {
    const collections = [
        {
            id: "luxury-living",
            title: "Luxury Living",
            description: "Modern sofas crafted for elegant living spaces.",
            image: luxuryLivingImg,
        },
        {
            id: "dining-collections",
            title: "Dining Collections",
            description: "Premium dining experiences designed with sophistication.",
            image: diningImg,
        },
        {
            id: "bedroom-interiors",
            title: "Bedroom Interiors",
            description: "Comfort-driven furniture with timeless aesthetics.",
            image: bedroomImg,
        },
        {
            id: "commercial-spaces",
            title: "Commercial Spaces",
            description: "Furniture solutions for offices, hotels, and businesses.",
            image: commercialImg,
        },
    ];

    return (
        <section className={styles.showcaseSection} id="showcase">
            <div className={styles.showcaseHeader}>
                <span className={styles.subtitle}>Curated Spaces</span>
                <h2 className={styles.title}>Designed for Living</h2>
                <p>Immersive furniture experiences designed for modern luxury living.</p>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.gridContainer}>
                {collections.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`${styles.card} ${styles[`card-${index + 1}`]}`}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                placeholder="blur"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.cardContent}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowCase;