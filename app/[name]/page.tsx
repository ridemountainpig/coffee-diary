import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CoffeeDiaryBoard } from "@/components/coffee-diary-board";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}) {
    return {
        title: params.name + " | COFFEE DIARY",
        description:
            "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: params.name + "'s COFFEE DIARY",
            description:
                "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
            images: [
                {
                    url: "https://coffee-diary.com/coffee-diary.png",
                    width: 1200,
                    height: 630,
                    alt: params.name + "'s COFFEE DIARY",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: params.name + "'s COFFEE DIARY",
            description:
                "Begin crafting your coffee diary, chronicling the unique path you traverse with each cup.",
            creator: "@ridemountainpig",
            images: ["https://coffee-diary.com/coffee-diary.png"],
        },
    };
}

export default function UserPage({ params }: { params: { name: string } }) {
    return (
        <>
            <div className="bg-coffee-white h-screen">
                <Navbar text={`Coffee Diary`}></Navbar>
                <div className="flex justify-center items-center w-full h-[82%]">
                    <div className="w-[90%] h-full bg-serenade-500 rounded-2xl py-6">
                        <div className="flex w-full justify-center">
                            <span className="text-center text-coffee-brown font-pacifico text-xl lg:text-2xl tracking-widest p-4">
                                By {params.name}
                            </span>
                        </div>
                        <div className="flex w-full justify-center h-full">
                            <div className="h-[90%] w-[90%] overflow-y-auto no-scrollbar">
                                <CoffeeDiaryBoard
                                    name={params.name}
                                ></CoffeeDiaryBoard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
