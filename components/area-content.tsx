"use client";

import { motion } from "framer-motion";

interface AreaContentProps {
    content: string;
}

export function AreaContent({ content }: AreaContentProps) {
    return (
        <>
            <div className="text-2xl font-tilt-neon font-black text-serenade-800 tracking-widest pb-4">
                {content}
            </div>
        </>
    );
}
