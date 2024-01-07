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
            <div className="items-center pb-6 lg:pb-0 h-fit lg:h-14 border-b-4 border-coffee-alabaster lg:border-white text-coffee-brown leading-loose lg:leading-loose font-pacifico text-2xl lg:text-3xl tracking-widest mx-4 p-2">
                <p className={`${padding} ${position}`}>{content}</p>
            </div>
        </>
    );
}
