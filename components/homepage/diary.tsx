"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DiaryLine } from "@/components/homepage/diary-line";
import { DiaryContent } from "@/components/homepage/diary-content";

export function Diary() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return (
        <>
            <motion.div
                className="bg-coffee-alabaster w-[75%] h-[38rem] rounded-3xl p-6 relative"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <DiaryContent
                    content="Life is like a cup of coffee, it is all in how you make it or take it."
                    padding=""
                    position="text-left"
                ></DiaryContent>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <DiaryContent
                    content="Begin crafting your coffee diary, chronicling the unique path you traverse with each cup."
                    padding="pl-14"
                    position="text-right"
                ></DiaryContent>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <DiaryContent
                    content="Coffee, a daily symphony that orchestrates the rhythm of life and awakens the spirit of adventure."
                    padding="pr-14"
                    position="text-center"
                ></DiaryContent>
                <DiaryLine></DiaryLine>
                <DiaryLine></DiaryLine>
                <DiaryContent
                    content={`ridemountainpig ${month}-${date}-${year}`}
                    padding="pr-20"
                    position="text-right"
                ></DiaryContent>
                <Image
                    src="/coffee-pen.png"
                    alt="coffee pen"
                    width={128}
                    height={128}
                    className="absolute right-4 bottom-0.5"
                />
            </motion.div>
        </>
    );
}
