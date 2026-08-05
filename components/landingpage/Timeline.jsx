import React from 'react';
import {
    Check, Clock, MessageSquareMore,
    Sofa,
    ShipWheel,
    PackageCheck,
} from 'lucide-react';
import styles from '@/styles/landingpage/Timeline.module.scss'

// Responsive Timeline component (horizontal on desktop, vertical on mobile)
function Timeline({ items, variant = "default", showConnectors = true, showTimestamps = true }) {
    const getStatusIcon = (status) => {
        switch (status) {
            case "completed":
                return <Check className="h-3 w-3" />;
            case "active":
                return <Clock className="h-3 w-3" />;
            case "pending":
                return <Clock className="h-3 w-3" />;
            default:
                return <div className="h-2 w-2 rounded-full bg-current" />;
        }
    };

    const getVariantGap = () => {
        switch (variant) {
            case "compact": return "md:gap-12 gap-4";
            case "spacious": return "md:gap-12 gap-6";
            default: return "md:gap-8 gap-4";
        }
    };

    return (
        <div className={` relative flex flex-col md:flex-row ${getVariantGap()} md:items-start md:justify-between mx-auto w-fit md:w-full`}>
            {items.map((item, index) => (
                <div key={item.id} className="relative flex md:flex-col md:items-center min-w-0 md:flex-1 flex-row gap-3 md:gap-0 pb-2 md:pb-0">
                    {/* Connector Line - Vertical for mobile, Horizontal for desktop */}
                    {showConnectors && index < items.length - 1 && (
                        <>
                            {/* Mobile: Vertical connector */}
                            <div
                                className="absolute left-6 top-3 h-full w-px md:hidden"
                                style={{
                                    backgroundColor:
                                        item.status === "completed"
                                            ? "var(--woodBrown)"
                                            : item.status === "active"
                                                ? "var(--woodBrown)"
                                                : "rgba(103, 132, 108, 0.3)"
                                }}
                            />

                            {/* Desktop: Horizontal connector */}
                            <div
                                className="hidden md:block absolute top-3 h-px"
                                style={{
                                    backgroundColor:
                                        item.status === "completed"
                                            ? "var(--woodBrown)"
                                            : item.status === "active"
                                                ? "var(--woodBrown)"
                                                : "rgba(103, 132, 108, 0.3)",
                                    left: "50%",
                                    right: "-50%",
                                    width: "100%"
                                }}
                            />
                        </>
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex shrink-0 md:mb-3">
                        <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 relative -top-3 text-xs font-medium transition-all ${item.status === "completed"
                                ? "border-[var(--woodBrown)] text-white"
                                : item.status === "active"
                                    ? "border-[var(--woodBrown)] bg-white text-[var(--woodBrown)] shadow-lg"
                                    : "border-gray-300 text-gray-400"
                                }`}
                            style={{
                                backgroundColor:
                                    item.status === "completed"
                                        ? "var(--woodBrown)"
                                        : "white"
                            }}
                        >
                            {item.icon || getStatusIcon(item.status)}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 md:text-center text-left min-w-0 flex-1">

                        {/* Title */}
                        <h3
                            className="font-semibold leading-tight text-base md:text-base text-lg"
                            style={{ color: "#000" }}
                        >
                            {item.title}
                        </h3>

                        {/* Description */}
                        {item.description && (
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "var(--woodBrown)" }}
                            >
                                {item.description}
                            </p>
                        )}

                        {/* Custom Content */}
                        {item.content && <div className="mt-3">{item.content}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
}

// Main Demo Component
export default function RelaxationTimeline() {


    const timelineItems = [
        {
            id: "1",
            title: "Consultation",
            description: "Understanding your space and requirements.",
            status: "completed",
            icon: <MessageSquareMore className="h-6 w-6" />,
        },
        {
            id: "2",
            title: "Furniture Selection",
            description: "Curated premium collections from China.",
            status: "completed",
            icon: <Sofa className="h-6 w-6" />,
        },
        {
            id: "3",
            title: "Logistics & Handling",
            description: "Smooth import and warehouse coordination.",
            status: "active",
            icon: <ShipWheel className="h-6 w-6" />,
        },
        {
            id: "4",
            title: "Delivery & Setup",
            description: "Reliable delivery with setup support.",
            status: "pending",
            icon: <PackageCheck className="h-6 w-6" />,
        },
    ];

    return (
        <div className={`${styles.container} `}>
            <div className={styles.titleContainer}>
                <h4>Importing made easy.</h4>
                <h2>A Seamless Import Experience</h2>
            </div>
            <div className={`${styles.timelineContainer} flex items-start justify-center p-4`}>
                <div className="w-full max-w-7xl">
                    {/* Timeline Card */}
                    <div
                        className={`${styles.timeline} rounded-2xl p-8 shadow-lg`}
                    >
                        <Timeline
                            items={timelineItems}
                            variant="spacious"
                            showConnectors={true}
                            showTimestamps={true}
                        />
                    </div>

                    {/* Footer Note
        <div className="mt-5 pl-2  text-start">
          <p className="text-sm" style={{ color: "#67846c" }}>
            Effects may vary by individual. Enjoy your moment of peace.
          </p>
        </div> */}
                </div>
            </div>
        </div>

    );
}