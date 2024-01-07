import Image from "next/image";

export function Navbar() {
    return (
        <>
            <div className="flex justify-between">
                <a
                    className="md:m-4"
                    href="https://coffee-diary.com/"
                    title="coffee diary"
                >
                    <Image
                        className="hidden md:block"
                        src="/coffee-diary.png"
                        alt="coffee diary icon"
                        width={100}
                        height={100}
                    />
                    <Image
                        className="block md:hidden"
                        src="/coffee-diary.png"
                        alt="coffee diary icon"
                        width={75}
                        height={75}
                    />
                </a>
                <a
                    className="md:m-4"
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
        </>
    );
}
