interface AreaTitleProps {
    title: string;
}

export function AreaTitle({ title }: AreaTitleProps) {
    return (
        <>
            <div className="pb-10 font-kodchasan text-3xl font-black tracking-widest text-coffee-black lg:text-4xl">
                {title}
            </div>
        </>
    );
}
