"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DiaryLine } from "@/components/homepage/diary-line";
import { DiaryContent } from "@/components/homepage/diary-content";

export function Diary() {
    return (
        <>
            <motion.div
                className="bg-coffee-alabaster relative mx-5 h-fit rounded-3xl px-3 pt-3 sm:mx-20 md:px-6 md:pt-6 lg:mx-30 lg:h-[38rem]"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <DiaryContent
                    content="Life is like a cup of coffee, it is all in how you make it or take it."
                    padding=""
                    position="text-center lg:text-left"
                ></DiaryContent>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <DiaryContent
                    content="Begin crafting your coffee diary, chronicling the unique path you traverse with each cup."
                    padding="lg:pl-14"
                    position="text-center lg:text-right"
                ></DiaryContent>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <div className="hidden md:block">
                    <DiaryContent
                        content="Coffee, a daily symphony that orchestrates the rhythm of life and awakens the spirit of adventure."
                        padding=""
                        position="text-center lg:text-left"
                    ></DiaryContent>
                </div>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <DiaryContent
                    content="ridemountainpig"
                    padding="lg:pr-20"
                    position="text-right"
                ></DiaryContent>
                <Image
                    src="/coffee-pen.png"
                    alt="coffee pen"
                    width={128}
                    height={128}
                    className="absolute right-4 bottom-0.5 hidden lg:block"
                />
            </motion.div>
        </>
    );
}
