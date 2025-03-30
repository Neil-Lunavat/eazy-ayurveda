"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Instagram,
    Facebook,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Heart,
} from "lucide-react";
import {
    footerLinks,
    socialLinks,
    companyInfo,
    navLinks,
} from "@/app/lib/constants";

const Footer = () => {
    return (
        <footer className="bg-accent pt-16 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                                <span className="text-accent font-bold text-lg">
                                    EA
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    EAZY AYURVEDA
                                </h3>
                                <p className="text-xs text-on-accent-muted">
                                    NATURAL REMEDIES
                                </p>
                            </div>
                        </div>
                        <p className="text-on-accent-muted mb-6 leading-relaxed">
                            Natural remedies rooted in the wisdom of Ayurveda,
                            crafted with love and care for your holistic
                            wellbeing.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    aria-label={link.label}
                                    className="p-2 bg-white rounded-full text-accent hover:bg-secondary hover:text-accent transition-colors shadow-sm"
                                >
                                    {link.label === "Instagram" && (
                                        <Instagram size={18} />
                                    )}
                                    {link.label === "Facebook" && (
                                        <Facebook size={18} />
                                    )}
                                    {link.label === "Twitter" && (
                                        <Twitter size={18} />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-white border-opacity-20 pb-2">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-on-accent-muted hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-white border-opacity-20 pb-2">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-on-accent-muted hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#"
                                    className="text-on-accent-muted hover:text-white transition-colors flex items-center"
                                >
                                    <span className="mr-2">›</span>
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-on-accent-muted hover:text-white transition-colors flex items-center"
                                >
                                    <span className="mr-2">›</span>
                                    Return Policy
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-white border-opacity-20 pb-2">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail
                                    size={18}
                                    className="mt-1 text-secondary mr-3 flex-shrink-0"
                                />
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="text-on-accent-muted hover:text-white transition-colors"
                                >
                                    {companyInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone
                                    size={18}
                                    className="mt-1 text-secondary mr-3 flex-shrink-0"
                                />
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="text-on-accent-muted hover:text-white transition-colors"
                                >
                                    {companyInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin
                                    size={18}
                                    className="mt-1 text-secondary mr-3 flex-shrink-0"
                                />
                                <span className="text-on-accent-muted">
                                    {companyInfo.address}
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter */}
                <motion.div
                    className="border-t border-white border-opacity-10 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-accent mb-2">
                                    Subscribe for Updates
                                </h3>
                                <p className="text-text mb-4 md:mb-0">
                                    Stay updated with our latest products,
                                    offers, and Ayurvedic wellness tips.
                                </p>
                            </div>
                            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="form-input"
                                />
                                <button className="btn-primary whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <div className="py-6 text-center border-t border-white border-opacity-10">
                    <p className="text-white">
                        © {new Date().getFullYear()} EAZY AYURVEDA. All rights
                        reserved.
                    </p>
                    <p className="text-sm text-on-accent-muted mt-2 flex items-center justify-center">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 mx-1 text-secondary" />
                        <span>in India</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
