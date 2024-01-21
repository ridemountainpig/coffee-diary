"use client";

interface CoffeeDiaryProps {
    url: string;
}

export const CoffeeDiary = ({ url }: CoffeeDiaryProps) => {
    return (
        <>
            <img src={url} alt="coffee diary svg" />
        </>
    );
};
