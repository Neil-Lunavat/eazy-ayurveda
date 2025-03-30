import React from "react";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProductSection from "./components/sections/ProductSection";
import InstagramSection from "./components/sections/InstagramSection";
import ContactSection from "./components/sections/ContactSection";
import FaqSection from "./components/sections/FaqSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProductSection />
            <AboutSection />
            <InstagramSection />
            <FaqSection />
            <ContactSection />
        </>
    );
}
