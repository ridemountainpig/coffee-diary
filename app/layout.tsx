import type { Metadata } from "next";
import {
    Inter,
    Pacifico,
    Kodchasan,
    Tilt_Neon,
    Capriola,
} from "next/font/google";
import "./globals.css";
import Head from "next/head";

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

const capriola = Capriola({
    subsets: ["latin"],
    variable: "--font-capriola",
    weight: "400",
});

export const metadata: Metadata = {
    title: "COFFEE DIARY",
    description:
        "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
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
                className={`${pacifico.variable} ${kodchasan.variable} ${tilt_neon.variable} ${capriola.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
