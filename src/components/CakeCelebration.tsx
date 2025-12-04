import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface CakeCelebrationProps {
  onComplete: () => void;
}

const CakeCelebration = ({ onComplete }: CakeCelebrationProps) => {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [isCut, setIsCut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [lifeTime, setLifeTime] = useState({ minutes: 0, seconds: 0 });

  // Birth date: December 5, 2007
  const birthDate = new Date(2007, 11, 5, 0, 0, 0);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diffMs = now.getTime() - birthDate.getTime();
      const totalMinutes = Math.floor(diffMs / (1000 * 60));
      const totalSeconds = Math.floor(diffMs / 1000);
      
      setLifeTime({
        minutes: totalMinutes,
        seconds: totalSeconds % 60,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const blowCandle = (index: number) => {
    setCandles((prev) => {
      const newCandles = [...prev];
      newCandles[index] = false;
      return newCandles;
    });
  };

  const cutCake = () => {
    if (!isCut) {
      setIsCut(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const allCandlesOut = candles.every((c) => !c);

  return (
    <div className="min-h-screen bg-romantic flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={10} />
      {showConfetti && <Sparkles count={50} />}

      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="text-3xl md:text-5xl font-romantic text-foreground mb-4 text-center glow-text z-10"
      >
        Happieeeee Birthdayyyy Babyyyyy 🎂💗
      </motion.h1>

      {/* Life Timer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="romantic-card px-6 py-3 mb-8 z-10"
      >
        <p className="text-sm font-body text-muted-foreground text-center">
          You have lived for
        </p>
        <p className="text-2xl md:text-3xl font-romantic text-primary text-center">
          {lifeTime.minutes.toLocaleString()} minutes {lifeTime.seconds} seconds
        </p>
        <p className="text-xs text-muted-foreground text-center mt-1">
          and counting... ⏰💕
        </p>
      </motion.div>

      {/* Cake */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="relative z-10"
      >
        <div className="relative">
          {/* Candles */}
          <div className="flex justify-center gap-4 mb-2 relative z-20">
            {candles.map((isLit, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer"
                onClick={() => blowCandle(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Candle body */}
                <div className="w-3 h-12 bg-gradient-to-b from-gold to-gold-light rounded-t-full" />
                
                {/* Flame */}
                <AnimatePresence>
                  {isLit && (
                    <motion.div
                      initial={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                      transition={{ duration: 0.3, repeat: isLit ? Infinity : 0 }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2"
                    >
                      <div className="w-4 h-6 bg-gradient-to-t from-gold via-gold to-primary rounded-full animate-candle-flicker shadow-heart" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click hint */}
                {isLit && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap"
                  >
                    💨
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Cake layers */}
          <motion.div
            className="relative cursor-pointer"
            onClick={cutCake}
            whileHover={!isCut ? { scale: 1.02 } : {}}
          >
            {/* Top layer */}
            <div className="w-48 h-16 bg-gradient-to-b from-rose-medium to-rose-deep rounded-t-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-x-0 top-2 h-2 bg-primary-foreground/30 rounded" />
              <div className="absolute inset-x-0 top-6 h-1 bg-primary-foreground/20 rounded" />
              {/* Frosting drips */}
              <div className="absolute -bottom-2 left-4 w-3 h-4 bg-rose-light rounded-b-full" />
              <div className="absolute -bottom-3 left-12 w-4 h-5 bg-rose-light rounded-b-full" />
              <div className="absolute -bottom-2 right-8 w-3 h-4 bg-rose-light rounded-b-full" />
            </div>

            {/* Middle layer */}
            <div className="w-56 h-14 bg-gradient-to-b from-rose-light to-rose-medium rounded-b-lg mx-auto relative">
              <div className="absolute inset-x-4 top-4 h-1 bg-gold/40 rounded" />
            </div>

            {/* Bottom layer / plate */}
            <div className="w-64 h-4 bg-gold-light rounded-full mx-auto shadow-lg" />

            {/* Cut slice */}
            <AnimatePresence>
              {isCut && (
                <motion.div
                  initial={{ x: 0, rotate: 0, opacity: 1 }}
                  animate={{ x: 80, rotate: 15, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-0 right-0 w-12"
                >
                  <div className="w-12 h-16 bg-gradient-to-br from-rose-medium to-rose-deep rounded-tr-3xl" 
                       style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }} />
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-light to-rose-medium rounded-br-lg"
                       style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Swipe hint */}
            {!isCut && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-muted-foreground mt-4 font-body"
              >
                👆 Tap the cake to cut it!
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Instructions / Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center z-10"
      >
        {!allCandlesOut && (
          <p className="text-muted-foreground font-body text-sm">
            💨 Click on the candles to blow them out!
          </p>
        )}
        {allCandlesOut && !isCut && (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-primary font-romantic text-xl"
          >
            Yayyy! Now cut the cake! 🎉
          </motion.p>
        )}
        {isCut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-primary font-romantic text-2xl">
              🎊 Perfect! Time to celebrate! 🎊
            </p>
            <motion.button
              onClick={onComplete}
              className="romantic-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue 💕
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Confetti burst */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: "50%",
                top: "40%",
              }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {["🎉", "🎊", "✨", "💗", "🎈", "🌟"][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CakeCelebration;
