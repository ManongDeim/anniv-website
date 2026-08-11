
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
// Import a photo to act as the postcard stamp
import stampPhoto from '../assets/Pictures/Adventures/Dagat Trip/Dagat Trip (4).jpg';

export default function Message({ onNext }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Floating background hearts for a romantic vibe */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-20 left-20 text-pink-300 opacity-50"><Heart size={40} /></motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-20 right-20 text-pink-300 opacity-50"><Heart size={60} /></motion.div>

      {/* The Postcard Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-4xl w-full bg-[#fdfbf7] rounded-sm shadow-2xl overflow-hidden relative border border-gray-100"
      >
        {/* Postcard content wrapper: Flex column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row min-h-[500px]">
          
          {/* LEFT SIDE: The Message */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-pink-600 mb-6 border-b border-pink-200 pb-2 inline-block">
              My Dearest...
            </h2>
            <div className="text-gray-700 font-serif leading-relaxed text-lg md:text-xl space-y-4">
              <p>
                Through all our fears and doubts, our joy and triumps, our constants and maybes. I look back and am grateful for it all, because it led us to what we are today. It helped us grew into the people we are, and it brought us together in a way that is uniquely ours. 
              </p>
              <p>
                If I would go back, and do it all again, everything from our lowest to our highest. I would, without a second thought, nor a doubt in my heart, because I know that it would lead me to you, and to us. And I would not trade that for anything in the world.
              </p>
              <p>
                Here is to all the chapters we've written, and to the beautiful story we are still writing together.
              </p>
            </div>
            <p className="mt-8 text-xl font-serif text-pink-600 italic">
              Forever yours, <br/>
              Deim
            </p>
          </div>

          {/* MIDDLE: Dashed Divider (Hidden on mobile) */}
          <div className="hidden md:block w-0 border-l-2 border-dashed border-gray-300 my-10"></div>

          {/* RIGHT SIDE: Address and Stamp */}
          <div className="flex-1 p-8 md:p-12 flex flex-col relative">
            
            {/* The Stamp */}
            <div className="self-end bg-white p-2 shadow-sm border border-gray-200 transform rotate-3">
              <div className="w-20 h-24 md:w-24 md:h-32 overflow-hidden bg-gray-100">
                <img src={stampPhoto} alt="Stamp" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Faux Address Lines */}
            <div className="mt-auto mb-16 space-y-6">
              <div className="w-full h-px border-b-2 border-gray-300"></div>
              <div className="w-3/4 h-px border-b-2 border-gray-300"></div>
              <div className="w-5/6 h-px border-b-2 border-gray-300"></div>
            </div>

            {/* Continue Button */}
            <button 
              onClick={onNext}
              className="mt-auto self-center md:self-end px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 font-semibold transition shadow-lg flex items-center gap-2 group"
            >
              Turn the page <Heart size={18} className="group-hover:scale-125 transition-transform" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}