// Animation variants for Framer Motion
export const fadeIn = (
    direction: "up" | "down" | "left" | "right",
    delay: number = 0
) => {
    return {
        hidden: {
            y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };
};

export const staggerContainer = (
    staggerChildren: number = 0.1,
    delayChildren: number = 0
) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    };
};

export const textVariant = (delay: number = 0) => {
    return {
        hidden: {
            y: 20,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                delay,
            },
        },
    };
};

export const slideIn = (
    direction: "up" | "down" | "left" | "right",
    type: string = "spring",
    delay: number = 0,
    duration: number = 0.8
) => {
    return {
        hidden: {
            x:
                direction === "left"
                    ? "-100%"
                    : direction === "right"
                    ? "100%"
                    : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay: number = 0, duration: number = 0.8) => {
    return {
        hidden: {
            scale: 0.9,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
};

export const floatAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
    },
};

export const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
    },
};

export const rotateAnimation = {
    rotate: [0, 360],
    transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
    },
};

export const backgroundShift = {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
    },
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: {
        type: "spring",
        stiffness: 300,
    },
};

export const hoverLift = {
    y: -5,
    transition: {
        type: "spring",
        stiffness: 300,
    },
};

// Page transitions
export const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

// Scroll-triggered animations
export const scrollReveal = {
    hidden: {
        opacity: 0,
        y: 30,
        transition: {
            duration: 1,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
