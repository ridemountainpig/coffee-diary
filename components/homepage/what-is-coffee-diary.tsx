import { CoffeeStep } from "@/components/coffee-step";
import { AreaContent } from "@/components/area-content";
import { Highlight } from "../highlight";

export function WhatIsCoffeeDiary() {
    return (
        <>
            <div className="mx-52">
                <div className="flex h-fit items-center gap-x-6 pb-4">
                    <div className="text-4xl font-kodchasan font-black tracking-widest">
                        What is Coffee Diary
                    </div>
                    <CoffeeStep />
                </div>
                <div className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-4">
                    <Highlight
                        text="Coffee Diary: Your Personalized Coffee Journal,
                        Visualized with SVG"
                    ></Highlight>
                </div>
                <AreaContent content="Coffee Diary is an innovative project that transforms your coffee experiences into visually appealing SVG graphics, all managed through a simple JSON file on GitHub. This project offers coffee enthusiasts a unique way to document their coffee journey without the hassle of traditional journaling methods."></AreaContent>
            </div>
        </>
    );
}
