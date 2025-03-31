"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { productInfo } from "@/app/lib/constants";
import { Zap, Brain, Shield, ArrowRight, Clock, Check } from "lucide-react";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("benefits");

    // Function to get the appropriate icon color based on index
    const getBenefitIconClass = (index: number) => {
        switch (index) {
            case 0:
                return "bg-logo-orange-light/70"; // First benefit - orange light color
            case 1:
                return "bg-logo-blue-light/70"; // Second benefit - blue light color
            case 2:
                return "bg-logo-green-light/70"; // Third benefit - green light color
            default:
                return "bg-primary";
        }
    };

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
        <section
            id="product"
            className="section-padding bg-primary bg-opacity-30"
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
                    <h2 className="heading-lg mb-4">Our Product</h2>
                    <p className="paragraph max-w-2xl mx-auto">
                        Premium quality Shilajit sourced from the pristine
                        Himalayan mountain extracts, carefully processed to
                        preserve its natural potency and benefits.
                    </p>
                    <div className="h-1 w-20 bg-sage rounded-full mx-auto mt-4"></div>
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
                        <div className="relative h-196 flex justify-center items-center bg-white bg-opacity-70 rounded-2xl shadow-lg p-6">
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

                            <div className="relative w-256 h-256 flex justify-center rounded-lg items-center">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="drop-shadow-2xl"
                                >
                                    <Image
                                        src="/product.webp"
                                        alt={productInfo.name}
                                        width={500}
                                        height={500}
                                        className="object-contain z-10 rounded-lg"
                                    />
                                </motion.div>
                            </div>

                            {/* Price tag */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute top-4 right-4 bg-accent text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg"
                            >
                                <span className="text-xs">Just</span>
                                <span className="text-xl font-bold">
                                    {productInfo.price} ₹
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
                        className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-md"
                    >
                        <h3 className="heading-md mb-2 text-accent">
                            Ayurshila Pure Shilajit
                        </h3>
                        <p className="paragraph mb-6">
                            {productInfo.description}
                        </p>

                        {/* Tabs */}
                        <div className="flex border-b-2 border-primary border-opacity-30 mb-8">
                            <button
                                onClick={() => setActiveTab("benefits")}
                                className={`py-3 px-5 font-medium transition-colors rounded-t-lg ${
                                    activeTab === "benefits"
                                        ? "text-accent bg-primary bg-opacity-20 border-b-2 border-accent"
                                        : "text-text hover:text-accent hover:bg-primary hover:bg-opacity-10"
                                }`}
                            >
                                Benefits
                            </button>
                            <button
                                onClick={() => setActiveTab("ingredients")}
                                className={`py-3 px-5 font-medium transition-colors rounded-t-lg ${
                                    activeTab === "ingredients"
                                        ? "text-accent bg-primary bg-opacity-20 border-b-2 border-accent"
                                        : "text-text hover:text-accent hover:bg-primary hover:bg-opacity-10"
                                }`}
                            >
                                Ingredients
                            </button>
                            <button
                                onClick={() => setActiveTab("usage")}
                                className={`py-3 px-5 font-medium transition-colors rounded-t-lg ${
                                    activeTab === "usage"
                                        ? "text-accent bg-primary bg-opacity-20 border-b-2 border-accent"
                                        : "text-text hover:text-accent hover:bg-primary hover:bg-opacity-10"
                                }`}
                            >
                                How to Use
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[300px] p-2">
                            {/* Benefits Tab */}
                            {activeTab === "benefits" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {productInfo.benefits.map(
                                        (benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className={`flex items-start space-x-4 p-4 rounded-lg ${getBenefitIconClass(
                                                    index
                                                )}`}
                                            >
                                                <div className="mt-1 p-2 bg-white rounded-full shadow-sm">
                                                    {getBenefitIcon(
                                                        benefit.icon
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-accent text-lg">
                                                        {benefit.title}
                                                    </h4>
                                                    <p className="text-text">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </motion.div>
                            )}

                            {/* Ingredients Tab */}
                            {activeTab === "ingredients" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {productInfo.ingredients.map(
                                        (ingredient, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className="flex items-start space-x-4 p-4 border-b border-primary border-opacity-20"
                                            >
                                                <div className="mt-1 flex-shrink-0">
                                                    <Check className="h-5 w-5 text-accent" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-accent">
                                                        {ingredient.name}
                                                    </h4>
                                                    <p className="text-text">
                                                        {ingredient.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
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
                                    <div className="mb-8 bg-primary bg-opacity-10 p-5 rounded-lg">
                                        <h4 className="font-semibold text-accent mb-4 text-lg">
                                            Simple Steps:
                                        </h4>
                                        <ol className="space-y-4">
                                            {productInfo.usage.map(
                                                (item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        className="flex items-start space-x-4"
                                                    >
                                                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                                                            {index + 1}
                                                        </span>
                                                        <div>
                                                            <span className="font-medium text-accent">
                                                                {item.step}
                                                            </span>
                                                            <span className="text-text ml-2 block">
                                                                {item.detail}
                                                            </span>
                                                        </div>
                                                    </motion.li>
                                                )
                                            )}
                                        </ol>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg shadow-sm">
                                        <h4 className="font-semibold text-accent mb-4 text-lg">
                                            When to Use:
                                        </h4>
                                        <ul className="space-y-3">
                                            {productInfo.usageTimes.map(
                                                (item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                0.3 +
                                                                index * 0.1,
                                                        }}
                                                        className="flex items-start space-x-3 p-2 hover:bg-primary hover:bg-opacity-5 rounded-md transition-colors"
                                                    >
                                                        <Clock className="flex-shrink-0 mt-1 w-5 h-5 text-accent" />
                                                        <div>
                                                            <span className="font-medium text-accent">
                                                                {item.time}:
                                                            </span>
                                                            <span className="text-text ml-1">
                                                                {item.benefit}
                                                            </span>
                                                        </div>
                                                    </motion.li>
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
                                href="https://wa.me/918308563713?text=I%20would%20like%20to%20order%20Pure%20Himalayan%20Shilajit."
                                target="_blank"
                                className="btn-primary flex items-center space-x-2 w-full justify-center"
                            >
                                <span>Buy Now - {productInfo.price} ₹</span>
                                <ArrowRight size={16} />
                            </a>
                            <p className="text-center text-muted mt-3">
                                Free shipping on orders over 999₹ • Secure
                                Checkout
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
                    className="bg-white rounded-2xl p-8 shadow-lg mt-16"
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
                                location: "Mumbai",
                            },
                            {
                                name: "Meera P.",
                                text: "The quality is exceptional! It dissolves easily and has a mild, earthy taste. I love that it's sustainably sourced and comes in eco-friendly packaging.",
                                rating: 5,
                                location: "Delhi",
                            },
                            {
                                name: "Aditya K.",
                                text: "This has become an essential part of my daily routine. My mental clarity has improved, and I feel more balanced overall. Highly recommend!",
                                rating: 4,
                                location: "Bangalore",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                                className="bg-primary bg-opacity-5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${
                                                i < testimonial.rating
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-text italic mb-4 line-clamp-4">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="text-accent font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-muted text-sm">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductSection;
