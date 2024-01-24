"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AreaContent } from "@/components/area-content";
import { AreaTitle } from "@/components/area-title";
import { CoffeeDiary } from "@/components/coffee-diary";
import { ArrowRightCircle, FileJson2, PencilLine } from "lucide-react";
import { Highlight } from "@/components/highlight";
import { HighlightWithClick } from "@/components/highlight-with-click";
import { getCoffeeDiaryJson } from "@/lib/coffee-diary";

export function HowToUse() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const code = `
    {
        "${year}-${month}-${day}": {
            "bean-type": "GEISHA",
            "origin": "JAPAN",
            "flavor": "This exquisite Geisha 
            coffee offers a delicate balance of 
            floral aromas and fruity notes."
        },
        "year-month-day": {
            "bean-type": "bean type",
            "origin": "coffee origin",
            "flavor": "coffee flavor you tasted"
        }
    }
`;

    const code_xs = `
    {   
        "${year}-${month}-${day}": {
            "bean-type": "GEISHA",
            "origin": "JAPAN",
            "flavor": "This exquisite 
            Geisha coffee offers a 
            delicate balance of floral 
            aromas and fruity notes."
        },
        "year-month-day": {
            "bean-type": "bean type",
            "origin": "coffee origin",
            "flavor": "coffee flavor 
            you tasted"
        }
    }
`;

    const [githubName, setGithubName] = useState("");

    const handleGithubNameChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setGithubName(event.target.value);
    };

    const coffeeDiaryUrlBase = "https://coffee-diary.com/api/";
    const [coffeeDiaryUrl, setCoffeeDiaryUrl] = useState(
        coffeeDiaryUrlBase + "coffeeDiarySvg",
    );
    const [coffeeDiaryState, setCoffeeDiaryState] = useState(false);
    const [coffeeDiaryPage, setCoffeeDiaryPage] = useState(false);

    const handleGithubNameBtnClick = async () => {
        const response = await getCoffeeDiaryJson(githubName);
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="2xl:mx-52 lg:mx-30 mx-5 sm:mx-20 mt-10">
                    <AreaTitle title="How to use"></AreaTitle>
                    <div className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-4 leading-relaxed">
                        Add a <Highlight text="coffee-diary.json"></Highlight>{" "}
                        file to your <Highlight text="Github"></Highlight>{" "}
                        special repository root.
                    </div>
                    <AreaContent content="(the repo with your username)."></AreaContent>
                    <div className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest py-4">
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
                <div className="2xl:mx-52 lg:mx-30 mx-5 sm:mx-20 h-fit">
                    <div className="flex h-fit items-center text-black gap-x-2">
                        <FileJson2 />
                        <div className="text-lg font-tilt-neon font-black tracking-widest py-4">
                            coffee-diary.json
                        </div>
                    </div>
                </div>
                <div className="2xl:mx-52 lg:mx-30 mx-5 sm:mx-20 h-fit grid grid-cols-2 gap-x-10 pb-10">
                    <div className="col-span-2 xl:col-span-1 h-full">
                        <div className="bg-serenade-500 rounded-xl p-2 sm:p-4 2xl:p-10">
                            <pre className="text-lg font-tilt-neon font-black text-serenade-800 tracking-widest py-4 hidden sm:block selection:bg-serenade-600 selection:text-serenade-950">
                                {code}
                            </pre>
                            <pre className="text-base font-tilt-neon font-black text-serenade-800 tracking-widest py-4 sm:hidden selection:bg-serenade-600 selection:text-serenade-950">
                                {code_xs}
                            </pre>
                        </div>
                    </div>
                    <div className="col-span-2 xl:col-span-1 h-full flex items-center xl:mt-0 mt-4">
                        <span className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest leading-relaxed lg:leading-loose">
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
                <div className="2xl:mx-52 lg:mx-30 mx-5 sm:mx-20 pb-10">
                    <div className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-10 leading-relaxed">
                        After setting up the{" "}
                        <Highlight text="coffee-diary.json"></Highlight> , enter
                        your <Highlight text="Github username"></Highlight> to
                        view your coffee diary SVG below.
                    </div>
                    <div className="pb-10">
                        <div className="flex flex-wrap h-fit items-center">
                            <PencilLine color="#472713" size={28} />
                            <span className="text-serenade-950 font-tilt-neon font-black text-xl md:text-2xl ml-2">
                                Github Username :
                            </span>
                            <input
                                type="text"
                                onChange={handleGithubNameChange}
                                className="text-serenade-950 text-xl mt-2 md:text-2xl font-tilt-neon p-0.5 bg-coffee-white border-b-4 border-dashed border-serenade-950 ml-2"
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
                            <div className="text-xl font-tilt-neon font-black text-red-700 tracking-widest mt-4">
                                cannot find the{" "}
                                <Highlight text="coffee-diary.json"></Highlight>{" "}
                                file with this GitHub username.
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="w-full grid grid-cols-2 bg-serenade-500 rounded-xl p-4 gap-x-10">
                        <div className="p-8 col-span-2 lg:col-span-1 order-2 lg:order-1 flex h-full items-center">
                            <div className="w-full h-fit">
                                {coffeeDiaryPage ? (
                                    <div className="text-center pb-6">
                                        <a
                                            href={`https://coffee-diary.com/${githubName}`}
                                            title={`${githubName} coffee diary page`}
                                            target="_blank"
                                            className="text-xl sm:text-2xl font-tilt-neon font-black text-center text-serenade-800 tracking-wider"
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
                                    <span className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest leading-relaxed lg:leading-loose">
                                        Coffee Diary SVG can be seamlessly
                                        integrated into your GitHub README with{" "}
                                        <a
                                            href=""
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
                        <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 flex justify-center">
                            <CoffeeDiary url={coffeeDiaryUrl}></CoffeeDiary>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
