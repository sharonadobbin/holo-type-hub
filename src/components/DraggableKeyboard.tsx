import { useState, useRef, useEffect } from "react";
import { Minus, Maximize2 } from "lucide-react";
import BrailleKeyboard from "./BrailleKeyboard";

const DraggableKeyboard = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
      if (isResizing) {
        const newWidth = Math.max(400, resizeStart.width + (e.clientX - resizeStart.x));
        const newHeight = Math.max(300, resizeStart.height + (e.clientY - resizeStart.y));
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, resizeStart]);

  const handleDragStart = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("drag-handle")) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  if (isMinimized) {
    return (
      <div
        className="fixed bottom-4 right-4 bg-card border-2 border-border rounded-lg shadow-2xl p-3 cursor-move z-50"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={handleDragStart}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">Braille Keyboard</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(false);
            }}
            className="p-1 hover:bg-muted rounded transition-colors"
            aria-label="Maximize keyboard"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed bg-background border-2 border-border rounded-lg shadow-2xl overflow-hidden z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      {/* Header with drag handle and controls */}
      <div
        className="drag-handle bg-muted border-b border-border p-2 cursor-move flex items-center justify-between"
        onMouseDown={handleDragStart}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
          </div>
          <span className="text-xs font-medium text-muted-foreground">Braille Keyboard</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(true);
          }}
          className="p-1 hover:bg-background rounded transition-colors"
          aria-label="Minimize keyboard"
        >
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-auto h-[calc(100%-40px)]">
        <BrailleKeyboard />
      </div>

      {/* Resize handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResizeStart}
        style={{
          background: "linear-gradient(135deg, transparent 50%, hsl(var(--border)) 50%)",
        }}
      />
    </div>
  );
};

export default DraggableKeyboard;
