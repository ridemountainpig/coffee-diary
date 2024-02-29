import { Navbar } from "@/components/navbar";
import { CoffeeNavbar } from "@/components/homepage/coffee-navbar";
import { Banner } from "@/components/homepage/banner";
import { Diary } from "@/components/homepage/diary";
import { Footer } from "@/components/footer";
import { WhatIsCoffeeDiary } from "@/components/homepage/what-is-coffee-diary";
import { HowToUse } from "@/components/homepage/how-to-use";
import DynamicDock from "dynamic-dock";

export default function Home() {
    return (
        <>
            <div className="h-screen bg-coffee-white">
                <Navbar></Navbar>
                <div className="flex h-[65%] justify-center">
                    <div className="block h-fit lg:hidden">
                        <Banner></Banner>
                        <CoffeeNavbar></CoffeeNavbar>
                    </div>
                    <div className="hidden h-fit lg:block">
                        <Banner></Banner>
                        <DynamicDock gapX={0} imageWidth={64}>
                            <CoffeeNavbar></CoffeeNavbar>
                        </DynamicDock>
                    </div>
                </div>
            </div>
            <div className="-mt-36 flex w-full justify-center bg-coffee-white pb-10">
                <Diary></Diary>
            </div>
            <div className="w-full bg-coffee-white">
                <WhatIsCoffeeDiary></WhatIsCoffeeDiary>
                <HowToUse></HowToUse>
            </div>
            <Footer></Footer>
        </>
    );
}
