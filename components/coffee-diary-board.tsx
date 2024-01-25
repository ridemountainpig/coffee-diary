"use client";

import React, { useState, useEffect } from "react";
import { getCoffeeDiaryJson } from "@/lib/coffee-diary";
import { CoffeeDiaryCard } from "@/components/coffee-diary-card";
import { Highlight } from "@/components/highlight";
import { HighlightWithClick } from "@/components/highlight-with-click";

interface CoffeeDiaryBoardProps {
    name: string;
}

export function CoffeeDiaryBoard({ name }: CoffeeDiaryBoardProps) {
    const [coffeeDiary, setCoffeeDiary] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const json = await getCoffeeDiaryJson(name);
                setCoffeeDiary(json);
            } catch (error) {
                console.error(error);
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
            {coffeeDiary != null ? (
                Object.entries(coffeeDiary).map(([date, entry], index) => (
                    <CoffeeDiaryCard
                        key={index}
                        date={date}
                        beanType={entry["bean-type"]}
                        origin={entry["origin"]}
                        flavor={entry["flavor"]}
                        coffeeDay={Object.keys(coffeeDiary).length - index}
                        name={name}
                    ></CoffeeDiaryCard>
                ))
            ) : (
                <>
                    <div className="flex justify-center text-center">
                        <div className="py-6">
                            <div className="text-xl font-tilt-neon font-black text-red-700 tracking-widest mt-4">
                                cannot find the{" "}
                                <Highlight text="coffee-diary.json"></Highlight>{" "}
                                file with this GitHub username.
                            </div>
                            <div className="text-xl font-tilt-neon font-black text-[#967253] tracking-widest mt-4">
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
                </>
            )}
        </>
    );
}
