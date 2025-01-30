import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HowToUse } from "@/components/page/how-to-use";

export async function generateMetadata() {
    return {
        title: "Github Coffee Diary",
        description: "Write your coffee diary on Github.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: "Github Coffee Diary",
            description: `Write your coffee diary on Github.`,
            images: [
                {
                    url: "https://coffee-diary.com/coffee-diary.png",
                    width: 1200,
                    height: 630,
                    alt: "Github Coffee Diary",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Github Coffee Diary",
            description: "Write your coffee diary on Github.",
            creator: "@ridemountainpig",
            images: ["https://coffee-diary.com/coffee-diary.png"],
        },
    };
}

export default function GithubCoffeeDiary() {
    return (
        <div className="bg-coffee-white h-fit">
            <Navbar text="Github Coffee Diary"></Navbar>
            <HowToUse></HowToUse>
            <Footer></Footer>
        </div>
    );
}
