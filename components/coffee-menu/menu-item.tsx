import { MousePointerClick } from "lucide-react";

interface MenuItemProps {
    item: string;
    price: string;
}

export function MenuItem({ item, price }: MenuItemProps) {
    return (
        <div className="flex items-center py-1">
            <span className="font-kodchasan text-lg font-black tracking-widest text-serenade-900">
                {item}
            </span>
            <div className="mx-4 flex-grow border-t-3 border-dotted border-serenade-900"></div>
            <span className="text-md font-kodchasan font-black tracking-widest text-serenade-900">
                {"$" + price}
            </span>
        </div>
    );
}
