import { Navbar } from "@/components/navbar";
import { CoffeeNavbar } from "@/components/homepage/coffee-navbar";
import { Banner } from "@/components/homepage/banner";
import { Diary } from "@/components/homepage/diary";
import { Footer } from "@/components/footer";
import { WhatIsCoffeeDiary } from "@/components/homepage/what-is-coffee-diary";
import { CoffeeMenu } from "@/components/homepage/coffee-menu";
import DynamicDock from "dynamic-dock";

export default function Home() {
    return (
        <>
            <div className="bg-coffee-white h-fit">
                <Navbar></Navbar>
                <div className="flex h-fit justify-center">
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
            <div className="bg-coffee-white flex w-full justify-center pt-20 pb-10">
                <Diary></Diary>
            </div>
            <div className="bg-coffee-white w-full">
                <WhatIsCoffeeDiary></WhatIsCoffeeDiary>
            </div>
            <div className="bg-coffee-white flex w-full justify-center pt-6 pb-16">
                <CoffeeMenu></CoffeeMenu>
            </div>
            <Footer></Footer>
        </>
    );
}
