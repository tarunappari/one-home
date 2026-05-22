"use client";
import { useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import styles from "@/styles/landingpage/Contact.module.scss";
import {
    IconBrandFacebook,
    IconBrandX,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from "@tabler/icons-react";

export function LetsWorkTogether() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [copied, setCopied] = useState(false);
    const EMAIL = "+917095427959";

    const handleCopyMail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email", err);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(true);

        setTimeout(() => {
            setShowSuccess(true);
        }, 500);
    };

    return (
        <section className="flex px-6">
            <div className="relative flex flex-col items-center gap-12">
                {/* Success state */}
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: showSuccess ? 1 : 0,
                        transform: showSuccess
                            ? "translateY(0) scale(1)"
                            : "translateY(20px) scale(0.95)",
                        pointerEvents: showSuccess ? "auto" : "none",
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span
                            className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "100ms",
                            }}
                        >
                            Perfect
                        </span>
                        <h3
                            className={`text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl ${styles.letsTalk}`}
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "200ms",
                                fontFamily: 'greatvibes'
                            }}
                        >
                            Let's talk
                        </h3>
                    </div>

                    {/* Book call button */}
                    <button
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className="group relative flex items-center gap-4 cursor-pointer transition-all duration-500"
                        style={{
                            transform: showSuccess
                                ? isButtonHovered
                                    ? "translateY(0) scale(1.02)"
                                    : "translateY(0) scale(1)"
                                : "translateY(15px) scale(1)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "150ms",
                        }}
                    >
                        <div
                            className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
                            style={{
                                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                                opacity: isButtonHovered ? 0 : 0.5,
                            }}
                        />

                        <div
                            onClick={handleCopyMail}
                            className="relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
                            style={{
                                borderColor: isButtonHovered
                                    ? "var(--foreground)"
                                    : "var(--border)",
                                backgroundColor: isButtonHovered
                                    ? "var(--palegreen)"
                                    : "transparent",
                                boxShadow: isButtonHovered
                                    ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)"
                                    : "none",
                            }}
                        >
                            <Phone
                                className="size-4 transition-all duration-500 sm:size-5"
                                strokeWidth={1.5}
                                style={{
                                    color: isButtonHovered
                                        ? "var(--background)"
                                        : "var(--foreground)",
                                }}
                            />

                            <span
                                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base"
                                style={{
                                    color: isButtonHovered ? "var(--foreground)" : "var(--foreground)",
                                }}
                            >
                                {copied ? "Copied!" : "Copy Our Number"}
                            </span>

                            <ArrowUpRight
                                className="size-4 transition-all duration-500 sm:size-5"
                                strokeWidth={1.5}
                                style={{
                                    color: isButtonHovered
                                        ? "var(--background)"
                                        : "var(--foreground)",
                                    transform: isButtonHovered
                                        ? "translate(3px, -3px) scale(1.1)"
                                        : "translate(0, 0) scale(1)",
                                }}
                            />
                        </div>

                        <div
                            className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
                            style={{
                                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                                opacity: isButtonHovered ? 0 : 0.5,
                            }}
                        />
                    </button>

                    <div className={` ${styles.iconsContainer} flex gap-2 items-center justify-center`}>
                        <a href="#" >
                            <IconBrandWhatsapp stroke={2} />
                        </a>
                        <a href="#">
                            <IconBrandInstagram stroke={2} />
                        </a>
                        <a href="#">
                            <IconBrandX stroke={2} />
                        </a>
                        <a href="#">
                            <IconBrandFacebook stroke={2} />
                        </a>
                    </div>
                </div>

                {/* Main CTA */}
                <div
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick}
                    style={{
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <div className="flex items-center gap-6">
                        <p
                            className="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                opacity: isClicked ? 0 : 1,
                                transform: isClicked
                                    ? "translateY(-40px) scale(0.95)"
                                    : "translateY(0) scale(1)",
                            }}
                        >
                            <span className="block overflow-hidden">
                                <span
                                    className={`block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${styles.letsText} `}
                                    style={{
                                        transform:
                                            isHovered && !isClicked
                                                ? "translateY(-8%)"
                                                : "translateY(0)",
                                    }}
                                >
                                    Let’s Design
                                </span>
                            </span>
                            <span className={`block overflow-hidden ${styles.togetherContainer}`}>
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                    style={{
                                        transform:
                                            isHovered && !isClicked
                                                ? "translateY(-8%)"
                                                : "translateY(0)",
                                    }}
                                >
                                    <span className={styles.togetherText}>Your Space</span>
                                </span>
                            </span>
                        </p>

                        <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                            <div
                                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                                style={{
                                    borderColor: isClicked
                                        ? "var(--woodBrown)"
                                        : isHovered
                                            ? "var(--woodBrown)"
                                            : "var(--woodBrown)",
                                    backgroundColor: isClicked
                                        ? "transparent"
                                        : isHovered
                                            ? "var(--palegreen)"
                                            : "transparent",
                                    transform: isClicked
                                        ? "scale(3)"
                                        : isHovered
                                            ? "scale(1.1)"
                                            : "scale(1)",
                                    opacity: isClicked ? 0 : 1,
                                    transitionDuration: isClicked ? "700ms" : "500ms",
                                }}
                            />
                            <ArrowUpRight
                                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                                style={{
                                    transform: isClicked
                                        ? "translate(100px, -100px) scale(0.5)"
                                        : isHovered
                                            ? "translate(2px, -2px)"
                                            : "translate(0, 0)",
                                    opacity: isClicked ? 0 : 1,
                                    color: isHovered && !isClicked ? "var(--woodBrown)" : "var(--woodBrown)",
                                    transitionDuration: isClicked ? "600ms" : "500ms",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}