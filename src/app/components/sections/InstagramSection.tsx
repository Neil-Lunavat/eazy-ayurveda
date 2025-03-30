"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
    // Mock Instagram posts
    const instagramPosts = [
        { id: 1, image: "/placeholder.webp", likes: 234, comments: 18 },
        { id: 2, image: "/placeholder.webp", likes: 187, comments: 24 },
        { id: 3, image: "/placeholder.webp", likes: 320, comments: 42 },
        { id: 4, image: "/placeholder.webp", likes: 156, comments: 16 },
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-primary from-opacity-5 to-white">
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg mb-4">Follow Us on Instagram</h2>
                    <p className="paragraph max-w-xl mx-auto">
                        Join our community and stay updated with the latest
                        products, wellness tips, and exclusive offers.
                    </p>
                </motion.div>

                {/* Instagram Grid */}
                <motion.div
                    variants={staggerContainer(0.05, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {instagramPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={fadeIn("up", 0.2 + index * 0.1)}
                            className="relative group overflow-hidden rounded-lg"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={`Instagram post ${post.id}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay with Instagram stats */}
                            <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Instagram className="text-white w-8 h-8 mb-2" />
                                <div className="flex space-x-4 text-white text-sm">
                                    <span>{post.likes} likes</span>
                                    <span>{post.comments} comments</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Instagram Handle */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent hover:text-opacity-80 transition-colors"
                    >
                        <Instagram size={20} />
                        <span className="font-medium">@eazyayurveda</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default InstagramSection;
