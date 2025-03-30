"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/motion";
import { faqItems } from "@/app/lib/constants";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding">
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
                    <p className="paragraph max-w-xl mx-auto">
                        Find answers to common questions about our Shilajit
                        product and Ayurvedic benefits.
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
                            className="mb-4"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full flex justify-between items-center p-5 text-left rounded-t-lg focus:outline-none transition-colors ${
                                    activeIndex === index
                                        ? "bg-accent text-white"
                                        : "bg-white hover:bg-primary hover:bg-opacity-10"
                                }`}
                            >
                                <span className="font-semibold">
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
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
                                        className="overflow-hidden bg-white rounded-b-lg border-x border-b border-accent border-opacity-20"
                                    >
                                        <div className="p-5">
                                            <p className="text-text">
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
                    className="text-center mt-12 p-6 bg-primary bg-opacity-10 rounded-xl max-w-3xl mx-auto"
                >
                    <h3 className="heading-md mb-4 text-accent">
                        Still Have Questions?
                    </h3>
                    <p className="paragraph mb-6">
                        We're here to help. Contact our customer support team
                        for personalized assistance.
                    </p>
                    <a href="#contact" className="btn-secondary">
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FaqSection;
