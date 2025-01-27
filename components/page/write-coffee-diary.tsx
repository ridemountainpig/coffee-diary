"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MousePointerClick, FileWarning } from "lucide-react";
import { AreaTitle } from "@/components/area-title";
import { DiaryInput } from "@/components/write-coffee-diary/diary-input";

export function WriteCoffeeDiary() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [beanType, setBeanType] = useState("");
    const [origin, setOrigin] = useState("");
    const [flavor, setFlavor] = useState("");
    const [alert, setAlert] = useState(false);

    const handleGenerateDiary = () => {
        if (
            name === "" ||
            date === "" ||
            beanType === "" ||
            origin === "" ||
            flavor === ""
        ) {
            setAlert(true);
            return;
        }
        setAlert(false);

        const diaryDataObj = {
            name: name,
            date: date,
            beanType: beanType,
            origin: origin,
            flavor: flavor,
        };

        const diaryData = JSON.stringify(diaryDataObj);

        const encodedData = Buffer.from(diaryData).toString("base64");

        window.location.href = `/diary/${encodedData}`;
    };

    return (
        <motion.div
            className="pb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
        >
            <div className="lg:mx-30 mx-5 mt-2 sm:mx-20 2xl:mx-52">
                <AreaTitle title="Write Coffee Diary"></AreaTitle>
                <div className="pb-10 font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl">
                    Take a moment to write in your coffee diary today, capturing
                    the essence of your unique coffee journey. Reflect on the
                    flavors, aromas, and experiences that each cup brings, along
                    with the memories and feelings associated with your coffee
                    adventures.
                </div>
                <div className="rounded-xl bg-serenade-500 p-4 py-8 shadow-xl shadow-coffee-brown lg:p-8">
                    <DiaryInput
                        inputTitle="Your Name"
                        setInputValue={setName}
                    ></DiaryInput>
                    <div className="py-4">
                        <span className="font-tilt-neon text-xl font-black text-serenade-950 md:text-2xl">
                            Date :
                        </span>
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-2 w-full border-b-4 border-dashed border-serenade-950 bg-serenade-500 p-0.5 font-tilt-neon text-xl text-serenade-950 md:text-2xl"
                        />
                    </div>
                    <DiaryInput
                        inputTitle="Bean Type"
                        setInputValue={setBeanType}
                    ></DiaryInput>
                    <DiaryInput
                        inputTitle="Origin"
                        setInputValue={setOrigin}
                    ></DiaryInput>
                    <DiaryInput
                        inputTitle="Flavor"
                        setInputValue={setFlavor}
                    ></DiaryInput>
                    <div className="flex w-full justify-center pt-6">
                        <button
                            className="flex items-center gap-x-2 rounded-xl bg-serenade-950 bg-opacity-85 p-4"
                            onClick={handleGenerateDiary}
                        >
                            <span className="text-md font-tilt-neon font-black tracking-widest text-serenade-500 sm:text-xl">
                                Generate Diary
                            </span>
                            <MousePointerClick className="text-serenade-500" />
                        </button>
                    </div>
                    <div
                        className={`flex w-full justify-center gap-x-2 pt-6 text-center ${alert ? "" : "hidden"}`}
                    >
                        <FileWarning className="text-serenade-950" />
                        <span className="text-md font-tilt-neon font-black tracking-widest text-serenade-950 sm:text-xl">
                            Please fill out the entire diary
                        </span>
                        <FileWarning className="text-serenade-950" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
