interface AreaContentProps {
    content: string;
}

export function AreaContent({ content }: AreaContentProps) {
    return (
        <>
            <div className="text-xl sm:text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-4 leading-relaxed lg:leading-loose">
                {content}
            </div>
        </>
    );
}
