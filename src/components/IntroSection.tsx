import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import metroImage from '@/assets/metro-interior.png';
import { Heart } from 'lucide-react';

interface IntroSectionProps {
  onComplete: () => void;
}

// Framer Motion variants for text animation
const sentenceVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04, // Controls the speed of letter appearance
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const IntroSection = ({ onComplete }: IntroSectionProps) => {
  const [stage, setStage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const texts = [
    "In the dull metro train, I searched desperately for a charger...",
    "Then she appeared — Shavi, like magic itself.",
    "Then I met Shavi — and everything changed.",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    // Timers to control the stages of the intro animation
    const timers = [
      setTimeout(() => {
        setStage(1);
        setCurrentText(texts[1]);
      }, 5000), // Stage 1 after 5 seconds
      setTimeout(() => {
        setStage(2);
        setCurrentText(texts[2]);
      }, 10000), // Stage 2 after 10 seconds
      setTimeout(() => setShowButton(true), 12000), // Show button after 12 seconds
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Creates an array of floating heart particles for the background
  const particles = Array.from({ length: 25 }).map((_, i) => {
    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 5 + 5;
    return (
      <motion.div
        key={i}
        className="absolute text-romantic-rose"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 20,
          opacity: 0,
        }}
        animate={{
          y: -20, // Float up
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear",
        }}
        style={{
            fontSize: `${size}px`
        }}
      >
        <Heart fill="currentColor" />
      </motion.div>
    );
  });


  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-800"
      // Animate background gradient based on the current stage
      animate={{
        background: stage >= 2
          ? 'linear-gradient(135deg, hsl(var(--romantic-blush)), hsl(var(--romantic-lavender)), hsl(var(--romantic-cream)))'
          : stage >= 1
          ? 'linear-gradient(135deg, #6b7280, #9ca3af)'
          : 'linear-gradient(135deg, #374151, #1f2937)'
      }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <AnimatePresence>
        {stage >= 1 && <div className="absolute inset-0 z-0">{particles}</div>}
      </AnimatePresence>
      
      <div className="text-center z-10 px-6">
        <motion.div
          className="relative w-80 h-48 mx-auto mb-8 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {/* Vignette effect that fades out */}
          <motion.div
            className="absolute inset-0 bg-black z-10"
            animate={{
              opacity: stage >= 2 ? 0 : 0.4,
            }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={metroImage}
            alt="Metro train interior"
            className="w-full h-full object-cover"
            // Animate scale and grayscale filter for a cinematic effect
            animate={{
              scale: stage >= 1 ? 1.1 : 1,
              filter: stage >= 2 ? 'grayscale(0%)' : 'grayscale(100%)'
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
            {/* Animate text letter by letter */}
            <motion.p
                key={currentText}
                className="text-2xl font-body mb-8 max-w-2xl mx-auto min-h-[96px]"
                variants={sentenceVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{
                    color: stage >= 2 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))'
                }}
            >
                {currentText.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariant}>
                        {char}
                    </motion.span>
                ))}
            </motion.p>
        </AnimatePresence>


        {stage >= 1 && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Animated glowing heart icon */}
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-romantic flex items-center justify-center shadow-romantic"
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                    "0 0 0 0 hsla(var(--romantic-rose), 0.5)",
                    "0 0 0 15px hsla(var(--romantic-rose), 0)",
                    "0 0 0 0 hsla(var(--romantic-rose), 0)",
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-8 h-8 text-white" fill="white" />
            </motion.div>
          </motion.div>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Button
              onClick={onComplete}
              className="bg-gradient-romantic hover:scale-105 transition-transform duration-300 shadow-romantic px-8 py-4 text-lg font-medium animate-gentle-bounce"
            >
              Enter Shavi's World
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
