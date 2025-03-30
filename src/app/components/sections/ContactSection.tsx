"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { companyInfo } from "@/app/lib/constants";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="section-padding bg-primary bg-opacity-10"
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
                    <h2 className="heading-lg mb-4">Contact Us</h2>
                    <p className="paragraph max-w-xl mx-auto">
                        Have questions about our products or need assistance?
                        Reach out to us and we'll be happy to help.
                    </p>
                    <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white rounded-xl p-8 shadow-md"
                    >
                        <h3 className="heading-md mb-6 text-accent">
                            Get in Touch
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent mb-1">
                                        Email
                                    </h4>
                                    <a
                                        href={`mailto:${companyInfo.email}`}
                                        className="text-text hover:text-accent transition-colors"
                                    >
                                        {companyInfo.email}
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start space-x-4">
                                <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent mb-1">
                                        Phone
                                    </h4>
                                    <a
                                        href={`tel:${companyInfo.phone}`}
                                        className="text-text hover:text-accent transition-colors"
                                    >
                                        {companyInfo.phone}
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start space-x-4">
                                <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent mb-1">
                                        Address
                                    </h4>
                                    <address className="not-italic text-text">
                                        {companyInfo.address}
                                    </address>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 p-4 bg-accent bg-opacity-10 rounded-lg">
                            <h4 className="font-semibold text-accent mb-2">
                                Business Hours
                            </h4>
                            <ul className="space-y-1 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-text">
                                        Monday - Friday:
                                    </span>
                                    <span className="font-medium text-text">
                                        9:00 AM - 6:00 PM
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-text">Saturday:</span>
                                    <span className="font-medium text-text">
                                        10:00 AM - 4:00 PM
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-text">Sunday:</span>
                                    <span className="font-medium text-text">
                                        Closed
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-white rounded-xl p-8 shadow-md"
                    >
                        <h3 className="heading-md mb-6 text-accent">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-text mb-1"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-3 border border-primary border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-text mb-1"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-3 border border-primary border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-text mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full p-3 border border-primary border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-text mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full p-3 border border-primary border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
