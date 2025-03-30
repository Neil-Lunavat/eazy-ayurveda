"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/motion";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bgColor?: string;
    noPadding?: boolean;
    fullHeight?: boolean;
}

const Section = ({
    id,
    className = "",
    children,
    bgColor = "bg-background",
    noPadding = false,
    fullHeight = false,
}: SectionProps) => {
    // Default padding
    const paddingClasses = noPadding ? "" : "py-20 px-4 md:px-8 lg:px-16";

    // Height classes
    const heightClasses = fullHeight ? "min-h-screen" : "";

    return (
        <section
            id={id}
            className={`${bgColor} ${paddingClasses} ${heightClasses} ${className}`}
        >
            <div className="container mx-auto">{children}</div>
        </section>
    );
};

export interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    delay?: number;
}

export const SectionTitle = ({
    title,
    subtitle,
    center = true,
    delay = 0.2,
}: SectionTitleProps) => {
    return (
        <motion.div
            variants={fadeIn("up", delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mb-12 ${center ? "text-center" : "text-left"}`}
        >
            <h2 className="heading-lg mb-4">{title}</h2>
            {subtitle && (
                <p className="paragraph max-w-xl mx-auto">{subtitle}</p>
            )}
            <div
                className={`h-1 w-20 bg-accent mt-4 ${center ? "mx-auto" : ""}`}
            ></div>
        </motion.div>
    );
};

export default Section;
