interface HighlightProps {
    text: string;
}

export function Highlight({ text }: HighlightProps) {
    return (
        <>
            <span className="rounded-xl text-serenade-950 lg:bg-serenade-500 lg:px-3 lg:py-1 lg:text-serenade-800">
                {text}
            </span>
        </>
    );
}
