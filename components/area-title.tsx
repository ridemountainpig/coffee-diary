"use client";

import { motion } from "framer-motion";

interface AreaTitleProps {
    title: string;
}

export function AreaTitle({ title }: AreaTitleProps) {
    return (
        <>
            <div className="text-3xl lg:text-4xl font-kodchasan font-black tracking-widest pb-10">
                {title}
            </div>
        </>
    );
}
