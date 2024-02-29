import Image from "next/image";
import { CalendarDays, Map } from "lucide-react";
import { CoffeeDiaryDialog } from "@/components/coffee-diary-dialog";

interface CoffeeDiaryCardProps {
    date: string;
    beanType: string;
    origin: string;
    flavor: string;
    coffeeDay: number;
    name: string;
}

export function CoffeeDiaryCard({
    date,
    beanType,
    origin,
    flavor,
    coffeeDay,
    name,
}: CoffeeDiaryCardProps) {
    const [year, month, day] = date.split("-").map((num) => parseInt(num, 10));
    let dateFormat = new Date(year, month - 1, day);

    const formatter = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        weekday: "short",
        month: "long",
        year: "numeric",
    });
    let dateString = formatter.format(dateFormat).toString();

    return (
        <>
            <div
                className={`my-2 h-fit w-full border-dashed border-serenade-800 py-4 ${
                    coffeeDay == 1 ? "" : "border-b-4"
                }`}
            >
                <div className="w-full justify-between lg:flex">
                    <div className="h-fit items-center lg:flex">
                        <div className="font-tilt-neon text-xl font-semibold tracking-widest text-serenade-950">
                            {dateString}
                        </div>
                        <div className="flex h-fit items-center">
                            <Image
                                src="/coffee-bean-dark-brown.svg"
                                alt="coffee bean"
                                width={24}
                                height={24}
                                className="-ml-1 lg:ml-2"
                            />
                            <div className="font-tilt-neon text-xl font-semibold tracking-widest text-coffee-brown">
                                {beanType}
                            </div>
                            <Map
                                size={20}
                                color="#967253"
                                strokeWidth="3"
                                className="ml-2"
                            />
                            <div className="ml-1 font-tilt-neon text-xl font-semibold tracking-widest text-coffee-brown">
                                {origin}
                            </div>
                        </div>
                    </div>
                    <div className="flex h-fit items-center">
                        <CalendarDays
                            size={20}
                            color="#967253"
                            strokeWidth={3}
                            className="mr-1"
                        />
                        <div className="ml-1 font-tilt-neon text-xl font-semibold tracking-widest text-coffee-brown">
                            {coffeeDay} Coffee Days
                        </div>
                    </div>
                </div>
                <div className="mt-4 font-tilt-neon text-xl font-bold tracking-widest text-[#967253]">
                    <span className="text-serenade-950">Flavor: </span>
                    {flavor}
                </div>
                <CoffeeDiaryDialog name={name} date={date} />
            </div>
        </>
    );
}
