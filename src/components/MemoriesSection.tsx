import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import shavi from '@/assets/shavi.jpg.webp';
import shavikiss from '@/assets/shavikiss.mp4';
import hands from '@/assets/hands.mp4';
import annoyed from '@/assets/annoyed.mp4';
import { Volume2, VolumeX } from 'lucide-react';
import joji from '@/assets/joji.mp4';
// Prayer images moved to NoureenApology section
import retard from '@/assets/retard.mp4'






export const MemoriesSection = () => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [mutedByIndex, setMutedByIndex] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    let currentPlaying: HTMLVideoElement | null = null;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Pause any other playing video to conserve resources
          if (currentPlaying && currentPlaying !== video && !currentPlaying.paused) {
            currentPlaying.pause();
          }
          currentPlaying = video;
          // Safe autoplay when muted
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0, 0.5, 1],
      rootMargin: '0px 0px -10% 0px',
    });

    videos.forEach((v) => observer.observe(v));

    return () => {
      videos.forEach((v) => observer.unobserve(v));
      observer.disconnect();
    };
  }, []);
  const memories = [
    {
      image: shavi,

      title: "First Monsoon Walk",
      description: "You laughed at thunder and I felt safe. Even in the storm, you brought me peace.",
      emotion: "🌧️"
    },
    {
      video: shavikiss,
      title: "First brave kiss",
      description: "You kissed me first. I want to learn to steady you too when you need it.",
      emotion: "😘"

    },
    {
      video: hands, // Reusing for now, can be replaced
      title: "hand of the lovers",
      description: "I named her monsoon. I still check the roof when it rains, thinking of that moment.",
      emotion: "😍"

    },
    {
      video: annoyed, // Reusing for now, can be replaced
      title: "Annoying her was important",
      description: "I use annoy her cuz use to look at me as a dissapointed mother she indeed was my mother",
      emotion: "😠"

    },
    {
      video: joji, // Reusing for now, can be replaced
      title: "The moments i miss",
      description: "how can someoneg back to whats's ur polital ideology after expriencing this ",
      emotion: "❤️"

    },
    {
      video: retard, // Reusing for now, can be replaced
      title: "The retard misses u",
      description: "please forgive the retard he was scared to lose u im sorry im cryng while making this ",
      emotion: "😭"

    }

  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            Our Beautiful Memories
          </h2>
          <p className="text-xl font-body text-center mb-16 text-muted-foreground max-w-2xl mx-auto">
            These moments remind me of what we built together, and what I want to protect and nurture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden shadow-romantic hover:shadow-xl transition-all duration-500 border-romantic-rose/20 bg-card/90 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  {memory.image ? (
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : memory.video ? (
                    <>
                      <video 
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={memory.video} 
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        loop 
                        muted 
                        playsInline
                        preload="metadata"
                      />
                      <button
                        type="button"
                        aria-label={(mutedByIndex[index] ?? true) ? 'Unmute video' : 'Mute video'}
                        onClick={() => {
                          const video = videoRefs.current[index];
                          if (!video) return;
                          const nextMuted = !video.muted;
                          video.muted = nextMuted;
                          if (!nextMuted) {
                            video.volume = 1;
                            video.play().catch(() => {});
                          }
                          setMutedByIndex((prev) => ({ ...prev, [index]: nextMuted }));
                        }}
                        className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        {(mutedByIndex[index] ?? true) ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 text-3xl animate-float">
                    {memory.emotion}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {memory.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {memory.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};