"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CoffeeDiaryBoard } from "@/components/coffee-diary-board";

export default function UserPage({ params }: { params: { name: string } }) {
    return (
        <>
            <div className="bg-coffee-white h-screen">
                <Navbar text={`Coffee Diary`}></Navbar>
                <div className="flex justify-center items-center w-full h-[82%]">
                    <div className="w-[90%] h-full bg-serenade-500 rounded-2xl py-6">
                        <div className="flex w-full justify-center">
                            <span className="text-center text-coffee-brown font-pacifico text-xl lg:text-2xl tracking-widest p-4">
                                By {params.name}
                            </span>
                        </div>
                        <div className="flex w-full justify-center h-full">
                            <div className="h-[90%] w-[90%] overflow-y-auto no-scrollbar">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <CoffeeDiaryBoard
                                        name={params.name}
                                    ></CoffeeDiaryBoard>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
