import BrailleKey from "./BrailleKey";

const BrailleKeyboard = () => {
  // Braille patterns for common keys (simplified for demo)
  const keyData = {
    row1: [
      { label: "`", dots: [1, 4, 6] },
      { label: "!", dots: [2, 3, 4, 6] },
      { label: "@", dots: [1, 6] },
      { label: "#", dots: [3, 4, 5, 6] },
      { label: "$", dots: [1, 2, 4, 6] },
      { label: "%", dots: [1, 4, 6] },
      { label: "sh", dots: [1, 4, 6] },
      { label: "and", dots: [1, 2, 3, 4, 6] },
      { label: "*", dots: [1, 6] },
      { label: "[", dots: [2, 4, 6] },
      { label: "]", dots: [1, 2, 4, 5, 6] },
      { label: "l", dots: [1, 2, 3] },
    ],
    row2: [
      { label: "#", dots: [3, 4, 5, 6] },
      { label: "1", dots: [2] },
      { label: "2", dots: [2, 3] },
      { label: "3", dots: [2, 5] },
      { label: "4", dots: [2, 5, 6] },
      { label: "5", dots: [2, 6] },
      { label: "6", dots: [2, 3, 5] },
      { label: "7", dots: [2, 3, 5, 6] },
      { label: "8", dots: [2, 3, 6] },
      { label: "9", dots: [3, 5] },
      { label: "0", dots: [3, 5, 6] },
      { label: "-", dots: [3, 6] },
      { label: "=", dots: [2, 3, 5, 6] },
    ],
    row3: [
      { label: "Q", dots: [1, 2, 3, 4, 5] },
      { label: "W", dots: [2, 4, 5, 6] },
      { label: "E", dots: [1, 5] },
      { label: "R", dots: [1, 2, 3, 5] },
      { label: "T", dots: [2, 3, 4, 5] },
      { label: "Y", dots: [1, 3, 4, 5, 6] },
      { label: "U", dots: [1, 3, 6] },
      { label: "I", dots: [2, 4] },
      { label: "O", dots: [1, 3, 5] },
      { label: "P", dots: [1, 2, 3, 4] },
      { label: "(", dots: [1, 2, 3, 5, 6] },
      { label: "'", dots: [3] },
      { label: "\\", dots: [1, 2, 5, 6] },
    ],
    row4: [
      { label: "A", dots: [1] },
      { label: "S", dots: [2, 3, 4] },
      { label: "D", dots: [1, 4, 5] },
      { label: "F", dots: [1, 2, 4] },
      { label: "G", dots: [1, 2, 4, 5] },
      { label: "H", dots: [1, 2, 5] },
      { label: "J", dots: [2, 4, 5] },
      { label: "K", dots: [1, 3] },
      { label: "L", dots: [1, 2, 3] },
      { label: ";", dots: [5, 6] },
      { label: ":", dots: [1, 5, 6] },
    ],
    row5: [
      { label: "Z", dots: [1, 3, 5, 6] },
      { label: "X", dots: [1, 3, 4, 6] },
      { label: "C", dots: [1, 4] },
      { label: "V", dots: [1, 2, 3, 6] },
      { label: "B", dots: [1, 2] },
      { label: "N", dots: [1, 3, 4, 5] },
      { label: "M", dots: [1, 3, 4] },
      { label: ",", dots: [6] },
      { label: ".", dots: [4, 6] },
      { label: "/", dots: [3, 4] },
    ],
    row6: [
      { label: "th", dots: [1, 4, 5, 6] },
      { label: "ch", dots: [1, 6] },
      { label: "wh", dots: [1, 5, 6] },
      { label: "gh", dots: [1, 2, 6] },
      { label: "ar", dots: [3, 4, 5] },
      { label: "ow", dots: [2, 4, 6] },
      { label: "ou", dots: [1, 2, 5, 6] },
      { label: "of", dots: [1, 2, 3, 5, 6] },
      { label: "in", dots: [3, 5] },
      { label: "ed", dots: [1, 2, 4, 6] },
      { label: "en", dots: [2, 6] },
      { label: "er", dots: [1, 2, 4, 4, 6] },
      { label: "st", dots: [3, 4] },
      { label: '" ?', dots: [2, 3, 6] },
      { label: '""', dots: [2, 3, 6] },
    ],
    row7: [
      { label: "the", dots: [2, 3, 4, 6] },
      { label: "\\5/", dots: [1, 5, 6] },
      { label: "\\456/", dots: [4, 5, 6] },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Braille Keyboard
        </h1>
        <p className="text-muted-foreground">
          Interactive onscreen keyboard with Braille notation
        </p>
      </div>

      <div className="bg-gradient-to-b from-muted/50 to-muted p-4 sm:p-6 rounded-lg border-2 border-keyboard-border shadow-xl">
        {/* Row 1 - Special characters */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          {keyData.row1.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
          <BrailleKey label="Delete" width="wider" />
        </div>

        {/* Row 2 - Numbers */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          {keyData.row2.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
          <BrailleKey label="ing" brailleDots={[3, 4, 6]} />
        </div>

        {/* Row 3 - Top letter row */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          <BrailleKey label="Tab" width="wide" />
          {keyData.row3.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
        </div>

        {/* Row 4 - Home row */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          <BrailleKey label="Caps Lock" brailleDots={[4, 6]} width="wider" />
          {keyData.row4.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
          <BrailleKey label="Enter" width="wider" />
        </div>

        {/* Row 5 - Bottom letter row */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          <BrailleKey label="Upper Case" brailleDots={[4, 6]} width="wider" />
          {keyData.row5.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
          <BrailleKey label="Letter Prefix" brailleDots={[5, 6]} width="wider" />
        </div>

        {/* Row 6 - Common digraphs */}
        <div className="flex gap-1 sm:gap-1.5 mb-1.5 justify-center">
          {keyData.row6.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
        </div>

        {/* Row 7 - Bottom row with space */}
        <div className="flex gap-1 sm:gap-1.5 justify-center items-center">
          {keyData.row7.map((key, idx) => (
            <BrailleKey key={idx} label={key.label} brailleDots={key.dots} />
          ))}
          <BrailleKey label="" width="widest" />
          <BrailleKey label="\\46/" brailleDots={[4, 6]} />
          <BrailleKey label="\\4/" brailleDots={[4]} />
          <BrailleKey label="for" brailleDots={[1, 2, 3, 4, 5, 6]} />
          <BrailleKey label="with" brailleDots={[2, 3, 4, 5, 6]} />
        </div>
      </div>
    </div>
  );
};

export default BrailleKeyboard;
