"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { aboutUsContent, brandBenefits } from "@/app/lib/constants";
import { Heart, Leaf, Home } from "lucide-react";

const AboutSection = () => {
    // Helper function to get the appropriate icon
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "heart":
                return <Heart className="w-6 h-6 text-accent" />;
            case "leaf":
                return <Leaf className="w-6 h-6 text-accent" />;
            case "home":
                return <Home className="w-6 h-6 text-accent" />;
            default:
                return <Leaf className="w-6 h-6 text-accent" />;
        }
    };

    return (
        <section id="about" className="section-padding bg-primary bg-opacity-5">
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-4">About Us</h2>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image Side */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.webp"
                                alt="Ayurvedic Ingredients"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-accent bg-opacity-20"></div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-lg shadow-lg max-w-xs">
                            <p className="text-sm text-text italic">
                                "Ayurveda teaches us that true wellness comes
                                from balance - of mind, body, and spirit."
                            </p>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-md mb-6 text-accent">
                            Our Journey
                        </h3>
                        <p className="paragraph mb-6">{aboutUsContent}</p>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-accent"></span>
                                <span className="text-text">
                                    Founded with family recipes in mind
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-accent"></span>
                                <span className="text-text">
                                    Carefully sourced natural ingredients
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-accent"></span>
                                <span className="text-text">
                                    Authentic Ayurvedic formulations
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Brand Benefits */}
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {brandBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3 + index * 0.1)}
                            className="card group hover:bg-accent hover:bg-opacity-5 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    {getIcon(benefit.icon)}
                                </div>
                                <h4 className="text-xl font-semibold text-accent mb-3">
                                    {benefit.title}
                                </h4>
                                <p className="paragraph">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
