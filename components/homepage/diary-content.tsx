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
            <div className="mx-4 h-fit items-center border-b-4 border-coffee-alabaster p-2 pb-6 font-pacifico text-2xl leading-loose tracking-widest text-coffee-brown lg:h-14 lg:border-white lg:pb-0 lg:text-3xl lg:leading-loose">
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
