"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
    Download,
    CalendarDays,
    TypeOutline,
    MapPinned,
    Coffee,
} from "lucide-react";
import { toPng } from "html-to-image";
import { CoffeeStep } from "@/components/coffee-step";

interface DiaryInputProps {
    encodedData: string;
    name: string;
    date: string;
    beanType: string;
    origin: string;
    flavor: string;
}

export function Diary({
    encodedData,
    name,
    date,
    beanType,
    origin,
    flavor,
}: DiaryInputProps) {
    const diaryContentStyle =
        "flex h-fit w-full items-center gap-x-2 border-b-[3px] border-dashed border-serenade-950 bg-serenade-500 p-0.5 py-4 font-tilt-neon text-lg tracking-wider text-serenade-950 md:text-2xl";

    const handleDownloadImage = () => {
        const node = document.getElementById("coffee-diary-image");
        if (node) {
            toPng(node)
                .then(function (dataUrl) {
                    const link = document.createElement("a");
                    link.href = dataUrl;
                    link.download = "coffee-diary.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch(function (error) {
                    console.error("Oops, something went wrong!", error);
                });
        } else {
            console.warn("Element with id 'coffee-diary-image' not found.");
        }
    };

    return (
        <motion.div
            className="pb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
        >
            <div className="lg:mx-30 mx-5 mt-2 sm:mx-10 2xl:mx-52">
                <div className="rounded-xl bg-serenade-500 p-8 shadow-xl shadow-coffee-brown">
                    <div className="flex w-full justify-center pb-2">
                        <div className="text-center font-tilt-neon text-xl font-black tracking-widest text-serenade-950 md:text-2xl lg:text-3xl">
                            {name}&apos;s Coffee Diary
                        </div>
                    </div>
                    <CoffeeStep></CoffeeStep>
                    <div className={diaryContentStyle}>
                        <div className="w-6">
                            <CalendarDays />
                        </div>

                        <span>Date: {date}</span>
                    </div>
                    <div className={diaryContentStyle}>
                        <div className="w-6">
                            <TypeOutline />
                        </div>

                        <span>Bean Type: {beanType}</span>
                    </div>
                    <div className={diaryContentStyle}>
                        <div className="w-6">
                            <MapPinned />
                        </div>
                        <span>Origin: {origin}</span>
                    </div>
                    <div className="flex h-fit w-full items-start gap-x-2 border-b-[3px] border-dashed border-serenade-950 bg-serenade-500 p-0.5 py-4 font-tilt-neon text-lg tracking-wider text-serenade-950 md:text-2xl">
                        <div className="mt-1 w-6">
                            <Coffee />
                        </div>
                        <span>Flavor: {flavor}</span>
                    </div>
                    <div className="flex w-full justify-center pb-2 pt-8">
                        <div className="justify-center gap-x-8 md:flex">
                            <Tilt
                                transitionSpeed={1000}
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                            >
                                <img
                                    id="coffee-diary-image"
                                    src={`/api/diary/${encodedData}`}
                                    alt={`${name}'s Coffee Diary`}
                                />
                            </Tilt>
                            <div className="mt-4 flex justify-center gap-x-4 gap-y-4 md:mt-0 md:flex-col">
                                <a
                                    className="flex h-fit w-fit items-center rounded-full bg-serenade-600 px-4 py-2"
                                    href={`https://x.com/intent/post?text=Check%20out%20my%20Coffee%20Diary%20for%20${date.replaceAll("-", "/")}!%20%23CoffeeDiary&url=https://coffee-diary.com/diary/${encodedData}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-1 h-3 w-3 md:h-5 md:w-5"
                                        viewBox="0 0 24 24"
                                        fill="#472713"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                    <span className="font-tilt-neon text-lg text-serenade-950 md:text-xl">
                                        Share
                                    </span>
                                </a>
                                <button
                                    className="flex h-fit w-fit items-center rounded-full bg-serenade-600 px-4 py-2"
                                    onClick={handleDownloadImage}
                                >
                                    <Download
                                        className="mr-1 h-3 w-3 text-serenade-950 md:h-5 md:w-5"
                                        strokeWidth={2.5}
                                    />
                                    <span className="font-tilt-neon text-lg text-serenade-950 md:text-xl">
                                        Save as Image
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
