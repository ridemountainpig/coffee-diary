import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from 'path';

type CoffeeData = {
    "bean-type": string;
    origin: string;
    flavor: string;
};

type CoffeeLog = {
    [date: string]: CoffeeData;
};

function getCoffeeDiaryCss() {
    const filePath = path.join(process.cwd(), 'app', 'coffee-diary.css');
    const cssContent = fs.readFileSync(filePath, 'utf8');
    return cssContent;
}

function getCoffeeDiaryJson() {
    const filePath = path.join(process.cwd(), 'public', 'coffee-diary.json');
    const coffeeDiaryJson = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(coffeeDiaryJson);
}

export default function coffeeDiarySvg(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { name } = req.query;
    const githubName = name;

    const css = getCoffeeDiaryCss();
    const coffeeDiaryJson: CoffeeLog | null = getCoffeeDiaryJson();

    let beanType = "";
    let origin = "";
    let flavor = "";
    let formattedDate = "";
    let continueDays = 0;
    if (coffeeDiaryJson != null) {
        const keys = Object.keys(coffeeDiaryJson);
        const latestCoffeeDiaryDate = keys[0];
        const latestCoffeeDiary = coffeeDiaryJson[keys[0]];

        beanType = latestCoffeeDiary["bean-type"];
        origin = latestCoffeeDiary["origin"];
        flavor = latestCoffeeDiary["flavor"];

        formattedDate = latestCoffeeDiaryDate.replace(/-/g, " . ");
        continueDays = keys.length;
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 560" width="340" height="540" class="rounded-2xl">
        <style>
            ${css}
        </style>
        <foreignObject x="0" y="0" width="320" height="500" class="shadow-xl rounded-2xl">
            <div xmlns="http://www.w3.org/1999/xhtml" class="w-full h-full flex justify-center items-center bg-coffee-white">
                <div class="w-[95%] h-[95%] border-coffee-black border-4 rounded-xl py-4">
                    <div class="w-full flex justify-center pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-80q-73-9-145-39.5T206.5-207Q150-264 115-351T80-560v-40h40q51 0 105 13t101 39q12-86 54.5-176.5T480-880q57 65 99.5 155.5T634-548q47-26 101-39t105-13h40v40q0 122-35 209t-91.5 144q-56.5 57-128 87.5T480-80Zm-2-82q-11-166-98.5-251T162-518q11 171 101.5 255T478-162Zm2-254q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742q-35 59-55.5 121T402-502q20 17 42 40.5t36 45.5Zm78 236q37-12 77-35t74.5-62.5q34.5-39.5 59-98.5T798-518q-94 14-165 62.5T524-332q12 32 20.5 70t13.5 82Zm-78-236Zm78 236Zm-80 18Zm46-170ZM480-80Z"/></svg>
                    </div>
                    <div class="text-3xl font-black font-kodchasan tracking-widest w-full text-center">COFFEE</div>
                    <div class="text-3xl font-black font-kodchasan text-coffee-black tracking-widest w-full text-center">DIARY</div>
                    <div class="text-xs font-bold font-gluten text-coffee-black tracking-widest w-full text-center p-2">${formattedDate}</div>
                    <div class="w-full h-8 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>
                    <div class="text-xs font-bold font-gluten text-coffee-black tracking-widest px-4">${
                        continueDays == 0
                            ? "first day of coffee diary"
                            : continueDays + " day"
                    }</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>
                    </div>
                    <div class="w-full flex justify-center">
                    <div class="w-16">
                    <svg fill="#021928"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M463.617,126.505c-0.004-0.004-0.009-0.007-0.012-0.012C417.932,80.83,349.086,66.36,282.236,87.834 c-29.106-22.827-64.475-36.24-102.586-36.24C80.591,51.594,0,142.134,0,253.422S80.591,455.25,179.649,455.25 c17.694,0,34.795-2.903,50.957-8.283c21.638,9.04,44.773,13.437,68.209,13.437c52.951,0,107.372-22.409,149.117-64.153 c37.877-37.877,60.49-86.601,63.678-137.197C514.843,207.76,497.798,160.687,463.617,126.505z M164.949,425.032 C88.975,416.525,29.4,342.807,29.4,253.422S88.975,90.32,164.949,81.813V425.032z M431.852,137.48l-76.072,76.072 c-0.025-0.141-0.057-0.282-0.082-0.423c-0.35-1.936-0.728-3.86-1.128-5.776c-0.201-0.973-0.419-1.94-0.634-2.911 c-0.209-0.936-0.423-1.87-0.644-2.8c-7.989-33.971-23.746-65.053-45.925-90.198C353.112,101.371,398.358,110.742,431.852,137.48z M234.116,414.119c-1.272,0.57-2.553,1.119-3.841,1.649c-0.976,0.4-1.954,0.794-2.94,1.172 c-10.528,4.054-21.569,6.815-32.984,8.094V81.813c64.807,7.259,117.673,61.972,131.814,133.379 c0.123,0.628,0.253,1.254,0.37,1.885c0.11,0.591,0.212,1.185,0.318,1.779c0.166,0.941,0.331,1.882,0.485,2.827 c0.073,0.451,0.143,0.904,0.213,1.355c0.176,1.142,0.345,2.287,0.503,3.435c0.041,0.298,0.082,0.597,0.122,0.897 c0.19,1.435,0.367,2.874,0.525,4.319c0.003,0.029,0.007,0.059,0.01,0.088c0.52,4.766,0.87,9.578,1.044,14.426 c0,0.002,0,0.003,0,0.004c0.047,1.298,0.082,2.525,0.106,3.703c0.021,1.169,0.037,2.337,0.037,3.51 c0,2.101-0.044,4.191-0.109,6.277c-0.013,0.398-0.022,0.798-0.037,1.195c-0.073,1.968-0.176,3.928-0.307,5.881 c-0.032,0.479-0.069,0.957-0.104,1.436c-0.135,1.829-0.291,3.653-0.476,5.468c-0.053,0.516-0.113,1.031-0.169,1.546 c-0.162,1.476-0.345,2.946-0.539,4.411c-0.101,0.761-0.2,1.523-0.31,2.281c-0.218,1.504-0.457,3-0.709,4.492 c-0.182,1.078-0.375,2.151-0.575,3.222c-0.088,0.476-0.184,0.95-0.276,1.424c-10.872,55.823-45.393,101.517-90.822,122.453 C235.016,413.716,234.566,413.917,234.116,414.119z M482.269,257.205c-2.736,43.447-22.314,85.445-55.126,118.256 c-44.036,44.036-103.958,63.274-157.539,52.767c10.299-6.674,19.895-14.428,28.688-23.107c0.213,0.002,0.425,0.009,0.638,0.009 c39.482,0,79.157-17.227,109.908-47.976c16.514-16.515,29.57-36.344,37.758-57.343c2.436-6.252,4.467-12.658,6.037-19.041 c1.94-7.884-2.878-15.846-10.76-17.787c-7.885-1.937-15.846,2.878-17.787,10.762c-1.267,5.146-2.909,10.325-4.883,15.389 c-6.719,17.237-17.491,33.569-31.154,47.231c-18.056,18.056-40.375,30.608-63.265,36.151 c13.281-20.446,23.126-43.701,28.829-68.638c0.016-0.069,0.031-0.138,0.047-0.207c0.948-4.166,1.782-8.376,2.495-12.63 c0.148-0.879,0.297-1.757,0.435-2.64c0.148-0.954,0.288-1.911,0.425-2.869c0.16-1.126,0.312-2.255,0.456-3.385 c0.101-0.804,0.207-1.605,0.301-2.412c0.222-1.911,0.426-3.829,0.601-5.756c0.031-0.344,0.053-0.689,0.082-1.033 c0.146-1.692,0.272-3.391,0.379-5.095c0.041-0.651,0.075-1.304,0.11-1.957c0.081-1.476,0.147-2.958,0.198-4.442 c0.022-0.616,0.046-1.232,0.063-1.849c0.056-2.052,0.093-4.112,0.093-6.178c0-0.592-0.003-1.192-0.009-1.801l93.359-93.359 C474.177,185.174,484.629,219.764,482.269,257.205z"></path> </g> </g> <g> <g> <path d="M454.901,224.959c-0.19-0.941-0.469-1.867-0.836-2.749c-0.367-0.897-0.825-1.749-1.354-2.543 c-0.544-0.809-1.161-1.558-1.839-2.234c-0.676-0.676-1.426-1.294-2.234-1.823c-0.794-0.529-1.646-0.985-2.528-1.352 c-0.897-0.367-1.823-0.647-2.749-0.838c-1.896-0.382-3.851-0.382-5.748,0c-0.941,0.191-1.867,0.47-2.749,0.838 c-0.897,0.367-1.748,0.823-2.542,1.352c-0.81,0.529-1.56,1.147-2.236,1.823c-0.676,0.676-1.294,1.426-1.823,2.234 c-0.528,0.794-0.985,1.646-1.352,2.543c-0.367,0.882-0.645,1.808-0.836,2.749c-0.193,0.941-0.294,1.911-0.294,2.866 s0.101,1.926,0.294,2.881c0.191,0.926,0.469,1.852,0.836,2.749c0.367,0.882,0.825,1.735,1.352,2.528 c0.529,0.808,1.147,1.558,1.823,2.234c0.676,0.676,1.426,1.294,2.236,1.838c0.794,0.529,1.645,0.985,2.542,1.352 c0.883,0.367,1.808,0.647,2.749,0.838c0.941,0.191,1.911,0.279,2.867,0.279c0.954,0,1.926-0.088,2.881-0.279 c0.926-0.191,1.852-0.47,2.749-0.838c0.882-0.367,1.735-0.823,2.528-1.352c0.808-0.544,1.558-1.161,2.234-1.838 c2.749-2.734,4.309-6.527,4.309-10.393C455.181,226.87,455.091,225.9,454.901,224.959z"></path> </g> </g> <g> <g> <path d="M290.161,186.178c-2.693-6.134-5.787-12.101-9.193-17.734c-4.201-6.946-13.239-9.173-20.186-4.97 c-6.946,4.201-9.171,13.239-4.97,20.186c2.749,4.544,5.248,9.368,7.431,14.338c7.438,16.937,11.367,36.104,11.367,55.426 c0,41.867-18.447,80.879-48.141,101.81c-6.636,4.677-8.223,13.847-3.546,20.484c2.862,4.06,7.407,6.231,12.027,6.231 c2.927,0,5.881-0.872,8.455-2.687c37.382-26.348,60.603-74.568,60.603-125.84C304.01,230.064,299.221,206.812,290.161,186.178z"></path> </g> </g> <g> <g> <path d="M249.351,136.73c-0.191-0.941-0.47-1.867-0.838-2.749c-0.367-0.897-0.823-1.749-1.352-2.543 c-0.544-0.808-1.147-1.558-1.823-2.234c-0.676-0.676-1.441-1.294-2.234-1.823c-0.808-0.529-1.661-0.985-2.543-1.352 c-0.882-0.367-1.808-0.661-2.749-0.838c-1.896-0.382-3.851-0.382-5.748,0c-0.941,0.176-1.867,0.47-2.749,0.838 c-0.882,0.367-1.735,0.823-2.543,1.352c-0.794,0.529-1.558,1.147-2.234,1.823s-1.294,1.426-1.823,2.234 c-0.529,0.794-0.985,1.646-1.352,2.543c-0.367,0.882-0.647,1.808-0.838,2.749c-0.191,0.941-0.279,1.911-0.279,2.866 c0,0.956,0.088,1.926,0.279,2.866c0.191,0.941,0.47,1.867,0.838,2.764c0.367,0.882,0.823,1.735,1.352,2.528 c0.529,0.808,1.147,1.558,1.823,2.234s1.441,1.294,2.234,1.823c0.809,0.529,1.661,0.985,2.543,1.352 c0.882,0.367,1.808,0.661,2.749,0.838c0.941,0.191,1.911,0.294,2.867,0.294c0.97,0,1.926-0.103,2.881-0.294 c0.941-0.176,1.867-0.47,2.749-0.838c0.882-0.367,1.735-0.823,2.543-1.352c0.794-0.529,1.558-1.147,2.234-1.823 c0.676-0.676,1.279-1.426,1.823-2.234c0.529-0.794,0.985-1.646,1.352-2.528c0.367-0.897,0.647-1.823,0.838-2.764 c0.191-0.941,0.279-1.911,0.279-2.866S249.542,137.671,249.351,136.73z"></path> </g> </g> </g></svg>
                    </div>
                    </div>

                    <div class="text-sm font-black font-dancing-script text-coffee-black tracking-widest w-full text-center">By ${githubName}</div>

                    <div class="grid grid-cols-8 mt-2 px-4">
                        <div class="col-span-4 h-8 flex items-center border-r-3 border-t-3 border-coffee-black">
                            <span class="w-full text-coffee-black text-sm font-black font-nunito text-center tracking-wide">
                                BEAN TYPE
                            </span>
                        </div>
                        <div class="col-span-4 h-8 flex items-center border-t-3 border-coffee-black">
                            <span class="w-full text-coffee-black text-sm font-black font-nunito text-center tracking-wide">
                                ${beanType}
                            </span>
                        </div>
                        <div class="col-span-3 h-8 flex items-center border-r-3 border-t-3 border-coffee-black">
                            <span class="w-full text-coffee-black text-sm font-black font-nunito text-center tracking-wide">
                                ORIGIN
                            </span>
                        </div>
                        <div class="col-span-5 h-8 flex items-center border-t-3 border-coffee-black">
                            <span class="w-full text-coffee-black text-sm font-black font-nunito text-center tracking-wide">
                                ${origin}
                            </span>
                        </div>
                        <div class="col-span-8 h-2 flex items-center border-t-3 border-coffee-black"></div>
                        <div class="col-span-8 h-8 flex items-center border-t-3 border-coffee-black">
                            <div class="w-full flex justify-center items-center gap-x-2">
                                <svg fill="#021928" width="20px" height="20px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="matrix(1,0,0,1,-1152,-256)"> <rect id="Icons" x="0" y="0" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)"> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> </g> <g id="coffee-bean-filled" transform="matrix(0.866025,0.5,-0.5,0.866025,717.879,-387.292)"> <g transform="matrix(1,0,0,1,0,-0.699553)"> <path d="M737.673,328.231C738.494,328.056 739.334,328.427 739.757,329.152C739.955,329.463 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.079,358.559 736.492,366.083 738.435,371.679C738.697,372.426 738.482,373.258 737.89,373.784C737.298,374.31 736.447,374.426 735.735,374.077C730.192,371.375 722.028,365.058 722.021,352C722.015,340.226 728.812,330.279 737.673,328.231Z"></path> </g> <g transform="matrix(-1,0,0,-1,1483.03,703.293)"> <path d="M737.609,328.246C738.465,328.06 739.344,328.446 739.785,329.203C739.97,329.49 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.1,358.507 736.503,365.948 738.383,371.527C738.646,372.304 738.415,373.164 737.796,373.703C737.177,374.243 736.294,374.356 735.56,373.989C730.02,371.241 722.028,364.92 722.021,352C722.016,340.255 728.779,330.328 737.609,328.246Z"></path> </g> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)"> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> </g> <g id="clipboard"> </g> <g transform="matrix(1,0,0,1,128.011,1.35415)"> <g id="clipboard-paste"> </g> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g> </g></svg>
                                <span class="text-coffee-black text-sm font-bold font-nunito text-center">
                                    FLAVOR
                                </span>
                                <svg fill="#021928" width="20px" height="20px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="matrix(1,0,0,1,-1152,-256)"> <rect id="Icons" x="0" y="0" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)"> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> </g> <g id="coffee-bean-filled" transform="matrix(0.866025,0.5,-0.5,0.866025,717.879,-387.292)"> <g transform="matrix(1,0,0,1,0,-0.699553)"> <path d="M737.673,328.231C738.494,328.056 739.334,328.427 739.757,329.152C739.955,329.463 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.079,358.559 736.492,366.083 738.435,371.679C738.697,372.426 738.482,373.258 737.89,373.784C737.298,374.31 736.447,374.426 735.735,374.077C730.192,371.375 722.028,365.058 722.021,352C722.015,340.226 728.812,330.279 737.673,328.231Z"></path> </g> <g transform="matrix(-1,0,0,-1,1483.03,703.293)"> <path d="M737.609,328.246C738.465,328.06 739.344,328.446 739.785,329.203C739.97,329.49 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.1,358.507 736.503,365.948 738.383,371.527C738.646,372.304 738.415,373.164 737.796,373.703C737.177,374.243 736.294,374.356 735.56,373.989C730.02,371.241 722.028,364.92 722.021,352C722.016,340.255 728.779,330.328 737.609,328.246Z"></path> </g> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)"> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> </g> <g id="clipboard"> </g> <g transform="matrix(1,0,0,1,128.011,1.35415)"> <g id="clipboard-paste"> </g> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g> </g></svg>
                            </div>
                        </div>
                        <div class="col-span-8 py-1 flex items-center border-t-3 border-coffee-black">
                            <div class="w-full h-16 flex justify-center items-center">
                                <span class="text-coffee-black text-xs font-bold font-nunito text-center line-clamp-4">
                                    ${flavor}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </foreignObject>
    </svg>
    `;

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(svgContent);
}
