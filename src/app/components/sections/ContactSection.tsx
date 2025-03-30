"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { companyInfo } from "@/app/lib/constants";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="section-padding bg-primary bg-opacity-20"
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
                    <p className="paragraph max-w-2xl mx-auto">
                        Have questions about our products or need assistance?
                        Our team is here to help you on your wellness journey.
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
                        className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="heading-md mb-6 text-accent">
                            Get in Touch
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group hover:bg-logo-orange-light hover:bg-opacity-70 p-3 rounded-lg transition-colors">
                                <div className="p-3 bg-primary bg-opacity-10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6 text-accent group-hover:text-white" />
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

                            <li className="flex items-start space-x-4 group hover:bg-logo-blue-light hover:bg-opacity-70 p-3 rounded-lg transition-colors">
                                <div className="p-3 bg-primary bg-opacity-10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6 text-accent group-hover:text-white" />
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

                            <li className="flex items-start space-x-4 group hover:bg-logo-green-light hover:bg-opacity-70 p-3 rounded-lg transition-colors">
                                <div className="p-3 bg-primary bg-opacity-10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6 text-accent group-hover:text-white" />
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

                        <div className="mt-8 p-6 bg-mint rounded-lg border border-sage border-opacity-30">
                            <div className="flex items-center mb-4">
                                <Clock className="w-5 h-5 text-darkolive mr-2" />
                                <h4 className="font-semibold text-accent">
                                    Business Hours
                                </h4>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between p-2 transition-colors">
                                    <span className="text-text font-medium">
                                        Monday - Friday:
                                    </span>
                                    <span className="font-medium text-darkolive">
                                        9:00 AM - 6:00 PM
                                    </span>
                                </li>
                                <li className="flex justify-between p-2 transition-colors">
                                    <span className="text-text font-medium">
                                        Saturday:
                                    </span>
                                    <span className="font-medium text-darkolive">
                                        10:00 AM - 4:00 PM
                                    </span>
                                </li>
                                <li className="flex justify-between p-2 transition-colors">
                                    <span className="text-text font-medium">
                                        Sunday:
                                    </span>
                                    <span className="font-medium text-darkolive">
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
                        className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="heading-md mb-6 text-accent">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-text mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-text mb-2"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-text mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-text mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="form-input resize-none"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-start mb-2">
                                <div className="flex items-center h-5">
                                    <input
                                        id="privacy"
                                        name="privacy"
                                        type="checkbox"
                                        className="h-4 w-4 text-accent border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="privacy"
                                        className="text-text"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-accent hover:underline"
                                        >
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full flex items-center justify-center space-x-2 group"
                            >
                                <span>Send Message</span>
                                <Send
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                        </form>

                        <p className="text-muted text-sm text-center mt-4">
                            We typically respond within 24 business hours.
                        </p>
                    </motion.div>
                </div>

                {/* Map or Additional Info */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-16 p-6 bg-white rounded-xl shadow-md text-center"
                >
                    <h3 className="text-lg font-semibold text-accent mb-3">
                        Connect With Us On Social Media
                    </h3>
                    <p className="text-text mb-6">
                        Follow us for the latest updates, wellness tips, and
                        exclusive offers
                    </p>
                    <div className="flex justify-center space-x-6">
                        {/* Social Media Icons - Updated to use secondary (sage) */}
                        <a
                            href="#"
                            className="p-3 bg-secondary bg-opacity-10 rounded-full hover:bg-secondary hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="p-3 bg-secondary bg-opacity-10 rounded-full hover:bg-secondary hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="p-3 bg-secondary bg-opacity-10 rounded-full hover:bg-secondary hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="p-3 bg-secondary bg-opacity-10 rounded-full hover:bg-secondary hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
