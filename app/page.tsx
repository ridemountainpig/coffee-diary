import Image from "next/image";
import { DiaryLine } from "@/components/diary-line";
import { DiaryContent } from "@/components/diary-content";

export default function Home() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return (
        <>
            <div className="bg-coffee-white h-screen">
                <div className="flex justify-between">
                    <a
                        className="m-4"
                        href="https://coffee-diary.com/"
                        title="coffee diary"
                    >
                        <Image
                            src="/coffee-diary.png"
                            alt="coffee diary icon"
                            width={100}
                            height={100}
                        />
                    </a>
                    <a
                        className="m-4"
                        href="https://github.com/ridemountainpig/coffee-diary"
                        title="coffee diary github"
                        target="_blank"
                    >
                        <Image
                            src="/coffee-github.png"
                            alt="github icon"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
                <div className="flex justify-center items-center h-[60%] py-10">
                    <div>
                        <div className="flex justify-items-center gap-x-6">
                            <h1 className="hidden">COFFEE DIARY</h1>
                            <h2 className="text-8xl font-kodchasan font-black tracking-widest">
                                COFFEE
                            </h2>
                            <h2 className="text-8xl font-kodchasan font-black tracking-widest">
                                DIARY
                            </h2>
                        </div>
                        <div className="flex justify-center mt-14 gap-x-10">
                            <Image
                                src="/coffee-bag.svg"
                                alt="coffee bag"
                                width={64}
                                height={64}
                            />
                            <Image
                                src="/coffee-abrader.svg"
                                alt="coffee abrader"
                                width={64}
                                height={64}
                            />
                            <Image
                                src="/coffee-cup.svg"
                                alt="coffee cup"
                                width={64}
                                height={64}
                            />
                            <Image
                                src="/coffee-pot.svg"
                                alt="coffee pot"
                                width={64}
                                height={64}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-coffee-white flex justify-center w-full -mt-36 pb-36">
                <div className="bg-coffee-alabaster w-[75%] h-[38rem] rounded-3xl p-6">
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
                        padding=""
                        position="text-right"
                    ></DiaryContent>
                </div>
            </div>
        </>
    );
}
