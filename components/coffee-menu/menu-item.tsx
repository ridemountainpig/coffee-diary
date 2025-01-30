import { MousePointerClick } from "lucide-react";

interface MenuItemProps {
    item: string;
    price: string;
}

export function MenuItem({ item, price }: MenuItemProps) {
    return (
        <div className="flex items-center py-1">
            <span className="text-serenade-90 font-kodchasan px-1 text-lg font-black tracking-widest">
                {item}
            </span>
            <div className="border-serenade-900 mx-4 grow border-t-3 border-dotted"></div>
            <span className="text-md font-kodchasan text-serenade-900 font-black tracking-widest">
                {"$" + price}
            </span>
        </div>
    );
}
