import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Diary } from "@/components/page/diary";

export async function generateMetadata({
    params,
}: {
    params: { encodedData: string };
}) {
    const diaryData = decodeData(params.encodedData);

    return {
        title: diaryData.name + " | COFFEE DIARY",
        description: diaryData.name + "'s COFFEE DIARY.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: diaryData.name + "'s COFFEE DIARY",
            description: `See ${diaryData.name}'s COFFEE DIARY on COFFEE DIARY.`,
            images: [
                {
                    url: `https://coffee-diary.zeabur.app/api/og/${diaryData.name}`,
                    width: 1200,
                    height: 630,
                    alt: diaryData.name + "'s COFFEE DIARY",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: diaryData.name + "'s COFFEE DIARY",
            description: `See ${diaryData.name}'s COFFEE DIARY on COFFEE DIARY.`,
            creator: "@ridemountainpig",
            images: [
                `https://coffee-diary.zeabur.app/api/og/${diaryData.name}`,
            ],
        },
    };
}

function decodeData(encodedData: string): {
    name: string;
    date: string;
    beanType: string;
    origin: string;
    flavor: string;
} {
    try {
        const decodedString = Buffer.from(encodedData, "base64").toString(
            "utf-8",
        );
        return JSON.parse(`{${decodedString.split("{")[1].split("}")[0]}}`);
    } catch (error) {
        return {
            name: "No Name",
            date: "No Date",
            beanType: "No Bean Type",
            origin: "No Origin",
            flavor: "No Flavor",
        };
    }
}

export default function DiaryPage({
    params,
}: {
    params: { encodedData: string };
}) {
    const diaryData = decodeData(params.encodedData);

    return (
        <div className="h-fit bg-coffee-white">
            <Navbar text={`Coffee Diary`}></Navbar>
            <Diary
                encodedData={params.encodedData}
                name={diaryData.name}
                date={diaryData.date}
                beanType={diaryData.beanType}
                origin={diaryData.origin}
                flavor={diaryData.flavor}
            ></Diary>
            <Footer name={diaryData.name}></Footer>
        </div>
    );
}
