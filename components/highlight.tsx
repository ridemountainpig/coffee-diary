interface HighlightProps {
    text: string;
}

export function Highlight({ text }: HighlightProps) {
    return (
        <>
            <span className="text-serenade-950 lg:bg-serenade-500 lg:text-serenade-800 rounded-xl lg:px-3 lg:py-1">
                {text}
            </span>
        </>
    );
}
