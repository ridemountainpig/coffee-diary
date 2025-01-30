import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WriteCoffeeDiary as WriteCoffeeDiaryComponent } from "@/components/page/write-coffee-diary";

export async function generateMetadata() {
    return {
        title: "Write Coffee Diary",
        description: "Write your coffee diary on Write.",
        openGraph: {
            type: "website",
            url: "https://coffee-diary.com/",
            title: "Capture your coffee journey in your diary, noting the unique flavors, aromas, and personal memories each cup evokes.",
            description: `Write your coffee diary.`,
            images: [
                {
                    url: "https://coffee-diary.com/coffee-diary.png",
                    width: 1200,
                    height: 630,
                    alt: "Write Coffee Diary",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Write Coffee Diary",
            description:
                "Capture your coffee journey in your diary, noting the unique flavors, aromas, and personal memories each cup evokes.",
            creator: "@ridemountainpig",
            images: ["https://coffee-diary.com/coffee-diary.png"],
        },
    };
}

export default function WriteCoffeeDiary() {
    return (
        <div className="bg-coffee-white h-fit">
            <Navbar text="Coffee Diary"></Navbar>
            <WriteCoffeeDiaryComponent></WriteCoffeeDiaryComponent>
            <Footer></Footer>
        </div>
    );
}
