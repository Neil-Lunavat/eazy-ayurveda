"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/app/lib/constants";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "py-2 bg-ayurveda-cream bg-opacity-95 backdrop-blur-md shadow-md"
                    : "py-4 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="#home">
                    <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 bg-ayurveda-olive rounded-full flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L14.5 4.5C14.5 4.5 15 5 15.5 5C16 5 16.5 4.5 16.5 4.5C16.5 4.5 17 4 17 3.5C17 3 16.5 2.5 16.5 2.5L14 0L11.5 2.5C11.5 2.5 11 3 11 3.5C11 4 11.5 4.5 11.5 4.5C11.5 4.5 12 5 12.5 5C13 5 13.5 4.5 13.5 4.5L12 3V2Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 6.5C18 6.5 17 7.5 16 7.5C15 7.5 14 6.5 14 6.5C14 6.5 13 5.5 12 5.5C11 5.5 10 6.5 10 6.5C10 6.5 9 7.5 8 7.5C7 7.5 6 6.5 6 6.5V7.5C6 7.5 7 8.5 8 8.5C9 8.5 10 7.5 10 7.5C10 7.5 11 6.5 12 6.5C13 6.5 14 7.5 14 7.5C14 7.5 15 8.5 16 8.5C17 8.5 18 7.5 18 7.5V6.5Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 9.5C18 9.5 17 10.5 16 10.5C15 10.5 14 9.5 14 9.5C14 9.5 13 8.5 12 8.5C11 8.5 10 9.5 10 9.5C10 9.5 9 10.5 8 10.5C7 10.5 6 9.5 6 9.5V10.5C6 10.5 7 11.5 8 11.5C9 11.5 10 10.5 10 10.5C10 10.5 11 9.5 12 9.5C13 9.5 14 10.5 14 10.5C14 10.5 15 11.5 16 11.5C17 11.5 18 10.5 18 10.5V9.5Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 12.5C18 12.5 17 13.5 16 13.5C15 13.5 14 12.5 14 12.5C14 12.5 13 11.5 12 11.5C11 11.5 10 12.5 10 12.5C10 12.5 9 13.5 8 13.5C7 13.5 6 12.5 6 12.5V13.5C6 13.5 7 14.5 8 14.5C9 14.5 10 13.5 10 13.5C10 13.5 11 12.5 12 12.5C13 12.5 14 13.5 14 13.5C14 13.5 15 14.5 16 14.5C17 14.5 18 13.5 18 13.5V12.5Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5 21.5 11 21 11C20.5 11 20 11.5 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 11.5 3.5 11 3 11C2.5 11 2 11.5 2 12C2 17.5228 6.47715 22 12 22Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-ayurveda-olive rounded-full animate-pulse-soft opacity-30"></div>
                        </div>
                        <div>
                            <span className="block text-lg md:text-xl font-bold text-ayurveda-olive tracking-wide">
                                EAZY AYURVEDA
                            </span>
                            <span className="block text-xs text-ayurveda-text tracking-widest">
                                NATURAL REMEDIES
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={link.href} className="navbar-link">
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="ml-2"
                    >
                        <Link
                            href="#product"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <ShoppingBag size={16} />
                            <span>Shop Now</span>
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Hamburger */}
                <button
                    className="md:hidden text-ayurveda-olive p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-ayurveda-olive focus:ring-opacity-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-ayurveda-mint shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="py-2 px-4 text-ayurveda-olive hover:bg-ayurveda-cream rounded-md transition-colors duration-300"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="#product"
                                    className="btn-primary text-center mt-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
