import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IntroSection } from '@/components/IntroSection';
import { HeroSection } from '@/components/HeroSection';
import { ApologySection } from '@/components/ApologySection';
import { MemoriesSection } from '@/components/MemoriesSection';
import { NoureenApology } from '@/components/NoureenApology';
import { PoetrySection } from '@/components/PoetrySection';
import { CatGallery } from '@/components/CatGallery';
import { PromiseSection } from '@/components/PromiseSection';
import { FinalSection } from '@/components/FinalSection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    apology: useRef<HTMLDivElement>(null),
    memories: useRef<HTMLDivElement>(null),
    noureen: useRef<HTMLDivElement>(null),
    promise: useRef<HTMLDivElement>(null)
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroSection onComplete={handleIntroComplete} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      <div ref={sectionRefs.hero}>
        <HeroSection onNavigate={scrollToSection} />
      </div>
      
      <div ref={sectionRefs.apology}>
        <ApologySection />
      </div>
      
      <div ref={sectionRefs.memories}>
        <MemoriesSection />
      </div>
      
      <PoetrySection />
      
      <CatGallery />
      
      <div ref={sectionRefs.noureen}>
        <NoureenApology />
      </div>
      
      <div ref={sectionRefs.promise}>
        <PromiseSection />
      </div>
      
      <FinalSection />
    </motion.div>
  );
};

export default Index;
