"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { companyInfo } from "@/app/lib/constants";
import { fadeIn, slideIn } from "@/app/lib/motion";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
                <Image
                    src="/herb-background.png"
                    alt="Herbal Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                >
                    <motion.span
                        variants={fadeIn("up", 0.2)}
                        className="inline-block px-3 py-1 bg-secondary bg-opacity-20 text-accent rounded-full text-sm font-medium mb-4"
                    >
                        AYURVEDIC WELLNESS
                    </motion.span>

                    <motion.h1
                        variants={fadeIn("up", 0.3)}
                        className="heading-xl mb-6"
                    >
                        {companyInfo.tagline}
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        className="paragraph mb-8 max-w-lg mx-auto lg:mx-0"
                    >
                        Experience the age-old wisdom of Ayurveda with our
                        premium quality Shilajit. Natural strength and vitality,
                        just as nature intended.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a href="#product" className="btn-primary">
                            Explore Our Products
                        </a>
                        <a href="#about" className="btn-secondary">
                            Learn More
                        </a>
                    </motion.div>
                </motion.div>

                {/* Product Image */}
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-accent rounded-full opacity-10 transform -translate-x-4 translate-y-4"></div>
                        <Image
                            src="/shilajit-product.png"
                            alt="Shilajit Product"
                            fill
                            className="object-contain z-10"
                        />
                    </div>

                    {/* Floating badges */}
                    <motion.div
                        className="absolute -top-5 -right-5 bg-white rounded-full shadow-lg p-3 z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <div className="bg-secondary bg-opacity-20 text-accent rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            100% Pure
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-0 -left-5 bg-white rounded-full shadow-lg p-3 z-20"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    >
                        <div className="bg-accent bg-opacity-20 text-accent rounded-full w-16 h-16 flex items-center justify-center font-bold">
                            Natural
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-text text-sm mb-2">Scroll Down</span>
                    <ArrowDown className="text-accent w-5 h-5" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
