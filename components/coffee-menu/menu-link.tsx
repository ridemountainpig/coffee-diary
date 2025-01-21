import { MousePointerClick } from "lucide-react";

interface MenuLinkProps {
    item: string;
    link: string;
}

export function MenuLink({ item, link }: MenuLinkProps) {
    return (
        <a
            className="flex items-center rounded-lg py-1 duration-300 hover:bg-serenade-600 xl:px-2"
            href={link}
        >
            <span className="font-kodchasan text-lg font-black tracking-widest text-serenade-900">
                {item}
            </span>
            <div className="mx-4 flex-grow border-t-3 border-dotted border-serenade-900"></div>
            <MousePointerClick color="#472713" />
        </a>
    );
}
