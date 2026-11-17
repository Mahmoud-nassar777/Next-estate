import { FaHome } from "react-icons/fa"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 bg-background/80 backdrop-blur-md">
            {/* logo + ring */}
            <div className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/15" />
                <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-primary/10 border-t-primary" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                    <FaHome size={24} className="animate-pulse" />
                </div>
            </div>

            {/* text + dots */}
            <div className="flex flex-col items-center gap-3">
                <p className="text-sm font-medium tracking-[0.25em] text-text/60 uppercase">
                    Loading
                </p>
                <div className="flex gap-2">
                    {[0, 150, 300].map((delay) => (
                        <span
                            key={delay}
                            className="h-2 w-2 animate-bounce rounded-full bg-primary"
                            style={{ animationDelay: `${delay}ms` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}