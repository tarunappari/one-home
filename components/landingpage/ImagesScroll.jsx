"use client";

import IntroAnimation from "../ui/scroll-morph-hero";
import styles from "../../styles/landingpage/ImagesScroll.module.scss";

export default function ImagesScroll() {
    return (
        <div className={`w-full h-[800px] border rounded-lg overflow-hidden relative ${styles.demoContainer || ''}`}>
            <IntroAnimation />
        </div>
    );
}
