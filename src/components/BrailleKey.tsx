import { cn } from "@/lib/utils";

interface BrailleKeyProps {
  label: string;
  brailleDots?: number[]; // Array of dot positions (1-6)
  width?: "normal" | "wide" | "wider" | "widest";
  onClick?: () => void;
}

const BrailleKey = ({ label, brailleDots = [], width = "normal", onClick }: BrailleKeyProps) => {
  const widthClasses = {
    normal: "w-14 sm:w-16",
    wide: "w-20 sm:w-24",
    wider: "w-28 sm:w-36",
    widest: "w-40 sm:w-52",
  };

  // Braille dot positions in a 2x3 grid
  // 1 4
  // 2 5
  // 3 6
  const renderBrailleDots = () => {
    const dotPositions = [1, 2, 3, 4, 5, 6];
    return (
      <div className="flex gap-1 mt-1 justify-center">
        <div className="flex flex-col gap-0.5">
          {[1, 2, 3].map((pos) => (
            <div
              key={pos}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                brailleDots.includes(pos) ? "bg-keyboard-dot" : "bg-keyboard-border/30"
              )}
            />
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          {[4, 5, 6].map((pos) => (
            <div
              key={pos}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                brailleDots.includes(pos) ? "bg-keyboard-dot" : "bg-keyboard-border/30"
              )}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "h-14 sm:h-16 rounded border-2 flex flex-col items-center justify-center",
        "bg-keyboard-key border-keyboard-border",
        "shadow-[0_3px_0_0] shadow-keyboard-shadow",
        "hover:bg-keyboard-key-hover hover:shadow-[0_2px_0_0]",
        "active:shadow-[0_1px_0_0] active:translate-y-0.5",
        "transition-all duration-150 ease-out",
        "text-xs sm:text-sm font-semibold text-foreground",
        widthClasses[width]
      )}
    >
      <span className="leading-none">{label}</span>
      {brailleDots.length > 0 && renderBrailleDots()}
    </button>
  );
};

export default BrailleKey;
