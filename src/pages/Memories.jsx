import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { albums } from '../data/memoriesData';

// VITE SUPERPOWER: Grabs every image path at build time
const allImages = import.meta.glob('../assets/Pictures/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  query: '?url',
  import: 'default'
});

export default function Memories({ onNext }) {
  // 1. ALL HOOKS AT THE TOP LEVEL
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const tableRef = useRef(null);
// 2. We calculate the random photos up here! 
  const randomizedPhotos = useMemo(() => {
    if (!selectedAlbum) return [];

    const albumData = albums.find(a => a.id === selectedAlbum);
    if (!albumData) return [];

    const allEntries = Object.entries(allImages);
    const albumPhotos = [];

    allEntries.forEach(([originalPath, liveUrl]) => {
      const decodedPath = decodeURIComponent(originalPath);
      
      if (decodedPath.includes(`/${albumData.folderName}/`) && liveUrl !== albumData.coverImage) {
         
         // THE FIX: Check for the caption HERE, using the pristine original file path!
         let caption = "";
         if (albumData.specialCaptions) {
           Object.keys(albumData.specialCaptions).forEach(fileName => {
             if (decodedPath.includes(fileName)) {
               caption = albumData.specialCaptions[fileName];
             }
           });
         }
         
         // Save both the live URL and the caption we just found
         albumPhotos.push({ url: liveUrl, caption: caption });
      }
    });

    // Map the random positions
    return albumPhotos.map(photo => ({
      src: photo.url,
      caption: photo.caption, // Pass the caption down!
      rotation: Math.random() * 40 - 20,
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20
    }));
  }, [selectedAlbum]);

  // --- VIEW 1: The Main Grid of Albums ---
  const renderGrid = () => (
    <motion.div 
      key="grid"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      // 1. ADDED: flex, flex-col, and h-[calc(100vh-40px)]
      className="max-w-5xl w-full mx-auto p-6 relative z-10 flex flex-col h-[calc(100vh-40px)]"
    >
      
      {/* 2. ADDED: flex-shrink-0 to lock the header */}
      <div className="flex justify-between items-end mb-8 flex-shrink-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 font-bold drop-shadow-sm">Our Memories</h2>
          <p className="text-pink-400 mt-2 text-lg">Pick a chapter of our story...</p>
        </div>
        
        <button 
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 font-semibold transition shadow-md"
        >
          Next Chapter <ArrowRight size={20} />
        </button>
      </div>

      {/* 3. ADDED: overflow-y-auto and pb-20 for the scrolling grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-20 pr-4">
        {albums.map((album) => (
          <motion.div
            key={album.id}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedAlbum(album.id)}
            className="bg-white/60 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-white/50 cursor-pointer group"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img 
                src={album.coverImage} 
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-colors duration-300 flex items-center justify-center">
                <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} fill="currentColor" />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-pink-600 font-bold text-center">{album.title}</h3>
            <p className="text-gray-500 text-center mt-1">{album.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

// --- VIEW 2: The Messy Polaroid Pile ---
  const renderAlbum = () => {
    const albumData = albums.find(a => a.id === selectedAlbum);
    
    return (
      <motion.div 
        key="album"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full h-full flex flex-col p-6 absolute inset-0 z-20 bg-gradient-to-b from-pink-50 to-pink-100"
      >
        <div className="flex justify-between items-center mb-4 z-50">
          <button 
            onClick={() => setSelectedAlbum(null)}
            className="flex items-center gap-2 text-pink-500 hover:text-pink-700 font-semibold transition bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full shadow-md"
          >
            <ArrowLeft size={20} /> Back to Albums
          </button>
          <h2 className="text-3xl font-serif text-pink-600 font-bold bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full shadow-md">
            {albumData.title}
          </h2>
        </div>

        {/* The "Table" where polaroids are scattered */}
        <div 
          ref={tableRef} 
          className="flex-grow w-full rounded-3xl border-2 border-dashed border-pink-200 relative overflow-hidden flex items-center justify-center"
        >
          {randomizedPhotos.length === 0 && (
            <p className="text-pink-400 font-serif text-xl">No extra photos found in this folder!</p>
          )}

          {/* Map through our pre-randomized array */}
          {randomizedPhotos.map((photo, index) => {
            
            // We simply grab the caption we calculated earlier!
            const caption = photo.caption;

            return (
              <motion.div
                key={index}
                drag
                dragConstraints={tableRef}
                whileHover={{ scale: 1.05, zIndex: 1000 }} 
                whileDrag={{ scale: 1.1, zIndex: 1000, cursor: 'grabbing' }}
                initial={{ opacity: 0, y: -200, rotate: photo.rotation }}
                animate={{ opacity: 1, y: photo.y, x: photo.x, rotate: photo.rotation }}
                transition={{ 
                  type: 'spring', 
                  damping: 15, 
                  delay: index * 0.05 
                }}
                className={`absolute bg-white p-4 shadow-xl rounded-sm cursor-grab border border-gray-100 w-48 md:w-64 ${caption ? 'pb-6' : 'pb-12'}`}
                style={{ zIndex: index }}
              >
                
                <div className="w-full aspect-square bg-gray-100 overflow-hidden pointer-events-none">
                  <img 
                    src={photo.src} 
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {caption && (
                  <p className="text-center font-serif mt-3 text-gray-700 text-sm md:text-base px-2 transform -rotate-1 pointer-events-none break-words">
                    {caption}
                  </p>
                )}
                
              </motion.div>
            );
          })}
        </div>
        <p className="text-center text-pink-400 mt-4 font-medium italic z-50">
          (Dig through the pile! Drag the photos to uncover more.)
        </p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col pt-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {selectedAlbum === null ? renderGrid() : renderAlbum()}
      </AnimatePresence>
    </div>
  );
}