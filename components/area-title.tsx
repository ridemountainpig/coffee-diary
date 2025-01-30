interface AreaTitleProps {
    title: string;
}

export function AreaTitle({ title }: AreaTitleProps) {
    return (
        <>
            <div className="font-kodchasan text-coffee-black pb-10 text-3xl font-black tracking-widest lg:text-4xl">
                {title}
            </div>
        </>
    );
}
