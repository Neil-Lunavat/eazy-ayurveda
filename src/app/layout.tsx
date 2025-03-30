import "./globals.css";
import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Script from "next/script";

// Font definitions
const lora = Lora({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lora",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "EAZY AYURVEDA | Natural Ayurvedic Remedies",
    description:
        "Discover authentic Ayurvedic remedies including premium Shilajit. Natural healing products crafted with traditional wisdom for modern wellness.",
    keywords:
        "ayurveda, natural remedies, shilajit, holistic health, wellness, ayurvedic, health supplements",
    openGraph: {
        title: "EAZY AYURVEDA | Natural Ayurvedic Remedies",
        description:
            "Authentic Ayurvedic remedies for modern wellness. Discover our premium Shilajit and natural health solutions.",
        url: "https://eazyayurveda.com",
        siteName: "EAZY AYURVEDA",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${lora.variable} ${playfair.variable} scroll-smooth`}
        >
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#f5efdd" />

                {/* Preloading key images for better performance */}
                <link rel="preload" href="/placeholder.webp" as="image" />
            </head>
            <body className="relative">
                {/* Background grain effect */}
                <div className="fixed inset-0 -z-50 pointer-events-none">
                    <div className="absolute inset-0 bg-ayurveda-cream"></div>
                    <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-[0.03]"></div>
                </div>

                <Header />
                <main>{children}</main>
                <Footer />

                {/* Smooth scroll handling */}
                <Script id="smooth-scroll">
                    {`
                        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                            anchor.addEventListener('click', function (e) {
                                e.preventDefault();
                                
                                document.querySelector(this.getAttribute('href')).scrollIntoView({
                                    behavior: 'smooth'
                                });
                            });
                        });
                    `}
                </Script>

                {/* Cursor animation effect */}
                <Script id="cursor-effect">
                    {`
                        document.addEventListener('DOMContentLoaded', () => {
                            const createParticle = (x, y) => {
                                const particle = document.createElement('div');
                                particle.className = 'pointer-events-none absolute z-50 w-2 h-2 rounded-full bg-ayurveda-yellow';
                                particle.style.left = x + 'px';
                                particle.style.top = y + 'px';
                                particle.style.opacity = '0.8';
                                document.body.appendChild(particle);
                                
                                // Animation
                                setTimeout(() => {
                                    particle.style.transition = 'all 1s ease-out';
                                    particle.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'px, ' + (Math.random() * 100 - 50) + 'px)';
                                    particle.style.opacity = '0';
                                }, 10);
                                
                                // Remove from DOM
                                setTimeout(() => {
                                    particle.remove();
                                }, 1000);
                            };
                            
                            // Only track mousemove on larger screens
                            if (window.matchMedia('(min-width: 1024px)').matches) {
                                document.addEventListener('mousemove', (e) => {
                                    // Limit the rate of particle creation
                                    if (Math.random() > 0.95) {
                                        createParticle(e.clientX, e.clientY);
                                    }
                                });
                            }
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
