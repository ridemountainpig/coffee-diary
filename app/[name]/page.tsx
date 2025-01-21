import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CoffeeDiaryBoard } from "@/components/coffee-diary/coffee-diary-board";
import { CoffeeDiaryName } from "@/components/coffee-diary/coffee-diary-name";

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
            <div className="h-fit bg-coffee-white">
                <Navbar text={`Coffee Diary`}></Navbar>
                <div className="flex h-[55rem] w-full items-center justify-center">
                    <div className="h-[92%] w-[90%] rounded-2xl bg-serenade-500 py-6">
                        <div className="flex w-full justify-center">
                            <CoffeeDiaryName
                                name={params.name}
                            ></CoffeeDiaryName>
                        </div>
                        <div className="flex h-full w-full justify-center">
                            <div className="no-scrollbar h-[90%] w-[90%] overflow-y-auto">
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
