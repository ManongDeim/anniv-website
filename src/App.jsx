import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Import all your beautiful pages
import Finale from './pages/Finale'; // Your new ending page!
import Memories from './pages/Memories';
import Message from './pages/Message'; // Your new postcard page!
import Welcome from './pages/Welcome';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  // The linear flow of your SPA, updated to remove the mini-game
  const screens = [
    <Welcome key="welcome" onNext={() => setCurrentStep(1)} />,
    <Memories key="memories" onNext={() => setCurrentStep(2)} />,
    <Message key="message" onNext={() => setCurrentStep(3)} />,
    <Finale key="finale" />
  ];

  return (
    <div className="min-h-screen bg-pink-50 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStep} 
          initial={{ opacity: 0, filter: "blur(10px)" }} 
          animate={{ opacity: 1, filter: "blur(0px)" }} 
          exit={{ opacity: 0, filter: "blur(10px)" }} 
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          className="w-full h-full absolute top-0 left-0" 
        >
          {screens[currentStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}