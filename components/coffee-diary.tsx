"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

interface CoffeeDiaryProps {
    url: string;
}

export const CoffeeDiary = ({ url }: CoffeeDiaryProps) => {
    return (
        <>
            <Tilt
                transitionSpeed={1000}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="20px"
            >
                <img src={url} alt="coffee diary svg" />
            </Tilt>
        </>
    );
};
