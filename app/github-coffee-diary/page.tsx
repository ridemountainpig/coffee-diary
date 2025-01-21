import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HowToUse } from "@/components/page/how-to-use";

export default function GithubCoffeeDiary() {
    return (
        <div className="h-fit bg-coffee-white">
            <Navbar text="Github Coffee Diary"></Navbar>
            <HowToUse></HowToUse>
            <Footer></Footer>
        </div>
    );
}
