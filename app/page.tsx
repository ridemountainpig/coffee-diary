import { Navbar } from "@/components/navbar";
import { CoffeeNavbar } from "@/components/homepage/coffee-navbar";
import { Banner } from "@/components/homepage/banner";
import { Diary } from "@/components/homepage/diary";

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
            <div className="bg-coffee-white flex justify-center w-full -mt-36 pb-36">
                <Diary></Diary>
            </div>
        </>
    );
}
