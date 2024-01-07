"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Banner() {
    return (
        <>
            <div className="relative">
                <motion.div
                    className="lg:flex justify-items-center lg:gap-x-6 py-20 text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hidden">COFFEE DIARY</h1>
                    <h2 className="hidden">COFFEE</h2>
                    <h2 className="hidden">DIARY</h2>
                    <div className="flex justify-center md:pb-4 lg:pb-0 sm:text-7xl md:text-8xl text-6.5xl font-kodchasan font-black tracking-widest">
                        <span>C</span>
                        <Image
                            className="pr-2 hidden md:block"
                            src="/coffee-bean.svg"
                            alt="coffee bean icon"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="pr-2 block md:hidden"
                            src="/coffee-bean.svg"
                            alt="coffee bean icon"
                            width={80}
                            height={80}
                        />
                        <span>FFEE</span>
                    </div>
                    <span className="sm:text-7xl md:text-8xl text-6.5xl font-kodchasan font-black tracking-widest">
                        DIARY
                    </span>
                </motion.div>
                <motion.div
                    className="absolute -left-20 -top-14"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="md:h-96 md:w-96 rounded-full bg-serenade-900 opacity-30 blur-3xl"></div>
                </motion.div>
            </div>
        </>
    );
}
