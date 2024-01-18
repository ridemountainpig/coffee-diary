interface HighlightProps {
    text: string;
}

export function Highlight({ text }: HighlightProps) {
    return (
        <>
            <span className="lg:px-3 lg:py-1 lg:bg-serenade-500 rounded-xl lg:text-serenade-800 text-serenade-950">
                {text}
            </span>
        </>
    );
}
