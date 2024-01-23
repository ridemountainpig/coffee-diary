import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { BookImage, CalendarDays, Map, Loader2 } from "lucide-react";

interface CoffeeDiaryCardProps {
    date: string;
    beanType: string;
    origin: string;
    flavor: string;
    coffeeDay: number;
    name: string;
}

export function CoffeeDiaryCard({
    date,
    beanType,
    origin,
    flavor,
    coffeeDay,
    name,
}: CoffeeDiaryCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
    let dateFormat = new Date(year, month - 1, day);

    const formatter = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        weekday: "short",
        month: "long",
        year: "numeric",
    });
    let dateString = formatter.format(dateFormat).toString();

    return (
        <>
            <div
                className={`w-full h-fit py-4 my-2 border-dashed border-serenade-800 ${
                    coffeeDay == 1 ? "" : "border-b-4"
                }`}
            >
                <div className="lg:flex justify-between w-full">
                    <div className="lg:flex h-fit items-center">
                        <div className="text-serenade-950 font-tilt-neon font-semibold text-xl tracking-widest">
                            {dateString}
                        </div>
                        <div className="flex h-fit items-center">
                            <Image
                                src="/coffee-bean-dark-brown.svg"
                                alt="coffee bean"
                                width={24}
                                height={24}
                                className="lg:ml-2 -ml-1"
                            />
                            <div className="text-coffee-brown font-tilt-neon font-semibold text-xl tracking-widest">
                                {beanType}
                            </div>
                            <Map
                                size={20}
                                color="#967253"
                                strokeWidth="3"
                                className="ml-2"
                            />
                            <div className="text-coffee-brown font-tilt-neon font-semibold text-xl tracking-widest ml-1">
                                {origin}
                            </div>
                        </div>
                    </div>
                    <div className="flex h-fit items-center">
                        <CalendarDays
                            size={20}
                            color="#967253"
                            strokeWidth={3}
                            className="mr-1"
                        />
                        <div className="text-coffee-brown font-tilt-neon font-semibold text-xl tracking-widest ml-1">
                            {coffeeDay} Coffee Days
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-[#967253] font-tilt-neon font-bold text-xl tracking-widest">
                    <span className="text-serenade-950">Flavor: </span>
                    {flavor}
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button
                            className="mt-4 flex h-fit w-fit items-center py-1 px-1.5 rounded-lg border-3 border-[#967253]"
                            onClick={() => setIsLoading(true)}
                        >
                            <BookImage
                                size={20}
                                color="#967253"
                                strokeWidth={3}
                            />
                            <span className="ml-1 text-[#967253] font-tilt-neon font-bold text-base tracking-widest">
                                Diary Photo
                            </span>
                        </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Content className="w-[340px] h-[530px] flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-serenade-600">
                            {isLoading == true ? (
                                <div className="flex h-fit items-center">
                                    <Loader2
                                        className="animate-spin"
                                        size={20}
                                        color="#967253"
                                        strokeWidth={3}
                                    />
                                    <span className="ml-2 text-[#967253] font-tilt-neon font-bold text-base tracking-widest">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            <img
                                src={`https://coffee-diary.com/api/${name}?date=${date}`}
                                onLoad={() => setIsLoading(false)}
                            ></img>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </>
    );
}
