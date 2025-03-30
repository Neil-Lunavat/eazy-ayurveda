import "./globals.css";
import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
    keywords: "ayurveda, natural remedies, shilajit, holistic health, wellness",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${lora.variable} ${playfair.variable} smooth-scroll`}
        >
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="grain-bg">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
