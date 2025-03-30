"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/app/lib/motion";
import { productInfo } from "@/app/lib/constants";
import { Zap, Brain, Shield, ArrowRight, Clock } from "lucide-react";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("benefits");

    // Helper function to get the appropriate icon
    const getBenefitIcon = (iconName: string) => {
        switch (iconName) {
            case "lightning":
                return <Zap className="w-6 h-6 text-accent" />;
            case "brain":
                return <Brain className="w-6 h-6 text-accent" />;
            case "shield":
                return <Shield className="w-6 h-6 text-accent" />;
            default:
                return <Zap className="w-6 h-6 text-accent" />;
        }
    };

    return (
        <section id="product" className="section-padding">
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-4">Our Product</h2>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                </motion.div>

                {/* Product Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Product Image */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-96 flex justify-center items-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-primary opacity-20"
                            ></motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-10 rounded-full border-2 border-dashed border-accent opacity-20"
                            ></motion.div>

                            <div className="relative w-64 h-64 flex justify-center items-center">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Image
                                        src="/placeholder.webp"
                                        alt={productInfo.name}
                                        width={250}
                                        height={250}
                                        className="object-contain z-10"
                                    />
                                </motion.div>
                            </div>

                            {/* Price tag */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute top-0 right-0 bg-accent text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg"
                            >
                                <span className="text-xs">Just</span>
                                <span className="text-xl font-bold">
                                    ${productInfo.price}
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-md mb-2 text-accent">
                            Pure Himalayan Shilajit
                        </h3>
                        <p className="paragraph mb-6">
                            {productInfo.description}
                        </p>

                        {/* Tabs */}
                        <div className="flex border-b border-primary border-opacity-30 mb-6">
                            <button
                                onClick={() => setActiveTab("benefits")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "benefits"
                                        ? "text-accent border-b-2 border-accent"
                                        : "text-text"
                                }`}
                            >
                                Benefits
                            </button>
                            <button
                                onClick={() => setActiveTab("ingredients")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "ingredients"
                                        ? "text-accent border-b-2 border-accent"
                                        : "text-text"
                                }`}
                            >
                                Ingredients
                            </button>
                            <button
                                onClick={() => setActiveTab("usage")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "usage"
                                        ? "text-accent border-b-2 border-accent"
                                        : "text-text"
                                }`}
                            >
                                How to Use
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[240px]">
                            {/* Benefits Tab */}
                            {activeTab === "benefits" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-4">
                                        {productInfo.benefits.map(
                                            (benefit, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                >
                                                    <div className="mt-1 p-1 bg-primary rounded-full">
                                                        {getBenefitIcon(
                                                            benefit.icon
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-accent">
                                                            {benefit.title}
                                                        </h4>
                                                        <p className="text-sm text-text">
                                                            {
                                                                benefit.description
                                                            }
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Ingredients Tab */}
                            {activeTab === "ingredients" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-4">
                                        {productInfo.ingredients.map(
                                            (ingredient, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start space-x-3"
                                                >
                                                    <div className="mt-1 h-2 w-2 rounded-full bg-accent"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-accent">
                                                            {ingredient.name}
                                                        </h4>
                                                        <p className="text-sm text-text">
                                                            {
                                                                ingredient.description
                                                            }
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Usage Tab */}
                            {activeTab === "usage" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-accent mb-3">
                                            Simple Steps:
                                        </h4>
                                        <ol className="space-y-3">
                                            {productInfo.usage.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-sm font-bold">
                                                            {index + 1}
                                                        </span>
                                                        <div>
                                                            <span className="font-medium text-text">
                                                                {item.step}
                                                            </span>
                                                            <span className="text-sm text-text ml-1 opacity-70">
                                                                {item.detail}
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-accent mb-3">
                                            When to Use:
                                        </h4>
                                        <ul className="space-y-2">
                                            {productInfo.usageTimes.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <Clock className="flex-shrink-0 mt-1 w-4 h-4 text-accent" />
                                                        <div>
                                                            <span className="font-medium text-text">
                                                                {item.time}:
                                                            </span>
                                                            <span className="text-sm text-text ml-1">
                                                                {item.benefit}
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Buy Button */}
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            className="mt-8"
                        >
                            <a
                                href="#"
                                className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
                            >
                                <span>Buy Now - ${productInfo.price}</span>
                                <ArrowRight size={16} />
                            </a>
                            <p className="text-center text-xs text-text mt-2">
                                Free shipping on orders over $50
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Testimonials */}
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-white bg-opacity-70 rounded-xl p-8 shadow-md"
                >
                    <h3 className="heading-md text-center mb-8">
                        What Our Customers Say
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Rahul S.",
                                text: "I've tried many Shilajit brands, but EAZY AYURVEDA stands out for its purity and potency. I feel more energetic after just two weeks of use!",
                                rating: 5,
                            },
                            {
                                name: "Meera P.",
                                text: "The quality is exceptional! It dissolves easily and has a mild, earthy taste. I love that it's sustainably sourced and comes in eco-friendly packaging.",
                                rating: 5,
                            },
                            {
                                name: "Aditya K.",
                                text: "This has become an essential part of my daily routine. My mental clarity has improved, and I feel more balanced overall. Highly recommend!",
                                rating: 4,
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        )
                                    )}
                                </div>
                                <p className="text-text italic mb-3">
                                    "{testimonial.text}"
                                </p>
                                <p className="text-accent font-medium">
                                    {testimonial.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductSection;
