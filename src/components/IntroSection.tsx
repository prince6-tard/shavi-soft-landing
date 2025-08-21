import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import metroImage from '@/assets/metro-interior.png';

interface IntroSectionProps {
  onComplete: () => void;
}

export const IntroSection = ({ onComplete }: IntroSectionProps) => {
  const [stage, setStage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 4000);
    const timer2 = setTimeout(() => setStage(2), 8000);
    const timer3 = setTimeout(() => setStage(3), 12000);
    const timer4 = setTimeout(() => setShowButton(true), 14000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute w-1 h-1 rounded-full ${
        stage >= 2 ? 'bg-romantic-rose' : 'bg-romantic-gray'
      }`}
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: Math.random() * window.innerHeight,
        opacity: 0.3
      }}
      animate={{
        y: [null, -20, 20, -20],
        opacity: stage >= 2 ? [0.3, 0.8, 0.3] : [0.3, 0.6, 0.3],
        scale: stage >= 2 ? [1, 1.5, 1] : [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }}
    />
  ));

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ background: 'linear-gradient(135deg, #374151, #1f2937)' }}
      animate={{
        background: stage >= 2 
          ? 'linear-gradient(135deg, hsl(var(--romantic-blush)), hsl(var(--romantic-lavender)), hsl(var(--romantic-cream)))'
          : stage >= 1
          ? 'linear-gradient(135deg, #6b7280, #9ca3af)'
          : 'linear-gradient(135deg, #374151, #1f2937)'
      }}
      transition={{ duration: 2.5 }}
    >
      {particles}
      
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="mb-8"
        >
          <motion.div
            className="w-80 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-romantic-gray/10 flex items-center justify-center"
            animate={{
              scale: stage >= 1 ? [1, 1.05, 1] : 1,
              filter: stage >= 2 ? 'grayscale(0%) saturate(120%)' : 'grayscale(100%) saturate(50%)'
            }}
            transition={{ duration: 2 }}
          >
            <img 
              src={metroImage} 
              alt="Metro train interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-2xl font-body mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            color: stage >= 2 ? 'hsl(var(--foreground))' : '#9ca3af'
          }}
          transition={{ delay: 1, duration: 1 }}
        >
          {stage === 0 && "In the dull metro train, I searched desperately for a charger..."}
          {stage === 1 && "Then she appeared — Shavi, like magic itself."}
          {stage >= 2 && "Then I met Shavi — and everything changed."}
        </motion.p>

        {stage >= 1 && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-romantic flex items-center justify-center shadow-romantic"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">🤝</span>
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
              className="bg-gradient-romantic hover:scale-105 transition-transform duration-300 shadow-romantic px-8 py-3 text-lg font-medium animate-gentle-bounce"
            >
              Enter Shavi's World
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};