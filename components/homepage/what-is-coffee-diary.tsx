"use client";

import { motion } from "framer-motion";
import { CoffeeStep } from "@/components/coffee-step";
import { AreaContent } from "@/components/area-content";
import { Highlight } from "@/components/highlight";

export function WhatIsCoffeeDiary() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="mx-5 sm:mx-20 lg:mx-30 2xl:mx-52"
            >
                <div className="flex h-fit items-center gap-x-6 pb-4">
                    <div className="font-kodchasan text-coffee-black text-3xl font-black tracking-widest lg:text-4xl">
                        What is Coffee Diary
                    </div>
                    <div className="hidden lg:block">
                        <CoffeeStep />
                    </div>
                </div>
                <div className="font-tilt-neon text-serenade-800 pb-4 text-xl font-black tracking-widest sm:text-2xl">
                    <Highlight
                        text="Coffee Diary: Your Personalized Coffee Journal,
                        Visualized with SVG"
                    ></Highlight>
                </div>
                <AreaContent content="Coffee Diary is an innovative project that turns your coffee experiences into visually appealing SVG graphics. It provides coffee enthusiasts with a unique way to document their coffee journey without the hassle of traditional journaling methods."></AreaContent>
            </motion.div>
        </>
    );
}
