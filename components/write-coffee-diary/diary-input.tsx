interface DiaryInputProps {
    inputTitle: string;
    setInputValue: (value: string) => void;
}

export function DiaryInput({ inputTitle, setInputValue }: DiaryInputProps) {
    return (
        <div className="flex h-fit flex-wrap items-center py-4">
            <div className="ml-2 font-tilt-neon text-xl font-black text-serenade-950 md:text-2xl">
                {inputTitle} :
            </div>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                className="ml-2 mt-2 w-full border-b-4 border-dashed border-serenade-950 bg-serenade-500 p-0.5 font-tilt-neon text-xl text-serenade-950 md:text-2xl"
            />
        </div>
    );
}
