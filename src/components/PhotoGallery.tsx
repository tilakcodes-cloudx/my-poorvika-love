import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

interface PhotoGalleryProps {
  onComplete: () => void;
}

// Placeholder photos - user will upload later
const photos = [
  { id: 1, caption: "My pretty girl 💗", placeholder: "🌸" },
  { id: 2, caption: "My universe 🌍", placeholder: "🌷" },
  { id: 3, caption: "My cutieee 🥰", placeholder: "🌹" },
  { id: 4, caption: "Her smile >>>> everything 💫", placeholder: "🌺" },
  { id: 5, caption: "My sunshine ☀️", placeholder: "🌻" },
  { id: 6, caption: "Forever mine 💝", placeholder: "🪻" },
];

const PhotoGallery = ({ onComplete }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const prevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-romantic flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={15} />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-romantic text-foreground mb-8 text-center glow-text z-10"
      >
        Our Beautiful Memories 📸
      </motion.h1>

      <div className="relative w-full max-w-lg z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: 30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="romantic-card p-6 md:p-8"
          >
            {/* Photo placeholder - replace with actual images */}
            <div className="aspect-[4/5] bg-secondary rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="text-8xl">{photos[currentIndex].placeholder}</div>
              
              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-primary/20 rounded-xl pointer-events-none" />
              
              {/* Photo upload hint */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-xs text-muted-foreground font-body">
                  📷 Photo {currentIndex + 1} - Upload your image here
                </p>
              </div>
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-romantic text-center text-foreground"
            >
              {photos[currentIndex].caption}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6 px-4">
          <motion.button
            onClick={prevPhoto}
            disabled={currentIndex === 0}
            className={`romantic-button px-6 py-2 text-sm ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={currentIndex > 0 ? { scale: 1.05 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          {/* Progress */}
          <div className="flex gap-2">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-4"
                    : index < currentIndex
                    ? "bg-primary/60"
                    : "bg-primary/30"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPhoto}
            className="romantic-button px-6 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentIndex === photos.length - 1 ? "Continue 🎂" : "Next →"}
          </motion.button>
        </div>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-4xl"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        🌸
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
