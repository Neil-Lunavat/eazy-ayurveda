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
} from "lucide-react";
import { footerLinks, socialLinks, companyInfo } from "@/app/lib/constants";

const Footer = () => {
    return (
        <footer className="bg-accent bg-opacity-10 pt-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-accent mb-4">
                            EAZY AYURVEDA
                        </h3>
                        <p className="text-sm text-text mb-4 max-w-xs">
                            Natural remedies rooted in the wisdom of Ayurveda,
                            crafted with love and care for your holistic
                            wellbeing.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href={socialLinks[0].href}
                                aria-label="Instagram"
                                className="text-text hover:text-accent transition-colors"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href={socialLinks[1].href}
                                aria-label="Facebook"
                                className="text-text hover:text-accent transition-colors"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href={socialLinks[2].href}
                                aria-label="Twitter"
                                className="text-text hover:text-accent transition-colors"
                            >
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-accent mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text hover:text-accent transition-colors"
                                    >
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
                        <h3 className="text-xl font-semibold text-accent mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-accent mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <Mail size={16} className="mt-1 text-accent" />
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="text-sm text-text hover:text-accent transition-colors"
                                >
                                    {companyInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Phone size={16} className="mt-1 text-accent" />
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="text-sm text-text hover:text-accent transition-colors"
                                >
                                    {companyInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin
                                    size={16}
                                    className="mt-1 text-accent"
                                />
                                <span className="text-sm text-text">
                                    {companyInfo.address}
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter */}
                <motion.div
                    className="border-t border-accent border-opacity-20 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-accent mb-1">
                                Subscribe for Updates
                            </h3>
                            <p className="text-sm text-text mb-4 md:mb-0">
                                Stay updated with our latest products and
                                offers.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded-md border border-accent border-opacity-20 focus:outline-none focus:border-accent"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <div className="py-6 text-center border-t border-accent border-opacity-20">
                    <p className="text-sm text-text">
                        © {new Date().getFullYear()} EAZY AYURVEDA. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Helper to avoid "ReferenceError: navLinks is not defined"
const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
];
