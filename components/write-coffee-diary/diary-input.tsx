interface DiaryInputProps {
    inputTitle: string;
    setInputValue: (value: string) => void;
}

export function DiaryInput({ inputTitle, setInputValue }: DiaryInputProps) {
    return (
        <div className="py-4">
            <div className="font-tilt-neon text-serenade-950 text-xl font-black md:text-2xl">
                {inputTitle} :
            </div>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                className="border-serenade-950 bg-serenade-500 font-tilt-neon text-serenade-950 mt-2 w-full border-b-4 border-dashed p-0.5 text-xl md:text-2xl"
            />
        </div>
    );
}
