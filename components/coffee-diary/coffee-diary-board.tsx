"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCoffeeDiaryJson } from "@/lib/coffee-diary";
import { CoffeeDiaryCard } from "@/components/coffee-diary/coffee-diary-card";
import { Highlight } from "@/components/highlight";
import { HighlightWithClick } from "@/components/highlight-with-click";

interface CoffeeDiaryBoardProps {
    name: string;
}

export function CoffeeDiaryBoard({ name }: CoffeeDiaryBoardProps) {
    const [coffeeDiary, setCoffeeDiary] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetchError, setIsFetchError] = useState(false);
    const [isJsonError, setIsJsonError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json = await getCoffeeDiaryJson(name);
                setCoffeeDiary(json);
            } catch (error) {
                if (error instanceof Error) {
                    if (
                        error.message.includes(
                            "Failed to fetch coffee diary json",
                        )
                    ) {
                        setIsFetchError(true);
                    } else if (error.message.includes("Failed to parse JSON")) {
                        setIsJsonError(true);
                    }
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [name]);

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {coffeeDiary != null &&
                isFetchError != true &&
                isJsonError != true ? (
                    Object.entries(coffeeDiary).map(([date, entry], index) => (
                        <CoffeeDiaryCard
                            key={index}
                            date={date}
                            beanType={entry["bean-type"] || "No Bean Type"}
                            origin={entry["origin"] || "No Origin"}
                            flavor={entry["flavor"] || "No Flavor"}
                            coffeeDay={Object.keys(coffeeDiary).length - index}
                            name={name}
                        ></CoffeeDiaryCard>
                    ))
                ) : (
                    <></>
                )}
                {isFetchError == true && (
                    <div className="flex justify-center text-center">
                        <div className="py-6">
                            <div className="flex justify-center">
                                <Image
                                    className="-mt-10"
                                    src="/coffee-diary-book.png"
                                    alt="coffee diary book icon"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="font-tilt-neon text-xl font-black tracking-widest text-red-700">
                                cannot find the{" "}
                                <Highlight text="coffee-diary.json"></Highlight>{" "}
                                file with this GitHub username.
                            </div>
                            <div className="mt-4 font-tilt-neon text-xl font-black tracking-widest text-[#967253]">
                                please check the{" "}
                                <a
                                    href="https://coffee-diary.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="coffee diary how to use"
                                >
                                    <HighlightWithClick
                                        text="How to use"
                                        underlineOffset="underline-offset-4"
                                    ></HighlightWithClick>{" "}
                                </a>
                                content for more information.
                            </div>
                        </div>
                    </div>
                )}
                {isJsonError == true && (
                    <div className="flex justify-center text-center">
                        <div className="py-6">
                            <div className="mt-4 font-tilt-neon text-xl font-black tracking-widest text-red-700">
                                coffee-diary.json syntax error please check your
                                json file.
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
}
