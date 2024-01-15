interface HighlightProps {
    text: string;
}

export function Highlight({ text }: HighlightProps) {
    return (
        <>
            <span className="px-3 py-1 bg-serenade-500 rounded-xl">{text}</span>
        </>
    );
}
