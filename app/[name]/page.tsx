import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CoffeeDiaryBoard } from "@/components/coffee-diary/coffee-diary-board";
import { CoffeeDiaryName } from "@/components/coffee-diary/coffee-diary-name";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return {
        title: name + " | COFFEE DIARY",
        description: name + "'s COFFEE DIARY.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: name + "'s COFFEE DIARY",
            description: "See " + name + "'s COFFEE DIARY on COFFEE DIARY.",
            images: [
                {
                    url: `https://coffee-diary-fastapi.zeabur.app/og/${name}`,
                    width: 1200,
                    height: 630,
                    alt: name + "'s COFFEE DIARY",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: name + "'s COFFEE DIARY",
            description: "See " + name + "'s COFFEE DIARY on COFFEE DIARY.",
            creator: "@ridemountainpig",
            images: [`https://coffee-diary-fastapi.zeabur.app/og/${name}`],
        },
    };
}

export default async function UserPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    return (
        <>
            <div className="bg-coffee-white h-fit">
                <Navbar text={`Coffee Diary`}></Navbar>
                <div className="flex h-220 w-full items-center justify-center">
                    <div className="bg-serenade-500 h-[92%] w-[90%] rounded-2xl py-6">
                        <div className="flex w-full justify-center">
                            <CoffeeDiaryName name={name}></CoffeeDiaryName>
                        </div>
                        <div className="flex h-full w-full justify-center">
                            <div className="no-scrollbar h-[90%] w-[90%] overflow-y-auto">
                                <CoffeeDiaryBoard
                                    name={name}
                                ></CoffeeDiaryBoard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer name={name}></Footer>
        </>
    );
}
