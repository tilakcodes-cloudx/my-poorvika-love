import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "@/components/LoginPage";
import GreetingSequence from "@/components/GreetingSequence";
import PhotoGallery from "@/components/PhotoGallery";
import CakeCelebration from "@/components/CakeCelebration";
import FeedFirstCake from "@/components/FeedFirstCake";
import FinalMessage from "@/components/FinalMessage";

type Stage = "login" | "greetings" | "gallery" | "cake" | "feed" | "final";

const Index = () => {
  const [stage, setStage] = useState<Stage>("login");

  const renderStage = () => {
    switch (stage) {
      case "login":
        return <LoginPage onLogin={() => setStage("greetings")} />;
      case "greetings":
        return <GreetingSequence onComplete={() => setStage("gallery")} />;
      case "gallery":
        return <PhotoGallery onComplete={() => setStage("cake")} />;
      case "cake":
        return <CakeCelebration onComplete={() => setStage("feed")} />;
      case "feed":
        return <FeedFirstCake onComplete={() => setStage("final")} />;
      case "final":
        return <FinalMessage />;
      default:
        return <LoginPage onLogin={() => setStage("greetings")} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {renderStage()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
