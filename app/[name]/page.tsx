import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CoffeeDiaryBoard } from "@/components/coffee-diary-board";
import { CoffeeDiaryName } from "@/components/coffee-diary-name";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}) {
    return {
        title: params.name + " | COFFEE DIARY",
        description: params.name + "'s COFFEE DIARY.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: params.name + "'s COFFEE DIARY",
            description:
                "See " + params.name + "'s COFFEE DIARY on COFFEE DIARY.",
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
                "See " + params.name + "'s COFFEE DIARY on COFFEE DIARY.",
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
                            <CoffeeDiaryName
                                name={params.name}
                            ></CoffeeDiaryName>
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
            <Footer name={params.name}></Footer>
        </>
    );
}
