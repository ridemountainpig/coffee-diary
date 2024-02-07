"use client";

import { motion } from "framer-motion";

interface DiaryContentProps {
    content: string;
    padding: string;
    position: string;
}

export function DiaryContent({
    content,
    padding,
    position,
}: DiaryContentProps) {
    return (
        <>
            <div className="items-center pb-6 lg:pb-0 h-fit lg:h-14 border-b-4 border-coffee-alabaster lg:border-white text-coffee-brown leading-loose lg:leading-loose font-pacifico text-2xl lg:text-3xl tracking-widest mx-4 p-2">
                <p className={`${padding} ${position}`}>
                    {content.split(" ").map((text, index) => {
                        return (
                            <motion.span
                                key={index}
                                className="inline-block pr-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                            >
                                {text}
                            </motion.span>
                        );
                    })}
                </p>
            </div>
        </>
    );
}
