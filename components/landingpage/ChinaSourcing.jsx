'use client';

import { useRef, useState, useEffect } from 'react';
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
        // Adjust these values below for the Mobile view!
        mobile: {
            width: '30vw',
            height: '18vw',
            start: { x: '5vw', y: '-14vh', scale: 0.95 },
            end: { x: '25vw', y: '-38vh', scale: 1 },
        }
    },
    {
        src: '/assets/china/china2.webp', // white round chair
        width: '20vw',
        height: '18vw',
        start: { x: '-12vw', y: '5vh', scale: 0.9 },
        end: { x: '-33vw', y: '0vh', scale: 0.9 },
        mobile: {
            width: '32vw',
            height: '21vw',
            start: { x: '-8vw', y: '6vh', scale: 0.9 },
            end: { x: '-33vw', y: '-18vh', scale: 0.9 },
        }
    },
    {
        src: '/assets/china/china3.webp', // gallery
        width: '26vw',
        height: '16vw',
        start: { x: '12vw', y: '10vh', scale: 0.8 },
        end: { x: '30vw', y: '30vh', scale: 0.8 },
        mobile: {
            width: '41vw',
            height: '25vw',
            start: { x: '8vw', y: '12vh', scale: 0.8 },
            end: { x: '31vw', y: '36vh', scale: 0.8 },
        }
    },
    {
        src: '/assets/china/china4.webp', // bathroom
        width: '18vw',
        height: '14vw',
        start: { x: '15vw', y: '-2vh', scale: 1 },
        end: { x: '35vw', y: '-3vh', scale: 1 },
        mobile: {
            width: '28vw',
            height: '18vw',
            start: { x: '10vw', y: '-2vh', scale: 1 },
            end: { x: '24vw', y: '-16vh', scale: 1 },
        }
    },
    {
        src: '/assets/china/china5.webp', // stairs
        width: '20vw',
        height: '14vw',
        start: { x: '0vw', y: '12vh', scale: 1 },
        end: { x: '3vw', y: '33vh', scale: 1 },
        mobile: {
            width: '32vw',
            height: '20vw',
            start: { x: '0vw', y: '14vh', scale: 1 },
            end: { x: '2vw', y: '19vh', scale: 1 },
        }
    },
    {
        src: '/assets/china/china6.webp', // stairs with curved wall
        width: '22vw',
        height: '16vw',
        start: { x: '-5vw', y: '15vh', scale: 0.8 },
        end: { x: '-22vw', y: '36vh', scale: 0.8 },
        mobile: {
            width: '35vw',
            height: '23vw',
            start: { x: '-3vw', y: '18vh', scale: 0.8 },
            end: { x: '-30vw', y: '38vh', scale: 0.8 },
        }
    },
    {
        src: '/assets/china/china7.webp', // center image (bed)
        width: '22vw',
        height: '15vw',
        start: { x: '0vw', y: '0vh', scale: 1.1 },
        end: { x: '-9vw', y: '-28vh', scale: 0.8 }, // push to top
        mobile: {
            width: '35vw',
            height: '24vw',
            start: { x: '0vw', y: '0vh', scale: 1.1 },
            end: { x: '-6vw', y: '-33vh', scale: 0.8 },
        }
    }
];

export default function ChinaSourcing() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 650);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

                <div className={styles.imagesContainer} key={isMobile ? 'mobile' : 'desktop'}>
                    {pictures.map((pic, index) => (
                        <AnimatedImage
                            key={index}
                            pic={pic}
                            scrollYProgress={scrollYProgress}
                            index={index}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedImage({ pic, scrollYProgress, index, isMobile }) {
    const currentPic = isMobile && pic.mobile ? pic.mobile : pic;
    
    const x = useTransform(scrollYProgress, [0, 0.6], [currentPic.start.x, currentPic.end.x]);
    const y = useTransform(scrollYProgress, [0, 0.6], [currentPic.start.y, currentPic.end.y]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [currentPic.start.scale, currentPic.end.scale]);

    return (
        <motion.div
            className={styles.imageWrapper}
            style={{
                x,
                y,
                width: currentPic.width,
                height: currentPic.height,
                zIndex: 10 - index
            }}
        >
            <motion.div className={styles.imageInner} style={{ scale }}>
                <Image
                    src={pic.src}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    alt={`Gallery image ${index + 1}`}
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </motion.div>
    );
}
