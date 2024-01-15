import Image from "next/image";

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
                    <div className="text-3xl font-kodchasan font-black tracking-widest text-center">
                        Coffee Diary
                    </div>
                </div>
            </div>
            <div className="bg-coffee-brown h-fit flex justify-between text-serenade-800">
                <a
                    className="md:m-4"
                    href="https://github.com/ridemountainpig/coffee-diary"
                    title="coffee diary"
                >
                    <div className="text-base font-kodchasan font-black tracking-widest px-3 py-2 bg-serenade-500 rounded-xl">
                        star project
                    </div>
                </a>
                <a
                    className="md:m-4"
                    href="https://github.com/ridemountainpig"
                    title="coffee diary github"
                    target="_blank"
                >
                    <div className="text-base font-kodchasan font-black tracking-widest px-3 py-2 bg-serenade-500 rounded-xl">
                        power by ridemountainpig
                    </div>
                </a>
            </div>
        </>
    );
}
