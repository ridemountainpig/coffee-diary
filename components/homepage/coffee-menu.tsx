"use client";

import { motion } from "framer-motion";
import { ArrowBigUp } from "lucide-react";
import { MenuCategory } from "@/components/coffee-menu/menu-category";
import { MenuItem } from "@/components/coffee-menu/menu-item";
import { MenuLink } from "@/components/coffee-menu/menu-link";

export function CoffeeMenu() {
    return (
        <motion.div
            className="bg-serenade-500 shadow-coffee-brown w-[90%] rounded-2xl p-4 shadow-xl sm:w-[78%] md:w-[85%] xl:p-6 2xl:w-[80%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="flex w-full justify-center">
                <span className="font-kodchasan text-coffee-black text-3xl font-black tracking-widest lg:text-4xl">
                    COFFEE MENU
                </span>
            </div>
            <div className="w-full justify-around py-8 xl:flex">
                <div className="xl:w-1/3">
                    <MenuCategory category="HOT"></MenuCategory>
                    <div className="pt-4 xl:p-4">
                        <MenuItem item="Cappuccino" price="3"></MenuItem>
                        <MenuItem item="Espresso" price="3"></MenuItem>
                        <MenuItem item="Americano" price="3"></MenuItem>
                        <MenuItem item="Latte" price="3"></MenuItem>
                        <MenuItem item="Mocaccino" price="2"></MenuItem>
                        <MenuItem item="Dopio" price="4"></MenuItem>
                        <MenuItem item="Frappe" price="4"></MenuItem>
                    </div>
                </div>
                <div className="xl:w-1/3">
                    <MenuCategory category="COFFEE DIARY"></MenuCategory>
                    <div className="pt-4 xl:p-4">
                        <MenuLink
                            item="Write Coffee Diary"
                            link="/write-coffee-diary"
                        ></MenuLink>
                        <MenuLink
                            item="Github Coffee Diary"
                            link="/github-coffee-diary"
                        ></MenuLink>
                        <div className="mt-4 flex w-full flex-col items-center">
                            <ArrowBigUp
                                size={28}
                                strokeWidth={2}
                                className="text-serenade-900 animate-bounce"
                            />
                            <span className="text-md font-kodchasan text-serenade-900 animate-bounce py-2 font-black tracking-widest">
                                Create Coffee Diary
                            </span>
                            <img
                                src="/coffee-cat.png"
                                alt="Coffee Cat Icon"
                                className="w-20"
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/3">
                    <MenuCategory category="COLD"></MenuCategory>
                    <div className="pt-4 xl:p-4">
                        <MenuItem item="Glace" price="2"></MenuItem>
                        <MenuItem item="Latte" price="3"></MenuItem>
                        <MenuItem item="Mocha" price="2"></MenuItem>
                        <MenuItem item="Espresso" price="4"></MenuItem>
                        <MenuItem item="Cortado" price="2"></MenuItem>
                        <MenuItem item="Dopio" price="4"></MenuItem>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
