import Image from "next/image";

export function CoffeeStep() {
    return (
        <>
            <div className="flex gap-x-4">
                <div className="mt-4 hover:text-serenade-800">
                    <Image
                        src="/coffee-bean-brown.svg"
                        alt="coffee bean"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="mb-4">
                    <Image
                        src="/coffee-bean-dark-brown.svg"
                        alt="coffee bean"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        src="/coffee-bean-brown.svg"
                        alt="coffee bean"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="mb-4">
                    <Image
                        src="/coffee-bean-dark-brown.svg"
                        alt="coffee bean"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="mt-4">
                    <Image
                        src="/coffee-bean-brown.svg"
                        alt="coffee bean"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </>
    );
}
