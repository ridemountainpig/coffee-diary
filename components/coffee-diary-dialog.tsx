import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { BookImage, Loader2 } from "lucide-react";

interface CoffeeDiaryDialogProps {
    name: string;
    date: string;
}

export function CoffeeDiaryDialog({ name, date }: CoffeeDiaryDialogProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button
                        className="mt-4 flex h-fit w-fit items-center py-1 px-1.5 rounded-lg border-3 border-[#967253]"
                        onClick={() => setIsLoading(true)}
                    >
                        <BookImage size={20} color="#967253" strokeWidth={3} />
                        <span className="ml-1 text-[#967253] font-tilt-neon font-bold text-base tracking-widest">
                            Diary Photo
                        </span>
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Content className="w-[340px] h-[530px] flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-serenade-600">
                        <div>
                            {isLoading == true ? (
                                <div className="flex h-fit items-center">
                                    <Loader2
                                        className="animate-spin"
                                        size={20}
                                        color="#967253"
                                        strokeWidth={3}
                                    />
                                    <span className="ml-2 text-[#967253] font-tilt-neon font-bold text-base tracking-widest">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            <img
                                src={`https://coffee-diary.com/api/${name}?date=${date}`}
                                onLoad={() => setIsLoading(false)}
                            ></img>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
