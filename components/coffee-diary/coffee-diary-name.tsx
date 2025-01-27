"use client";

import { motion } from "framer-motion";

interface CoffeeDiaryNameProps {
    name: string;
}

export function CoffeeDiaryName({ name }: CoffeeDiaryNameProps) {
    return (
        <>
            <span className="p-4 text-center font-pacifico text-xl tracking-widest text-coffee-brown lg:text-2xl">
                <motion.span
                    className="inline-block pr-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 * 0.08 }}
                >
                    By
                </motion.span>
                {name.split("").map((char, index) => {
                    return (
                        <motion.span
                            key={index}
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.08 }}
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </span>
        </>
    );
}
