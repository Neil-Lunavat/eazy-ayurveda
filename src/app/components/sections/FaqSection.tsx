"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { faqItems } from "@/app/lib/constants";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-primary bg-opacity-10">
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="paragraph max-w-2xl mx-auto">
                        Find answers to common questions about our Shilajit
                        product, its benefits, and usage recommendations.
                    </p>
                    <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    {faqItems.map((faq, index) => (
                        <motion.div
                            variants={fadeIn("up", 0.3 + index * 0.1)}
                            key={index}
                            className="mb-5"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex justify-between items-center p-5 text-left rounded-xl focus:outline-none transition-all duration-300 ${
                                    activeIndex === index
                                        ? "bg-accent text-on-accent shadow-md"
                                        : "bg-white hover:bg-mint hover:bg-opacity-10"
                                }`}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <span
                                    className={`font-semibold flex items-center ${
                                        activeIndex === index
                                            ? "text-on-accent"
                                            : "text-accent"
                                    }`}
                                >
                                    {activeIndex !== index && (
                                        <HelpCircle className="w-5 h-5 mr-2 flex-shrink-0 opacity-70" />
                                    )}
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-on-accent" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-white rounded-b-xl border-x border-b border-accent border-opacity-10 shadow-inner"
                                        id={`faq-content-${index}`}
                                    >
                                        <div className="p-6">
                                            <p className="text-text leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Still Have Questions */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mt-16 p-8 bg-white rounded-xl max-w-3xl mx-auto shadow-md"
                >
                    <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="heading-md mb-4 text-accent">
                        Still Have Questions?
                    </h3>
                    <p className="paragraph mb-6 max-w-lg mx-auto">
                        {`We're here to help. Contact our customer support team
                        for personalized assistance with any questions about our
                        products.`}
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <span>Contact Us</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FaqSection;
