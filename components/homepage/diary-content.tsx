interface DiaryContentProps {
    content: string;
    padding: string;
    position: string;
}

export function DiaryContent({
    content,
    padding,
    position,
}: DiaryContentProps) {
    return (
        <>
            <div className="items-center h-14 border-b-4 border-white text-coffee-brown leading-loose font-pacifico text-3xl tracking-widest mx-4 p-2">
                <div className={`${padding} ${position}`}>{content}</div>
            </div>
        </>
    );
}
