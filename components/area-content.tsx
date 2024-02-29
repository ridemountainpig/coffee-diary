interface AreaContentProps {
    content: string;
}

export function AreaContent({ content }: AreaContentProps) {
    return (
        <>
            <div className="pb-4 font-tilt-neon text-xl font-black leading-relaxed tracking-widest text-serenade-800 sm:text-2xl lg:leading-loose">
                {content}
            </div>
        </>
    );
}
