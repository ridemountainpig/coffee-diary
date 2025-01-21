interface MenuCategoryProps {
    category: string;
}

export function MenuCategory({ category }: MenuCategoryProps) {
    return (
        <div className="flex w-full justify-center">
            <span className="font-kodchasan text-2xl font-black tracking-widest text-coffee-brown">
                {category}
            </span>
        </div>
    );
}
