"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CoffeeNavbar() {
    return (
        <>
            <div className="flex h-32 justify-center gap-x-8 md:gap-x-10">
                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src="/coffee-bag.svg"
                        alt="coffee bag"
                        width={64}
                        height={64}
                    />
                </motion.div>
                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Image
                        src="/coffee-abrader.svg"
                        alt="coffee abrader"
                        width={64}
                        height={64}
                    />
                </motion.div>
                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <Image
                        src="/coffee-cup.svg"
                        alt="coffee cup"
                        width={64}
                        height={64}
                    />
                </motion.div>
                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Image
                        src="/coffee-pot.svg"
                        alt="coffee pot"
                        width={64}
                        height={64}
                    />
                </motion.div>
            </div>
        </>
    );
}
