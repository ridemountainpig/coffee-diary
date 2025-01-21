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
                        className="mt-4 flex h-fit w-fit items-center rounded-lg border-3 border-[#967253] px-1.5 py-1"
                        onClick={() => setIsLoading(true)}
                    >
                        <BookImage size={20} color="#967253" strokeWidth={3} />
                        <span className="ml-1 font-tilt-neon text-base font-bold tracking-widest text-[#967253]">
                            Diary Photo
                        </span>
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Content className="fixed left-[50%] top-[50%] flex h-[530px] w-[340px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-2xl bg-serenade-600">
                        <div>
                            {isLoading == true ? (
                                <div className="flex h-fit items-center">
                                    <Loader2
                                        className="animate-spin"
                                        size={20}
                                        color="#967253"
                                        strokeWidth={3}
                                    />
                                    <span className="ml-2 font-tilt-neon text-base font-bold tracking-widest text-[#967253]">
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
