import React from "react";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProductSection from "./components/sections/ProductSection";
import InstagramSection from "./components/sections/InstagramSection";
import ContactSection from "./components/sections/ContactSection";
// import FaqSection from "./components/sections/FaqSection";
import ClickSpark from "./components/ui/Click";

export default function Home() {
    return (
        <ClickSpark
            sparkColor="#a2b56d"
            sparkSize={14}
            sparkRadius={30}
            sparkCount={12}
            duration={500}
            extraScale={0.8}
        >
            <HeroSection />
            <ProductSection />
            <AboutSection />
            <InstagramSection />
            {/* <FaqSection /> */}
            <ContactSection />
        </ClickSpark>
    );
}
