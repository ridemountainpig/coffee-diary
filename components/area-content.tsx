interface AreaContentProps {
    content: string;
}

export function AreaContent({ content }: AreaContentProps) {
    return (
        <>
            <div className="font-tilt-neon text-serenade-800 pb-4 text-xl leading-relaxed font-black tracking-widest sm:text-2xl lg:leading-loose">
                {content}
            </div>
        </>
    );
}
