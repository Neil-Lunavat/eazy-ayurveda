"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
                <Image
                    src="/herb-background.png"
                    alt="Herbal Background"
                    fill
                    className="object-cover opacity-75"
                    priority
                />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center lg:text-left overlay-text px-5 py-5"
                >
                    <motion.span
                        variants={fadeIn("up", 0.2)}
                        className="inline-block px-4 py-1.5 bg-secondary text-accent rounded-full text-sm font-semibold mb-6"
                    >
                        AYURVEDIC WELLNESS
                    </motion.span>

                    <motion.h1
                        variants={fadeIn("up", 0.3)}
                        className="heading-xl"
                    >
                        {companyInfo.tagline}
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        className="paragraph text-lg mb-8 max-w-lg mx-auto lg:mx-0"
                    >
                        Experience the age-old wisdom of Ayurveda with our
                        premium quality Shilajit. Natural strength and vitality,
                        just as nature intended.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Link href="#product" className="btn-primary">
                            Explore Our Products
                        </Link>
                        <Link href="#about" className="btn-secondary">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Product Image */}
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative flex justify-center rounded-l"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl">
                        {/* Product Image */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                boxShadow: [
                                    "0 10px 25px rgba(77, 94, 37, 0.1)",
                                    "0 20px 35px rgba(77, 94, 37, 0.2)",
                                    "0 10px 25px rgba(77, 94, 37, 0.1)",
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 flex items-center justify-center rounded-xl"
                        >
                            <Image
                                src="/shilajit-product.png"
                                alt="Shilajit Product"
                                width={280}
                                height={280}
                                className="object-contain z-10 rounded-xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center bg-white/80 bg-opacity-30 px-4 py-3 rounded-lg shadow-md"
                >
                    <span className="text-accent font-medium text-sm mb-2">
                        Scroll Down
                    </span>
                    <ArrowDown className="text-accent w-5 h-5" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
