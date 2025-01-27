interface MenuCategoryProps {
    category: string;
}

export function MenuCategory({ category }: MenuCategoryProps) {
    return (
        <div className="flex w-full justify-center pt-4 xl:pt-0">
            <span className="font-kodchasan text-2xl font-black tracking-widest text-coffee-brown">
                {category}
            </span>
        </div>
    );
}
