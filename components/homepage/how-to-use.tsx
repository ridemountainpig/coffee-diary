import { AreaContent } from "@/components/area-content";
import { AreaTitle } from "@/components/area-title";
import { CoffeeDiary } from "@/components/homepage/coffee-diary";
import { FileJson2 } from "lucide-react";
import { Highlight } from "../highlight";

export function HowToUse() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const code = `
    {
        "${year}-${month}-${day}": {
            "bean-type": "GEISHA",
            "origin": "JAPAN",
            "flavor": "This exquisite Geisha coffee 
            offers a delicate balance of floral aromas 
            and fruity notes."
        },
        "year-month-day": {
        "bean-type": "bean type",
        "origin": "coffee origin",
        "flavor": "coffee flavor you tasted"
        }
    }
`;

    return (
        <>
            <div className="mx-52 mt-10">
                <AreaTitle title="How to use"></AreaTitle>
                <div className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-4">
                    Add a <Highlight text="coffee-diary.json"></Highlight> file
                    to your <Highlight text="Github"></Highlight> special
                    repository root.
                </div>
                <AreaContent content="(the repo with your username)."></AreaContent>
                <div className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest py-4">
                    <a
                        href="https://github.com/ridemountainpig/coffee-diary/blob/main/coffee-diary.json"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="coffee diary json example"
                    >
                        <div className="hover:underline">
                            <Highlight text="see the example"></Highlight>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mx-52 h-fit">
                <div className="flex h-fit items-center text-black gap-x-2">
                    <FileJson2 />
                    <div className="text-lg font-tilt-neon font-black tracking-widest py-4">
                        coffee-diary.json
                    </div>
                </div>
            </div>
            <div className="mx-52 h-fit grid grid-cols-2 gap-x-10 pb-10">
                <div className="col-span-1 h-full">
                    <div className="bg-serenade-500 rounded-xl p-10">
                        <pre className="text-lg font-tilt-neon font-black text-serenade-800 tracking-widest py-4">
                            {code}
                        </pre>
                    </div>
                </div>
                <div className="col-span-1 h-full flex items-center">
                    <span className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest leading-loose">
                        In this JSON configuration, each coffee diary entry is
                        encapsulated as an object keyed by the date in a{" "}
                        <Highlight text="year-month-day"></Highlight> format,
                        allowing you to document your coffee experiences on a
                        daily basis. The entries for{" "}
                        <Highlight text="bean-type"></Highlight>,{" "}
                        <Highlight text="origin"></Highlight>, and{" "}
                        <Highlight text="flavor"></Highlight> enable you to
                        capture specific details about each coffee you enjoy.
                    </span>
                </div>
            </div>
            <div className="mx-52 pb-10">
                <div className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-10">
                    After setting up the{" "}
                    <Highlight text="coffee-diary.json"></Highlight> , you can
                    get your coffee diary SVG.
                </div>
                <div className="w-full grid grid-cols-2 bg-serenade-500 rounded-xl p-4 gap-x-10">
                    <div className="p-8 col-span-1 flex h-full items-center">
                        <span className="text-2xl font-tilt-neon font-black text-center text-serenade-800 tracking-widest leading-loose">
                            Coffee Diary SVG can be seamlessly integrated into
                            your GitHub README, or displayed in any other
                            desired location, allowing you to showcase your
                            coffee journey.
                        </span>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <CoffeeDiary></CoffeeDiary>
                    </div>
                </div>
            </div>
        </>
    );
}
