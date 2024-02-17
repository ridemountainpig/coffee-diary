interface AreaTitleProps {
    title: string;
}

export function AreaTitle({ title }: AreaTitleProps) {
    return (
        <>
            <div className="text-3xl lg:text-4xl font-kodchasan font-black tracking-widest pb-10 text-coffee-black">
                {title}
            </div>
        </>
    );
}
