import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WriteCoffeeDiary as WriteCoffeeDiaryComponent } from "@/components/page/write-coffee-diary";

export default function WriteCoffeeDiary() {
    return (
        <div className="h-fit bg-coffee-white">
            <Navbar text="Coffee Diary"></Navbar>
            <WriteCoffeeDiaryComponent></WriteCoffeeDiaryComponent>
            <Footer></Footer>
        </div>
    );
}
