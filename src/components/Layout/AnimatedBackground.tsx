import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Yin-Yang inspired background element */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full filter blur-sm">
          {/* Yin-Yang shape */}
          <circle cx="100" cy="100" r="80" fill="currentColor" className="text-foreground"/>
          <path d="M100 20 A40 40 0 0 1 100 100 A40 40 0 0 0 100 180 A80 80 0 0 0 100 20" fill="currentColor" className="text-background"/>
          <circle cx="100" cy="60" r="20" fill="currentColor" className="text-background"/>
          <circle cx="100" cy="140" r="20" fill="currentColor" className="text-foreground"/>
          
          {/* Brush stroke effect */}
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="8" className="text-foreground opacity-30" strokeDasharray="20 10"/>
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="4" className="text-foreground opacity-20" strokeDasharray="30 15"/>
        </svg>
      </motion.div>

      {/* Additional subtle animated elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 left-1/4 w-32 h-32 opacity-3"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" strokeDasharray="5 5"/>
        </svg>
      </motion.div>

      {/* Subtle gradient blobs for depth */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-t from-foreground/5 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
};

export default AnimatedBackground;