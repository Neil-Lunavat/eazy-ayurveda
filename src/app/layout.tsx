import "./globals.css";
import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

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
        "ayurveda, natural remedies, shilajit, holistic health, wellness, herbal products, ayurvedic supplements",
    authors: [{ name: "EAZY AYURVEDA", url: "https://eazyayurveda.com" }],
    creator: "EAZY AYURVEDA",
    openGraph: {
        title: "EAZY AYURVEDA | Natural Ayurvedic Remedies",
        description:
            "Discover authentic Ayurvedic remedies for holistic wellness.",
        images: ["/og-image.jpg"],
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
            className={`${lora.variable} ${playfair.variable} smoothscroll`}
        >
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#4d5e25" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body className="grainbg">
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
