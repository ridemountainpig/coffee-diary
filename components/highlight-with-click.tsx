import { MousePointerClick } from "lucide-react";

interface HighlightWithClickProps {
    text: string;
    underlineOffset: string;
}

export function HighlightWithClick({
    text,
    underlineOffset,
}: HighlightWithClickProps) {
    return (
        <>
            <div className="inline-block">
                <div
                    className={`text-serenade-950 decoration-serenade-950 flex h-fit items-center underline decoration-dashed decoration-4 ${underlineOffset}`}
                >
                    {text}
                    <MousePointerClick color="#472713" />
                </div>
            </div>
        </>
    );
}
