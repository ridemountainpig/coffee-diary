"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Banner() {
    return (
        <>
            <div className="relative z-10">
                <motion.div
                    className="justify-items-center py-20 text-center lg:flex lg:gap-x-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hidden">COFFEE DIARY</h1>
                    <h2 className="hidden">COFFEE</h2>
                    <h2 className="hidden">DIARY</h2>
                    <div className="font-kodchasan text-6dot5xl text-coffee-black flex justify-center font-black tracking-widest sm:text-7xl md:pb-4 md:text-8xl lg:pb-0">
                        <span>C</span>
                        <Image
                            className="hidden pr-2 md:block"
                            src="/coffee-bean.svg"
                            alt="coffee bean icon"
                            width={100}
                            height={100}
                        />
                        <Image
                            className="block pr-2 md:hidden"
                            src="/coffee-bean.svg"
                            alt="coffee bean icon"
                            width={80}
                            height={80}
                        />
                        <span>FFEE</span>
                    </div>
                    <span className="font-kodchasan text-6dot5xl text-coffee-black font-black tracking-widest sm:text-7xl md:text-8xl">
                        DIARY
                    </span>
                </motion.div>
                <motion.div
                    className="absolute -top-14 -left-20 -z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="bg-serenade-900 rounded-full opacity-30 blur-3xl md:h-96 md:w-96"></div>
                </motion.div>
            </div>
        </>
    );
}
