import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface GreetingSequenceProps {
  onComplete: () => void;
}

const greetings = [
  { text: "Happyyyy Birthdayyyyy my love ❤️", emoji: "🎂" },
  { text: "You are the reason why my world glows ✨", emoji: "🌟" },
  { text: "Every moment with you feels special…", emoji: "💫" },
  { text: "I'm so lucky to have you, Poorvika 💕", emoji: "🍀" },
  { text: "Thank you for being mine…", emoji: "💝" },
];

const GreetingSequence = ({ onComplete }: GreetingSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex >= greetings.length) {
      setTimeout(onComplete, 500);
      return;
    }

    const showTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsVisible(true);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIndex, onComplete]);

  if (currentIndex >= greetings.length) return null;

  const currentGreeting = greetings[currentIndex];

  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={25} />
      <Sparkles count={30} />

      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="romantic-card p-8 md:p-16 max-w-2xl w-full text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-7xl md:text-8xl mb-8"
            >
              {currentGreeting.emoji}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-5xl font-romantic text-foreground leading-relaxed glow-text"
            >
              {currentGreeting.text}
            </motion.h2>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {greetings.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : index < currentIndex 
                        ? "bg-primary/60" 
                        : "bg-primary/30"
                  }`}
                  initial={false}
                  animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            {/* Corner decorations */}
            <motion.div
              className="absolute top-4 left-4 text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💗
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 text-3xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              💗
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              💗
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 text-3xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              💗
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GreetingSequence;
