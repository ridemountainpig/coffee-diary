import Image from "next/image";
import { MousePointerClick } from "lucide-react";

interface FooterProps {
    name?: string;
}

export function Footer({ name }: FooterProps) {
    return (
        <>
            <div className="flex h-72 items-center bg-coffee-brown">
                <div className="h-fit w-full">
                    <div className="flex justify-center">
                        <Image
                            src="/coffee-diary.png"
                            alt="coffee diary icon"
                            width={125}
                            height={125}
                        />
                    </div>
                    <div className="text-center font-kodchasan text-3xl font-black tracking-widest text-coffee-black">
                        Coffee Diary
                    </div>
                    <div className="mt-4 flex justify-center text-center">
                        <div className="w-fit">
                            {name ? (
                                <div className="flex h-fit items-center justify-center text-center font-kodchasan text-sm font-black tracking-widest text-serenade-500 sm:text-base">
                                    {`${name}'s Coffee Diary`}
                                </div>
                            ) : (
                                <a
                                    href={`https://coffee-diary.com/ridemountainpig`}
                                    title={`ridemountainpig's coffee diary`}
                                    target="_blank"
                                    className="flex h-fit items-center justify-center text-center font-kodchasan text-sm font-black tracking-widest text-serenade-500 sm:text-base"
                                >
                                    {"Ridemountainpig's Coffee Diary"}
                                    <MousePointerClick
                                        color="#faf1e4"
                                        className="ml-2"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-fit justify-between bg-coffee-brown text-serenade-800">
                <a
                    className="m-4"
                    href="https://github.com/ridemountainpig/coffee-diary"
                    title="coffee diary"
                >
                    <div className="rounded-xl bg-serenade-500 px-3 py-2 font-kodchasan text-xs font-black tracking-widest">
                        star project
                    </div>
                </a>
                <a
                    className="m-4"
                    href="https://github.com/ridemountainpig"
                    title="coffee diary github"
                    target="_blank"
                >
                    <div className="rounded-xl bg-serenade-500 px-3 py-2 font-kodchasan text-xs font-black tracking-widest">
                        by ridemountainpig
                    </div>
                </a>
            </div>
        </>
    );
}
