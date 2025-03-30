"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { productInfo } from "@/app/lib/constants";
import {
    Zap,
    Brain,
    Shield,
    ArrowRight,
    Clock,
    Check,
    Star,
} from "lucide-react";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("benefits");
    const [isHovered, setIsHovered] = useState(false);

    // Helper function to get the appropriate icon
    const getBenefitIcon = (iconName: string) => {
        switch (iconName) {
            case "lightning":
                return <Zap className="w-6 h-6 text-ayurveda-olive" />;
            case "brain":
                return <Brain className="w-6 h-6 text-ayurveda-olive" />;
            case "shield":
                return <Shield className="w-6 h-6 text-ayurveda-olive" />;
            default:
                return <Zap className="w-6 h-6 text-ayurveda-olive" />;
        }
    };

    return (
        <section id="product" className="py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-ayurveda-cream"></div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-ayurveda-mint rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute left-0 bottom-0 w-80 h-80 bg-ayurveda-yellow rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
            </div>

            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 bg-ayurveda-mint text-ayurveda-olive rounded-full text-sm font-medium mb-3">
                        OUR PREMIUM OFFERING
                    </span>
                    <h2 className="heading-lg mb-4">Pure Himalayan Shilajit</h2>
                    <div className="h-1 w-20 bg-ayurveda-olive mx-auto"></div>
                </motion.div>

                {/* Product Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-96 flex justify-center items-center">
                            {/* Circular decorations */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-ayurveda-sage opacity-30"
                            ></motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-10 rounded-full border-2 border-dashed border-ayurveda-olive opacity-20"
                            ></motion.div>

                            {/* Product showcase */}
                            <div
                                className="relative w-72 h-72 flex justify-center items-center"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <motion.div
                                    animate={{
                                        y: isHovered ? 0 : [-15, 0, -15],
                                        rotateZ: isHovered ? [0, -5, 5, 0] : 0,
                                    }}
                                    transition={{
                                        y: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                        rotateZ: {
                                            duration: 1,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    className="relative drop-shadow-2xl"
                                >
                                    <Image
                                        src="/placeholder.webp"
                                        alt={productInfo.name}
                                        width={300}
                                        height={300}
                                        className="object-contain z-10"
                                    />

                                    {/* Glow effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-ayurveda-yellow/20 to-transparent rounded-full blur-lg -z-10"></div>
                                </motion.div>

                                {/* Rays of light animation on hover */}
                                {isHovered && (
                                    <motion.div
                                        className="absolute inset-0 -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-ayurveda-yellow/0 via-ayurveda-yellow/10 to-ayurveda-yellow/0 blur-lg"></div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Price tag */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute bottom-5 right-5 bg-ayurveda-olive text-white rounded-full shadow-lg shadow-ayurveda-olive/30"
                            >
                                <div className="relative w-20 h-20 flex flex-col items-center justify-center">
                                    <span className="text-xs font-light">
                                        Only
                                    </span>
                                    <span className="text-xl font-bold">
                                        ${productInfo.price}
                                    </span>
                                    <div className="absolute inset-0 rounded-full border-2 border-white border-opacity-20 animate-pulse-soft"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-md mb-4 text-ayurveda-olive">
                            Pure Himalayan Shilajit
                        </h3>

                        <div className="flex items-center mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-4 h-4 fill-ayurveda-yellow text-ayurveda-yellow mr-1"
                                />
                            ))}
                            <span className="text-sm text-ayurveda-text ml-2">
                                (125+ Reviews)
                            </span>
                        </div>

                        <p className="paragraph mb-6">
                            {productInfo.description}. Harvested with care from
                            the pristine Himalayan mountains, our Shilajit is
                            rich in fulvic acid and essential minerals to boost
                            your energy and support overall wellness.
                        </p>

                        {/* Product USPs */}
                        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Check className="w-5 h-5 text-ayurveda-olive mr-2 flex-shrink-0" />
                                    <span className="text-ayurveda-text">
                                        100% Pure & Authentic
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="w-5 h-5 text-ayurveda-olive mr-2 flex-shrink-0" />
                                    <span className="text-ayurveda-text">
                                        Lab Tested for Purity
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="w-5 h-5 text-ayurveda-olive mr-2 flex-shrink-0" />
                                    <span className="text-ayurveda-text">
                                        Rich in Fulvic Acid & Minerals
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="w-5 h-5 text-ayurveda-olive mr-2 flex-shrink-0" />
                                    <span className="text-ayurveda-text">
                                        Sustainable Harvesting Methods
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-ayurveda-mint mb-6">
                            <button
                                onClick={() => setActiveTab("benefits")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "benefits"
                                        ? "text-ayurveda-olive border-b-2 border-ayurveda-olive"
                                        : "text-ayurveda-text"
                                }`}
                            >
                                Benefits
                            </button>
                            <button
                                onClick={() => setActiveTab("ingredients")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "ingredients"
                                        ? "text-ayurveda-olive border-b-2 border-ayurveda-olive"
                                        : "text-ayurveda-text"
                                }`}
                            >
                                Ingredients
                            </button>
                            <button
                                onClick={() => setActiveTab("usage")}
                                className={`py-2 px-4 font-medium transition-colors ${
                                    activeTab === "usage"
                                        ? "text-ayurveda-olive border-b-2 border-ayurveda-olive"
                                        : "text-ayurveda-text"
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
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-4">
                                        {productInfo.benefits.map(
                                            (benefit, index) => (
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
                                                    className="flex items-start space-x-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <div className="mt-1 p-2 bg-ayurveda-mint rounded-full">
                                                        {getBenefitIcon(
                                                            benefit.icon
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-ayurveda-olive">
                                                            {benefit.title}
                                                        </h4>
                                                        <p className="text-sm text-ayurveda-text">
                                                            {
                                                                benefit.description
                                                            }
                                                        </p>
                                                    </div>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Ingredients Tab */}
                            {activeTab === "ingredients" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="space-y-3">
                                        {productInfo.ingredients.map(
                                            (ingredient, index) => (
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
                                                    className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm"
                                                >
                                                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-ayurveda-mint flex items-center justify-center">
                                                        <span className="font-semibold text-ayurveda-olive">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-ayurveda-olive">
                                                            {ingredient.name}
                                                        </h4>
                                                        <p className="text-sm text-ayurveda-text">
                                                            {
                                                                ingredient.description
                                                            }
                                                        </p>
                                                    </div>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Usage Tab */}
                            {activeTab === "usage" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-ayurveda-olive mb-3">
                                            Simple Steps:
                                        </h4>
                                        <ol className="space-y-3">
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
                                                        className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm"
                                                    >
                                                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-ayurveda-olive text-white text-sm font-semibold">
                                                            {index + 1}
                                                        </span>
                                                        <div>
                                                            <span className="font-medium text-ayurveda-olive">
                                                                {item.step}
                                                            </span>
                                                            <span className="text-sm text-ayurveda-text ml-1 opacity-90">
                                                                {item.detail}
                                                            </span>
                                                        </div>
                                                    </motion.li>
                                                )
                                            )}
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-ayurveda-olive mb-3">
                                            When to Use:
                                        </h4>
                                        <ul className="space-y-2 bg-white p-4 rounded-lg shadow-sm">
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
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <Clock className="flex-shrink-0 mt-1 w-4 h-4 text-ayurveda-olive" />
                                                        <div>
                                                            <span className="font-medium text-ayurveda-olive">
                                                                {item.time}:
                                                            </span>
                                                            <span className="text-sm text-ayurveda-text ml-1">
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <motion.a
                                href="#"
                                className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Buy Now - ${productInfo.price}</span>
                                <ArrowRight size={16} />
                            </motion.a>
                            <p className="text-center text-sm text-ayurveda-text mt-3">
                                Free shipping on orders over $50 • 30-day
                                money-back guarantee
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="pt-16"
                >
                    <h3 className="heading-md text-center mb-8 text-ayurveda-olive">
                        What Our Customers Say
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Rahul S.",
                                text: "I've tried many Shilajit brands, but EAZY AYURVEDA stands out for its purity and potency. I feel more energetic after just two weeks of use!",
                                rating: 5,
                                image: "/placeholder.webp",
                                verified: true,
                            },
                            {
                                name: "Meera P.",
                                text: "The quality is exceptional! It dissolves easily and has a mild, earthy taste. I love that it's sustainably sourced and comes in eco-friendly packaging.",
                                rating: 5,
                                image: "/placeholder.webp",
                                verified: true,
                            },
                            {
                                name: "Aditya K.",
                                text: "This has become an essential part of my daily routine. My mental clarity has improved, and I feel more balanced overall. Highly recommend!",
                                rating: 4,
                                image: "/placeholder.webp",
                                verified: true,
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="flex mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${
                                                    i < testimonial.rating
                                                        ? "fill-ayurveda-yellow text-ayurveda-yellow"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {testimonial.verified && (
                                        <span className="text-xs bg-ayurveda-mint text-ayurveda-olive px-2 py-0.5 rounded-full">
                                            Verified
                                        </span>
                                    )}
                                </div>

                                <p className="text-ayurveda-text mb-4 italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-ayurveda-mint mr-3 flex-shrink-0">
                                        {testimonial.image && (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <p className="text-ayurveda-olive font-medium">
                                        {testimonial.name}
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
