"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/app/lib/constants";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Set active link based on scroll position
        const handleActiveLink = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.pageYOffset;

            sections.forEach((section) => {
                // Type assertion to HTMLElement which has offsetHeight and offsetTop properties
                const htmlSection = section as HTMLElement;
                const sectionHeight = htmlSection.offsetHeight;
                const sectionTop = htmlSection.offsetTop - 100;
                const sectionId = section.getAttribute("id");

                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    setActiveLink(`#${sectionId}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleActiveLink);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleActiveLink);
        };
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "py-3 bg-white/80 bg-opacity-95 backdrop-blur-sm shadow-md"
                    : "py-2 bg-white/80 shadow-md"
            }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo - Improved for mobile */}
                <Link href="#home">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/logo.webp"
                            alt="Eazy Ayurveda Logo"
                            width={20}
                            height={20}
                            className="h-auto w-auto object-contain"
                        />
                        <div className="flex flex-col ml-2">
                            <span className="text-base md:text-xl font-semibold text-accent leading-tight">
                                EAZY AYURVEDA
                            </span>
                            <span className="text-xs text-muted">
                                NATURAL MADE EASY
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className={`navbar-link ${
                                    activeLink === link.href
                                        ? "text-accent font-medium"
                                        : ""
                                }`}
                                onClick={() => setActiveLink(link.href)}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                    >
                        <Link
                            href="#product"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <ShoppingBag size={18} />
                            <span>Shop Now</span>
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Hamburger */}
                <button
                    className="md:hidden text-accent"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu - Add max-h-screen and overflow-y-auto to prevent potential overflow issues */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-card border-t border-border shadow-lg max-h-screen overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`py-2 px-4 rounded-md transition-colors ${
                                        activeLink === link.href
                                            ? "bg-primary text-accent font-medium"
                                            : "text-text hover:bg-primary hover:text-accent"
                                    }`}
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#product"
                                className="btn-primary text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex items-center justify-center">
                                    <ShoppingBag size={12} className="mr-2" />
                                    Shop Now
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
