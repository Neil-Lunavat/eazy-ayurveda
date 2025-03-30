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
                return <Heart className="w-6 h-6 text-ayurveda-olive" />;
            case "leaf":
                return <Leaf className="w-6 h-6 text-ayurveda-olive" />;
            case "home":
                return <Home className="w-6 h-6 text-ayurveda-olive" />;
            default:
                return <Leaf className="w-6 h-6 text-ayurveda-olive" />;
        }
    };

    return (
        <section id="about" className="py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-ayurveda-cream to-white"></div>
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
            </div>

            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 bg-ayurveda-mint text-ayurveda-olive rounded-full text-sm font-medium mb-3">
                        OUR STORY
                    </span>
                    <h2 className="heading-lg mb-4">About Eazy Ayurveda</h2>
                    <div className="h-1 w-20 bg-ayurveda-olive mx-auto"></div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image Side - Parallax effect */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                            {/* Main image */}
                            <Image
                                src="/placeholder.webp"
                                alt="Ayurvedic Ingredients"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ayurveda-olive/30"></div>

                            {/* Decorative elements */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-10 left-10 w-20 h-20 bg-ayurveda-yellow opacity-70 rounded-full blur-xl"
                            />

                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute bottom-10 right-10 w-16 h-16 bg-ayurveda-sage opacity-60 rounded-full blur-xl"
                            />
                        </div>

                        {/* Floating quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-8 -left-8 p-6 bg-white rounded-lg shadow-lg max-w-xs"
                        >
                            <p className="text-ayurveda-text italic font-medium">
                                "Ayurveda teaches us that true wellness comes
                                from balance - of mind, body, and spirit."
                            </p>

                            {/* Decorative quotation mark */}
                            <div className="absolute top-2 left-2 text-4xl text-ayurveda-yellow opacity-30 font-serif">
                                "
                            </div>
                        </motion.div>

                        {/* Floating herb icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.5,
                                type: "spring",
                            }}
                            viewport={{ once: true }}
                            className="absolute -top-5 -right-5 bg-ayurveda-mint p-3 rounded-full shadow-lg z-10"
                        >
                            <Leaf className="w-6 h-6 text-ayurveda-olive" />
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-md mb-6 text-ayurveda-olive">
                            Our Journey
                        </h3>

                        <div className="space-y-4">
                            <p className="paragraph">
                                At Eazy Ayur-Veda, our journey began with a
                                simple belief:
                                <span className="relative">
                                    <span className="relative z-10">
                                        {" "}
                                        if it's good enough for our family, it's
                                        good enough for yours.{" "}
                                    </span>
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-ayurveda-yellow opacity-30 -z-0"></span>
                                </span>
                            </p>

                            <p className="paragraph">
                                From carefully crafting home remedies in our
                                kitchens to bringing nature's purest solutions
                                to you, we are committed to blending tradition
                                with trust.
                            </p>

                            <p className="paragraph">
                                Our products are rooted in the wisdom of
                                Ayurveda, ensuring that every ingredient serves
                                a purpose - nourishing, strengthening, and
                                healing naturally.
                            </p>
                        </div>

                        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-ayurveda-mint border-opacity-30">
                            <h4 className="font-semibold text-ayurveda-olive mb-4 text-lg">
                                Our Promise
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-ayurveda-mint flex items-center justify-center flex-shrink-0">
                                        <span className="text-ayurveda-olive font-bold">
                                            1
                                        </span>
                                    </div>
                                    <span className="text-ayurveda-text">
                                        Founded with family recipes in mind
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-ayurveda-mint flex items-center justify-center flex-shrink-0">
                                        <span className="text-ayurveda-olive font-bold">
                                            2
                                        </span>
                                    </div>
                                    <span className="text-ayurveda-text">
                                        Carefully sourced natural ingredients
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-ayurveda-mint flex items-center justify-center flex-shrink-0">
                                        <span className="text-ayurveda-olive font-bold">
                                            3
                                        </span>
                                    </div>
                                    <span className="text-ayurveda-text">
                                        Authentic Ayurvedic formulations
                                    </span>
                                </li>
                            </ul>
                        </div>
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
                            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-ayurveda-mint border-opacity-30"
                            whileHover={{
                                y: -5,
                                backgroundColor: "rgba(214, 224, 190, 0.2)",
                            }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-ayurveda-mint flex items-center justify-center mb-6 group-hover:bg-ayurveda-olive group-hover:text-white transition-all duration-300">
                                    {getIcon(benefit.icon)}
                                </div>
                                <h4 className="text-xl font-semibold text-ayurveda-olive mb-4">
                                    {benefit.title}
                                </h4>
                                <p className="text-ayurveda-text">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#product"
                        className="btn-secondary inline-flex items-center"
                    >
                        <span>Discover Our Products</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
