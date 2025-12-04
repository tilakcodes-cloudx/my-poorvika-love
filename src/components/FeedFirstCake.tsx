import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface FeedFirstCakeProps {
  onComplete: () => void;
}

const options = [
  { id: 1, name: "LIKHIII", emoji: "💜" },
  { id: 2, name: "TILAK", emoji: "💙" },
  { id: 3, name: "OPTION 1", emoji: "💚" },
  { id: 4, name: "OPTION 2", emoji: "💛" },
];

const FeedFirstCake = ({ onComplete }: FeedFirstCakeProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleSelect = (id: number) => {
    setSelected(id);
    setTimeout(() => setShowMessage(true), 500);
  };

  return (
    <div className="min-h-screen bg-romantic flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={15} />

      <AnimatePresence mode="wait">
        {!showMessage ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="romantic-card p-8 md:p-12 max-w-lg w-full text-center z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="text-6xl mb-6"
            >
              🎂
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-romantic text-foreground mb-8"
            >
              Who are you going to feed the first piece of cake? 👀🎂
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => handleSelect(option.id)}
                  className={`romantic-card p-4 cursor-pointer transition-all duration-300 ${
                    selected === option.id
                      ? "ring-4 ring-primary shadow-glow"
                      : "hover:shadow-romantic"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl block mb-2">{option.emoji}</span>
                  <span className="font-body font-semibold text-foreground">
                    {option.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 text-2xl">🍰</div>
            <div className="absolute top-4 right-4 text-2xl">🍰</div>
            <div className="absolute bottom-4 left-4 text-2xl">🎀</div>
            <div className="absolute bottom-4 right-4 text-2xl">🎀</div>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="romantic-card p-8 md:p-12 max-w-lg w-full text-center z-10"
          >
            {/* Happy animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: 3,
              }}
              className="text-8xl mb-6"
            >
              🥰
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl font-romantic text-foreground mb-6"
            >
              Awwwww…
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-romantic text-primary mb-8"
            >
              he literally loves you a lot 💗
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-2"
            >
              {["💕", "💗", "💖", "💝", "💘"].map((heart, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  className="text-2xl"
                >
                  {heart}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              onClick={onComplete}
              className="romantic-button mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read My Letter 💌
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedFirstCake;
