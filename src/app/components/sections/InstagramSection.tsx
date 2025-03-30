"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { Instagram } from "lucide-react";
import InstagramEmbed from "../shared/InstagramEmbed";

const InstagramSection = () => {
    // Instagram post URLs
    const instagramPosts = [
        "https://www.instagram.com/reel/DHv1j42tHpA",
        "https://www.instagram.com/reel/C7oVUqCo23O",
        "https://www.instagram.com/reel/C8Mkr-Vo94i",
        "https://www.instagram.com/reel/DExEdn7JTzg",
    ];

    return (
        <section
            id="instagram"
            className="section-padding bg-gradient-to-b from-primary from-opacity-10 to-white"
        >
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg mb-4">Join Our Community</h2>
                    <p className="paragraph max-w-2xl mx-auto">
                        Follow us on Instagram for wellness tips, product
                        updates, and to become part of our growing Ayurvedic
                        community.
                    </p>
                    <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
                </motion.div>

                {/* Instagram Posts */}
                <motion.div
                    variants={staggerContainer(0.05, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto"
                >
                    {instagramPosts.map((postUrl, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.2 + index * 0.1)}
                            className="flex justify-center"
                        >
                            <InstagramEmbed
                                postUrl={postUrl}
                                className="w-full shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Instagram Handle */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <a
                        href="https://instagram.com/eazyayurveda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors bg-white py-3 px-6 rounded-full shadow-md hover:shadow-lg"
                    >
                        <Instagram size={24} />
                        <span className="font-medium text-lg">
                            @eazyayurveda
                        </span>
                    </a>

                    <div className="mt-6 p-4 max-w-md mx-auto bg-primary bg-opacity-10 rounded-lg">
                        <p className="text-text text-sm">
                            Share your experience with our products using the
                            hashtag
                            <span className="font-semibold mx-1">
                                #EazyAyurveda
                            </span>
                            for a chance to be featured.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramSection;
