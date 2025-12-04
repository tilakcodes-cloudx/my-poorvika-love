import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().toLowerCase();
    
    if (trimmedName === "poorvika t" || trimmedName === "poorvika") {
      setError("");
      onLogin();
    } else {
      setError("Hehe… only my girl can enter 💗");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={20} />
      <Sparkles count={15} />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="romantic-card p-8 md:p-12 w-full max-w-md relative z-10"
      >
        <motion.div
          animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Heart decoration */}
          <motion.div 
            className="text-6xl text-center mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💝
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-romantic text-center text-foreground mb-2 glow-text">
            Welcome, Love
          </h1>
          
          <p className="text-center text-muted-foreground mb-8 font-body">
            This special place awaits you...
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-center text-sm font-body text-muted-foreground">
                Enter your name to enter...
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="Type your name here 💕"
                className="romantic-input w-full"
                autoFocus
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center text-primary font-body text-sm"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              className="romantic-button w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enter My Heart 💗
            </motion.button>
          </form>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 text-2xl animate-float">🌸</div>
          <div className="absolute -top-4 -right-4 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🌷</div>
          <div className="absolute -bottom-4 -left-4 text-2xl animate-float" style={{ animationDelay: '1s' }}>💐</div>
          <div className="absolute -bottom-4 -right-4 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🌹</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
