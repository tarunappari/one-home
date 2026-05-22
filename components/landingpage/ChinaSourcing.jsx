'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/landingpage/ChinaSourcing.module.scss';

const pictures = [
    {
        src: '/assets/china/china1.webp', // yellow room
        width: '24vw',
        height: '14vw',
        start: { x: '8vw', y: '-12vh', scale: 0.95 },
        end: { x: '15vw', y: '-35vh', scale: 1 },
    },
    {
        src: '/assets/china/china2.webp', // white round chair
        width: '20vw',
        height: '18vw',
        start: { x: '-12vw', y: '5vh', scale: 0.9 },
        end: { x: '-33vw', y: '0vh', scale: 0.9 },
    },
    {
        src: '/assets/china/china3.webp', // gallery
        width: '26vw',
        height: '16vw',
        start: { x: '12vw', y: '10vh', scale: 0.8 },
        end: { x: '30vw', y: '30vh', scale: 0.8 },
    },
    {
        src: '/assets/china/china4.webp', // bathroom
        width: '18vw',
        height: '14vw',
        start: { x: '15vw', y: '-2vh', scale: 1 },
        end: { x: '35vw', y: '-3vh', scale: 1 },
    },
    {
        src: '/assets/china/china5.webp', // stairs
        width: '20vw',
        height: '14vw',
        start: { x: '0vw', y: '12vh', scale: 1 },
        end: { x: '3vw', y: '33vh', scale: 1 },
    },
    {
        src: '/assets/china/china6.webp', // stairs with curved wall
        width: '22vw',
        height: '16vw',
        start: { x: '-5vw', y: '15vh', scale: 0.8 },
        end: { x: '-22vw', y: '36vh', scale: 0.8 },
    },
    {
        src: '/assets/china/china7.webp', // center image (bed)
        width: '22vw',
        height: '15vw',
        start: { x: '0vw', y: '0vh', scale: 1.1 },
        end: { x: '-9vw', y: '-28vh', scale: 0.8 }, // push to top
    }
];

export default function ChinaSourcing() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.textContainer}>
                    <h2 className={styles.titleLeft}>
                        Direct Furniture Sourcing<br />
                        <span>From China</span>
                    </h2>
                </div>

                <div className={styles.imagesContainer}>
                    {pictures.map((pic, index) => (
                        <AnimatedImage
                            key={index}
                            pic={pic}
                            scrollYProgress={scrollYProgress}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedImage({ pic, scrollYProgress, index }) {
    const x = useTransform(scrollYProgress, [0, 0.6], [pic.start.x, pic.end.x]);
    const y = useTransform(scrollYProgress, [0, 0.6], [pic.start.y, pic.end.y]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [pic.start.scale, pic.end.scale]);

    return (
        <motion.div
            className={styles.imageWrapper}
            style={{
                x,
                y,
                width: pic.width,
                height: pic.height,
                zIndex: 10 - index
            }}
        >
            <motion.div className={styles.imageInner} style={{ scale }}>
                <Image
                    src={pic.src}
                    fill
                    alt={`Gallery image ${index + 1}`}
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </motion.div>
    );
}
