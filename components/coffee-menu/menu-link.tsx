import { MousePointerClick } from "lucide-react";

interface MenuLinkProps {
    item: string;
    link: string;
}

export function MenuLink({ item, link }: MenuLinkProps) {
    return (
        <a
            className="hover:bg-serenade-600 flex items-center rounded-lg px-1 py-1 duration-300 xl:px-2"
            href={link}
        >
            <span className="font-kodchasan text-serenade-900 text-lg font-black tracking-widest">
                {item}
            </span>
            <div className="border-serenade-900 mx-4 grow border-t-3 border-dotted"></div>
            <MousePointerClick color="#472713" />
        </a>
    );
}
