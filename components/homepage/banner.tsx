"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Banner() {
    return (
        <>
            <div className="relative">
                <motion.div
                    className="flex justify-items-center gap-x-6 py-20"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hidden">COFFEE DIARY</h1>
                    <h2 className="hidden">COFFEE</h2>
                    <h2 className="hidden">DIARY</h2>
                    <span className="text-8xl font-kodchasan font-black tracking-widest">
                        C
                    </span>
                    <Image
                        className="-ml-3"
                        src="/coffee-bean.svg"
                        alt="coffee bean icon"
                        width={100}
                        height={100}
                    />
                    <span className="text-8xl font-kodchasan font-black tracking-widest">
                        FFEE
                    </span>
                    <span className="text-8xl font-kodchasan font-black tracking-widest">
                        DIARY
                    </span>
                </motion.div>
                <motion.div
                    className="absolute -left-20 -top-14"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="h-96 w-96 rounded-full bg-serenade-900 opacity-30 blur-3xl"></div>
                </motion.div>
            </div>
        </>
    );
}
