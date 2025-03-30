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
        <section className="section-padding bg-gradient-to-b from-primary from-opacity-10 to-white">
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

                {/* Instagram Grid */}
                <motion.div
                    variants={staggerContainer(0.05, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {instagramPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={fadeIn("up", 0.2 + index * 0.1)}
                            className="relative group overflow-hidden rounded-xl shadow-md img-zoom-container"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={`Instagram post ${post.id}`}
                                    fill
                                    className="object-cover img-zoom"
                                />
                            </div>

                            {/* Overlay with Instagram stats */}
                            <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Instagram className="text-white w-10 h-10 mb-3" />
                                <div className="flex space-x-4 text-white font-medium">
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
                    className="text-center mt-10"
                >
                    <a
                        href="https://instagram.com"
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
