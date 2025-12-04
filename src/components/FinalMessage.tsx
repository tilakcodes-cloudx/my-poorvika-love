import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

const FinalMessage = () => {
  const message = `dont try to laugh idiot you know whhat let me tell you a secret "I LOVEEEEEEEEE YOUHHHHHH....!!!!!!!! POOOOOOOOORVIKAAAAAA.!!!! , hope your birthday goes really awesome my dear kothi mari ,child chapathhhhhh, my dearrrrr Sundriiiiiiiii, seeeee this is your first birthday adhikke isht efforts ahhh artha aytha amele idhe thara ning nin birthdays bek andhre nodu swalpa charges aaaguthe plus swalpa over love demand maaadthivi if your fine with that and varsha varsha iruthe illla andhreeeeeee nodko..., nang gothu bvc neeen illa anthya second ali un predictable idiot ever in my life thats the reason i love but hinge love maaadriiii madam avre... ohhhh ibve started blabbering my own kashta sukha leave that chorrry.....

i justed wanted to say that Neev yavathidhru nammoru Naavu nimmoru i love youhhh baby`;

  return (
    <div className="min-h-screen bg-romantic flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={20} />
      <Sparkles count={25} />

      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="romantic-card p-6 md:p-10 max-w-2xl w-full z-10 relative"
        style={{ perspective: "1000px" }}
      >
        {/* Letter envelope flap effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ rotateX: 180 }}
            animate={{ rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl"
          >
            💌
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          {/* Dear header */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-romantic text-primary mb-6"
          >
            My Dearest Poorvika,
          </motion.h2>

          {/* Message content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="relative"
          >
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-cream/30 rounded-lg" />
            
            <p className="font-romantic text-lg md:text-xl leading-relaxed text-foreground p-4 md:p-6 relative whitespace-pre-wrap">
              {message}
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-8 text-right"
          >
            <p className="font-romantic text-2xl md:text-3xl text-primary">
              Forever Yours,
            </p>
            <p className="font-romantic text-xl text-muted-foreground mt-2">
              Your Love 💗
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 left-4 text-2xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌹
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 text-2xl"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          🌹
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-4 text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          💕
        </motion.div>
      </motion.div>

      {/* Bottom hearts animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="mt-8 flex gap-4 z-10"
      >
        {["💗", "💖", "💝", "💘", "💕"].map((heart, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
            className="text-3xl md:text-4xl"
          >
            {heart}
          </motion.span>
        ))}
      </motion.div>

      {/* Final message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-6 text-center font-romantic text-xl md:text-2xl text-primary z-10"
      >
        Happy Birthday, My Love! 🎂💗✨
      </motion.p>
    </div>
  );
};

export default FinalMessage;
