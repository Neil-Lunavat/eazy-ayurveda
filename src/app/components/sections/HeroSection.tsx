"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo } from "@/app/lib/constants";
import { fadeIn } from "@/app/lib/motion";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/herb-background.png"
                    alt="Herbal Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <div className="container mx-auto flex items-center justify-center">
                {/* Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center w-full max-w-7xl min-h-[72vh] mx-auto overlay-text px-8 md:px-16 py-12 flex flex-col justify-center items-center"
                >
                    <motion.h1
                        variants={fadeIn("up", 0.3)}
                        className="heading-xl"
                    >
                        {companyInfo.tagline}
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        className="paragraph text-lg mb-8 max-w-3xl mx-auto"
                    >
                        Experience the age-old wisdom of Ayurveda with our
                        premium quality Shilajit. Natural strength and vitality,
                        just as nature intended.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="#product" className="btn-primary">
                            Explore Our Products
                        </Link>
                        <Link href="#about" className="btn-secondary">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
