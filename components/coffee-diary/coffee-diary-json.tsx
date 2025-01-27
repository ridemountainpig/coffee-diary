"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

export const CoffeeDiaryJson = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const code = `
    {
        "${year}-${month}-${day}": {
            "bean-type": "GEISHA",
            "origin": "JAPAN",
            "flavor": "This exquisite Geisha 
            coffee offers a delicate balance of 
            floral aromas and fruity notes."
        },
        "year-month-day": {
            "bean-type": "bean type",
            "origin": "coffee origin",
            "flavor": "coffee flavor you tasted"
        }
    }
`;

    const code_xs = `
    {   
        "${year}-${month}-${day}": {
            "bean-type": "GEISHA",
            "origin": "JAPAN",
            "flavor": "This exquisite 
            Geisha coffee offers a 
            delicate balance of floral 
            aromas and fruity notes."
        },
        "year-month-day": {
            "bean-type": "bean type",
            "origin": "coffee origin",
            "flavor": "coffee flavor 
            you tasted"
        }
    }
`;

    return (
        <>
            <Tilt transitionSpeed={2000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <div className="rounded-xl bg-serenade-500 p-2 duration-700 hover:scale-[1.02] hover:bg-serenade-600 hover:bg-opacity-70 sm:p-4 2xl:p-10">
                    <pre className="hidden py-4 font-tilt-neon text-lg font-black tracking-widest text-serenade-800 sm:block">
                        {code}
                    </pre>
                    <pre className="py-4 font-tilt-neon text-base font-black tracking-widest text-serenade-800 sm:hidden">
                        {code_xs}
                    </pre>
                </div>
            </Tilt>
        </>
    );
};
