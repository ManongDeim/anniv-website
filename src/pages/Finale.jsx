import { motion } from 'framer-motion';
// Using the 'us.jpg' photo you set up earlier!
import usPhoto from '../assets/Pictures/us.jpeg';

export default function Finale() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        {/* The Final Framed Picture */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-white p-4 shadow-2xl rounded-sm rotate-[-2deg] mb-10">
          <div className="w-full h-full overflow-hidden border border-gray-100">
            <img 
              src={usPhoto} 
              alt="You and Me" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* The Big Message */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-6xl md:text-8xl font-serif text-pink-600 font-bold drop-shadow-sm text-center"
        >
          I Love You!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-pink-400 font-serif italic text-center"
        >
          Happy Anniversary.
        </motion.p>
      </motion.div>

    </div>
  );
}