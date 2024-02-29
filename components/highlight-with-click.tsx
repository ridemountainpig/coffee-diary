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
                    className={`flex h-fit items-center text-serenade-950 underline decoration-serenade-950 decoration-dashed decoration-4 ${underlineOffset}`}
                >
                    {text}
                    <MousePointerClick color="#472713" />
                </div>
            </div>
        </>
    );
}
