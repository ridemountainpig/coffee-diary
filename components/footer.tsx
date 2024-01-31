import Image from "next/image";
import { MousePointerClick } from "lucide-react";

export function Footer() {
    return (
        <>
            <div className="bg-coffee-brown h-72 flex items-center">
                <div className="w-full h-fit">
                    <div className="flex justify-center">
                        <Image
                            src="/coffee-diary.png"
                            alt="coffee diary icon"
                            width={125}
                            height={125}
                        />
                    </div>
                    <div className="text-3xl font-kodchasan font-black tracking-widest text-center text-coffee-black">
                        Coffee Diary
                    </div>
                    <div className="text-center mt-4 flex justify-center">
                        <div className="w-fit">
                            <a
                                href={`https://coffee-diary.com/ridemountainpig`}
                                title={`ridemountainpig's coffee diary`}
                                target="_blank"
                                className="text-sm sm:text-base font-kodchasan font-black text-center tracking-widest flex h-fit justify-center items-center text-serenade-500"
                            >
                                {"Ridemountainpig's Coffee Diary"}
                                <MousePointerClick
                                    color="#faf1e4"
                                    className="ml-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-coffee-brown h-fit flex justify-between text-serenade-800">
                <a
                    className="m-4"
                    href="https://github.com/ridemountainpig/coffee-diary"
                    title="coffee diary"
                >
                    <div className="text-xs font-kodchasan font-black tracking-widest px-3 py-2 bg-serenade-500 rounded-xl">
                        star project
                    </div>
                </a>
                <a
                    className="m-4"
                    href="https://github.com/ridemountainpig"
                    title="coffee diary github"
                    target="_blank"
                >
                    <div className="text-xs font-kodchasan font-black tracking-widest px-3 py-2 bg-serenade-500 rounded-xl">
                        by ridemountainpig
                    </div>
                </a>
            </div>
        </>
    );
}
