"use client";

import React, { ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        // List the conflicting event handlers
        | "onDrag"
        | "onDragEnd"
        | "onDragStart"
        | "onAnimationStart"
        | "onAnimationEnd"
    > {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    fullWidth?: boolean;
    asLink?: boolean;
    href?: string;
}

const Button = ({
    variant = "primary",
    size = "md",
    children,
    fullWidth = false,
    asLink = false,
    href,
    className,
    ...props
}: ButtonProps) => {
    // Define base styles based on variants and sizes
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none";

    // Variant styles
    const variantStyles = {
        primary:
            "bg-accent text-white hover:bg-opacity-90 active:bg-opacity-100",
        secondary:
            "bg-secondary text-text hover:bg-opacity-90 active:bg-opacity-100",
        outline:
            "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
    };

    // Size styles
    const sizeStyles = {
        sm: "text-sm py-2 px-4",
        md: "text-base py-3 px-6",
        lg: "text-lg py-4 px-8",
    };

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${
        sizeStyles[size]
    } ${widthStyles} ${className || ""}`;

    // Hover animation
    const hoverAnimation = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
    };

    // Render as link or button
    if (asLink && href) {
        return (
            <motion.a
                href={href}
                className={combinedStyles}
                {...hoverAnimation}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
