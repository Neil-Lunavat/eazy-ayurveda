"use client";

import React, { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    variant?: "primary" | "secondary" | "outline" | "text";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    fullWidth?: boolean;
    asLink?: boolean;
    href?: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    className?: string;
}

const Button = ({
    variant = "primary",
    size = "md",
    children,
    fullWidth = false,
    asLink = false,
    href,
    icon,
    iconPosition = "right",
    className = "",
    ...props
}: ButtonProps) => {
    // Define base styles based on variants and sizes
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50";

    // Variant styles
    const variantStyles = {
        primary:
            "bg-accent text-on-accent hover:bg-darkolive shadow-md hover:shadow-lg",
        secondary:
            "bg-secondary text-accent hover:bg-opacity-90 active:bg-opacity-100 shadow-md hover:shadow-lg",
        outline:
            "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-on-accent",
        text: "bg-transparent text-accent hover:bg-accent hover:bg-opacity-10 hover:text-on-accent",
    };

    // Size styles
    const sizeStyles = {
        sm: "text-sm py-2 px-4",
        md: "text-base py-3 px-6",
        lg: "text-lg py-4 px-8",
    };

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    // Icon styles
    const leftIconStyles = icon && iconPosition === "left" ? "flex-row" : "";
    const rightIconStyles =
        icon && iconPosition === "right" ? "flex-row-reverse" : "";

    // Icon spacing
    const iconSpacing = icon
        ? iconPosition === "left"
            ? "space-x-2"
            : "space-x-reverse space-x-2"
        : "";

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${leftIconStyles} ${rightIconStyles} ${iconSpacing} ${className}`;

    // Animation variants
    const buttonAnimation = {
        rest: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
    };

    // Render as link or button
    if (asLink && href) {
        return (
            <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonAnimation}
            >
                <Link href={href} className={combinedStyles}>
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    <span>{children}</span>
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            className={combinedStyles}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={buttonAnimation}
            type={props.type || "button"}
            {...props}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
};

export default Button;
