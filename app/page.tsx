import { Navbar } from "@/components/navbar";
import { CoffeeNavbar } from "@/components/homepage/coffee-navbar";
import { Banner } from "@/components/homepage/banner";
import { Diary } from "@/components/homepage/diary";
import { Footer } from "@/components/footer";
import { WhatIsCoffeeDiary } from "@/components/homepage/what-is-coffee-diary";
import { HowToUse } from "@/components/homepage/how-to-use";

export default function Home() {
    return (
        <>
            <div className="bg-coffee-white h-screen">
                <Navbar></Navbar>
                <div className="flex justify-center h-[65%]">
                    <div>
                        <Banner></Banner>
                        <CoffeeNavbar></CoffeeNavbar>
                    </div>
                </div>
            </div>
            <div className="bg-coffee-white flex justify-center w-full -mt-36 pb-10">
                <Diary></Diary>
            </div>
            <div className="bg-coffee-white w-full">
                <WhatIsCoffeeDiary></WhatIsCoffeeDiary>
                <HowToUse></HowToUse>
            </div>
            <Footer></Footer>
        </>
    );
}
