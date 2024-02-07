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
                <div className="bg-serenade-500 rounded-xl p-2 sm:p-4 2xl:p-10 hover:bg-opacity-70 hover:bg-serenade-600 duration-700 hover:scale-[1.02]">
                    <pre className="text-lg font-tilt-neon font-black text-serenade-800 tracking-widest py-4 hidden sm:block">
                        {code}
                    </pre>
                    <pre className="text-base font-tilt-neon font-black text-serenade-800 tracking-widest py-4 sm:hidden">
                        {code_xs}
                    </pre>
                </div>
            </Tilt>
        </>
    );
};
