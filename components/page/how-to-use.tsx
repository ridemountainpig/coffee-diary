"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AreaContent } from "@/components/area-content";
import { AreaTitle } from "@/components/area-title";
import { CoffeeDiary } from "@/components/coffee-diary";
import { CoffeeDiaryJson } from "@/components/coffee-diary/coffee-diary-json";
import { ArrowRightCircle, FileJson2, PencilLine } from "lucide-react";
import { Highlight } from "@/components/highlight";
import { HighlightWithClick } from "@/components/highlight-with-click";
import { getCoffeeDiaryJson } from "@/lib/coffee-diary";

export function HowToUse() {
    const [githubName, setGithubName] = useState("");

    const coffeeDiaryUrlBase = "https://coffee-diary.com/api/";
    const [coffeeDiaryUrl, setCoffeeDiaryUrl] = useState(
        coffeeDiaryUrlBase + "coffeeDiarySvg",
    );
    const [coffeeDiaryState, setCoffeeDiaryState] = useState(false);
    const [coffeeDiaryPage, setCoffeeDiaryPage] = useState(false);

    const handleGithubNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (coffeeDiaryPage == true) setCoffeeDiaryPage(false);
        setGithubName(event.target.value);
    };

    const handleGithubNameBtnClick = async () => {
        let response;
        try {
            response = await getCoffeeDiaryJson(githubName);
        } catch (error) {
            if (error instanceof Error) {
                response = null;
            }
        }
        if (response == null) {
            setCoffeeDiaryUrl(coffeeDiaryUrlBase + "coffeeDiarySvg");
            setCoffeeDiaryState(true);
            return;
        }
        setCoffeeDiaryUrl(coffeeDiaryUrlBase + githubName);
        setCoffeeDiaryPage(true);
        setCoffeeDiaryState(false);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="lg:mx-30 mx-5 mt-2 sm:mx-20 2xl:mx-52">
                    <AreaTitle title="How to use"></AreaTitle>
                    <div className="pb-4 font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl">
                        Add a <Highlight text="coffee-diary.json"></Highlight>{" "}
                        file to your <Highlight text="Github"></Highlight>{" "}
                        special repository root.
                    </div>
                    <AreaContent content="(the repo with your username)."></AreaContent>
                    <div className="py-4 font-tilt-neon text-xl font-black tracking-widest text-serenade-800 sm:text-2xl">
                        <a
                            href="https://github.com/ridemountainpig/coffee-diary/blob/main/coffee-diary.json"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="coffee diary json example"
                        >
                            <HighlightWithClick
                                text="see the example"
                                underlineOffset={"underline-offset-8"}
                            ></HighlightWithClick>
                        </a>
                    </div>
                </div>
                <div className="lg:mx-30 mx-5 h-fit sm:mx-20 2xl:mx-52">
                    <div className="flex h-fit items-center gap-x-2 text-coffee-black">
                        <FileJson2 />
                        <div className="py-4 font-tilt-neon text-lg font-black tracking-widest">
                            coffee-diary.json
                        </div>
                    </div>
                </div>
                <div className="lg:mx-30 mx-5 grid h-fit grid-cols-2 gap-x-10 pb-10 sm:mx-20 2xl:mx-52">
                    <div className="col-span-2 h-full xl:col-span-1">
                        <CoffeeDiaryJson></CoffeeDiaryJson>
                    </div>
                    <div className="col-span-2 mt-4 flex h-full items-center xl:col-span-1 xl:mt-0">
                        <span className="font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl lg:leading-loose">
                            In this JSON configuration, each coffee diary entry
                            is encapsulated as an object keyed by the date in a{" "}
                            <Highlight text="year-month-day"></Highlight>{" "}
                            format, allowing you to document your coffee
                            experiences on a daily basis. The entries for{" "}
                            <Highlight text="bean-type"></Highlight>,{" "}
                            <Highlight text="origin"></Highlight>, and{" "}
                            <Highlight text="flavor"></Highlight> enable you to
                            capture specific details about each coffee you
                            enjoy.
                        </span>
                    </div>
                </div>
                <div className="lg:mx-30 mx-5 pb-10 sm:mx-20 2xl:mx-52">
                    <div className="pb-10 font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl">
                        After setting up the{" "}
                        <Highlight text="coffee-diary.json"></Highlight> , enter
                        your <Highlight text="Github username"></Highlight> to
                        view your coffee diary SVG below, and visit your own
                        Coffee Diary website.
                    </div>
                    <div className="pb-10">
                        <div className="flex h-fit flex-wrap items-center">
                            <PencilLine color="#472713" size={28} />
                            <span className="ml-2 font-tilt-neon text-xl font-black text-serenade-950 md:text-2xl">
                                Github Username :
                            </span>
                            <input
                                type="text"
                                onChange={handleGithubNameChange}
                                className="ml-2 mt-2 border-b-4 border-dashed border-serenade-950 bg-coffee-white p-0.5 font-tilt-neon text-xl text-serenade-950 md:text-2xl"
                            />
                            {githubName ? (
                                <button
                                    className="ml-2 mt-2"
                                    onClick={handleGithubNameBtnClick}
                                >
                                    <ArrowRightCircle
                                        color="#472713"
                                        size={28}
                                    />
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                        {coffeeDiaryState ? (
                            <div className="mt-4 font-tilt-neon text-xl font-black tracking-widest text-red-700">
                                cannot find the{" "}
                                <Highlight text="coffee-diary.json"></Highlight>{" "}
                                file with this GitHub username.
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="grid w-full grid-cols-2 gap-x-10 rounded-xl bg-serenade-500 p-4">
                        <div className="order-2 col-span-2 flex h-full items-center p-8 lg:order-1 lg:col-span-1">
                            <div className="h-fit w-full">
                                {coffeeDiaryPage ? (
                                    <div className="pb-6 text-center">
                                        <a
                                            href={`https://coffee-diary.com/${githubName}`}
                                            title={`${githubName}'s coffee diary`}
                                            target="_blank"
                                            className="text-center font-tilt-neon text-xl font-black tracking-wider text-serenade-800 sm:text-2xl"
                                        >
                                            <HighlightWithClick
                                                text={`Look ${githubName} Coffee Diary`}
                                                underlineOffset={
                                                    "underline-offset-8"
                                                }
                                            ></HighlightWithClick>
                                        </a>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div className="text-center">
                                    <span className="font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl lg:leading-loose">
                                        Coffee Diary SVG can be seamlessly
                                        integrated into your GitHub README with{" "}
                                        <a
                                            href="https://github.com/marketplace/actions/coffee-diary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="coffee diary github readme action example"
                                        >
                                            <HighlightWithClick
                                                text="Github Action"
                                                underlineOffset={
                                                    "underline-offset-4"
                                                }
                                            ></HighlightWithClick>
                                        </a>
                                        , or displayed in any other desired
                                        location, allowing you to showcase your
                                        coffee journey.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 col-span-2 flex justify-center lg:order-2 lg:col-span-1">
                            <CoffeeDiary url={coffeeDiaryUrl}></CoffeeDiary>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
