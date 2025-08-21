import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { FloatingElements } from './FloatingElements';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const navigationButtons = [
    { id: 'apology', label: 'Read My Apology', icon: '💌' },
    { id: 'memories', label: 'Our Memories', icon: '💭' },
    { id: 'promise', label: 'A Promise', icon: '🤞' },
    { id: 'noureen', label: 'Apology to Noureen', icon: '🙏' },
  ];

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingElements />
        </Canvas>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Shavi, I'm Sorry.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-body mb-12 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I hurt you, and I take responsibility.<br />
          Please read this when you're ready.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {navigationButtons.map((button, index) => (
            <motion.div
              key={button.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => onNavigate(button.id)}
                variant="secondary"
                className="w-full h-16 text-lg font-medium bg-card/80 backdrop-blur-sm hover:bg-card/90 shadow-soft border border-border/50 hover:shadow-romantic transition-all duration-300"
              >
                <span className="mr-3 text-2xl">{button.icon}</span>
                {button.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};