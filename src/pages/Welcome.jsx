import { motion } from 'framer-motion';
// 1. Import your static picture 
import dollyImage from '../assets/dolly-animations/dolly-happy.png'; // Update the extension if it is a .jpg
import welcomeImage from '../assets/Pictures/Welcome.jpg'; // Update the extension if it is a .jpg
export default function Welcome({ onNext }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 p-6 text-center">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 flex flex-col items-center"
      >
        
        {/* The Custom Dolly Picture */}
        <motion.img
          src={dollyImage} 
          alt="Our cute dog"
          className="w-40 h-40 object-contain mb-4" /* Keeping the larger, borderless style */
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        
        {/* The Anniversary Text */}
        <motion.h1 
          className="text-4xl md:text-5xl font-serif text-pink-600 font-bold mb-6 drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Happy Anniversary My Love!
        </motion.h1>

        {/* The Picture of Us */}
        <motion.div 
          className="w-full aspect-square rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <img
            src={welcomeImage}
            alt="The two of us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* The Continue Button */}
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-colors"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Begin Our Journey
        </motion.button>

      </motion.div>
    </div>
  );
}