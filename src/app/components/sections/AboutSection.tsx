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
                return <Heart className="w-7 h-7 text-white" />;
            case "leaf":
                return <Leaf className="w-7 h-7 text-white" />;
            case "home":
                return <Home className="w-7 h-7 text-white" />;
            default:
                return <Leaf className="w-7 h-7 text-white" />;
        }
    };

    return (
        <section
            id="about"
            className="section-padding bg-gradient-to-b from-mint to-sage"
        >
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
                    <p className="paragraph max-w-2xl mx-auto">
                        Discover the story behind our passion for Ayurveda and
                        commitment to authentic wellness solutions.
                    </p>
                    <div className="h-1 w-20 bg-sage mx-auto mt-4"></div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image Side */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-117 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/about.webp"
                                alt="Ayurvedic Ingredients"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent bg-opacity-30 mix-blend-multiply"></div>
                        </div>
                        <motion.div
                            className="absolute -bottom-8 -right-8 p-6 bg-white rounded-lg shadow-xl max-w-xs border-l-4 border-yellow"
                            animate={{
                                rotate: [2, -2, 2],
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <p className="text-text italic leading-relaxed">
                                {`"Ayurveda teaches us that true wellness comes
            from balance - of mind, body, and spirit."`}
                            </p>
                            <div className="mt-2 h-0.5 w-12 bg-sage"></div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-md border border-sage border-opacity-10"
                    >
                        <h3 className="heading-md mb-6 text-darkolive">
                            Our Journey
                        </h3>
                        <p className="paragraph mb-6 text-text">
                            {aboutUsContent}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage flex items-center justify-center mt-0.5">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-text">
                                    Founded with family recipes passed down
                                    through generations
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage flex items-center justify-center mt-0.5">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-text">
                                    Ingredients carefully sourced from
                                    sustainable farms
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage flex items-center justify-center mt-0.5">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-text">
                                    Formulations based on authentic Ayurvedic
                                    principles
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                >
                    {brandBenefits.map((benefit, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                                className={`bg-white p-8 rounded-2xl shadow-md border border-sage border-opacity-10 group hover:bg-mint hover:opacity-10 transition-all duration-500 hover:-translate-y-2`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className={`w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6 shadow-md transform group-hover:bg-darkolive transition-all duration-300`}
                                    >
                                        {getIcon(benefit.icon)}
                                    </div>
                                    <h4
                                        className={`text-xl font-semibold text-sage mb-3`}
                                    >
                                        {benefit.title}
                                    </h4>
                                    <p className="text-text">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Ayurvedic Philosophy */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 p-8 bg-white rounded-2xl text-center border border-sage border-opacity-10 shadow-md"
                >
                    <h3 className="heading-md mb-6 text-darkolive">
                        Our Ayurvedic Philosophy
                    </h3>
                    <p className="paragraph max-w-3xl mx-auto">
                        {`At EAZY AYURVEDA, we believe in the timeless wisdom of
                        Ayurveda - the science of life. Our approach combines
                        traditional knowledge with modern understanding to
                        create products that support your body's natural balance
                        and promote holistic well-being.`}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="#product"
                            className="bg-accent hover:from-yellow hover:to-sage text-white py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            Explore Our Products
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Import the Check icon
import { Check } from "lucide-react";

export default AboutSection;
