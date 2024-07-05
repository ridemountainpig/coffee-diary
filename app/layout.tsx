import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Pacifico, Kodchasan, Tilt_Neon } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Rwdot } from "rwdot";

const inter = Inter({ subsets: ["latin"] });

const pacifico = Pacifico({
    subsets: ["latin"],
    variable: "--font-pacifico",
    weight: "400",
});

const kodchasan = Kodchasan({
    subsets: ["latin"],
    variable: "--font-kodchasan",
    weight: "700",
});

const tilt_neon = Tilt_Neon({
    subsets: ["latin"],
    variable: "--font-tilt-neon",
    weight: "400",
});

export const metadata: Metadata = {
    title: "COFFEE DIARY",
    description:
        "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
    keywords:
        "coffee, diary, coffee diary, coffee journal, coffee tasting, coffee experience",
    authors: [
        {
            name: "ridemountainpig",
            url: "https://www.github.com/ridemountainpig",
        },
    ],
    openGraph: {
        type: "website",
        url: "https://coffee-diary.com/",
        title: "COFFEE DIARY",
        description:
            "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
        images: [
            {
                url: "https://coffee-diary.com/coffee-diary.png",
                width: 1200,
                height: 630,
                alt: "COFFEE DIARY",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "COFFEE DIARY",
        description:
            "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
        creator: "@ridemountainpig",
        images: ["https://coffee-diary.com/coffee-diary.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body
                className={`${pacifico.variable} ${kodchasan.variable} ${tilt_neon.variable} selection:bg-serenade-600 selection:text-serenade-100`}
            >
                <Rwdot
                    show={process.env.RWDOT_ENV === "development"}
                    position="bottom-right"
                />
                <main>{children}</main>
                <GoogleAnalytics gaId="G-RLZFE5T2TQ" />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
