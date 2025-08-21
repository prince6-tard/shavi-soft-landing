import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import noureen from '@/assets/noureen.mp4'
import allahImage from '@/assets/ChatGPT Image Aug 21, 2025, 08_52_03 PM.png';
import ganeshImage from '@/assets/ChatGPT Image Aug 21, 2025, 08_56_48 PM.png';

export const NoureenApology = () => {
  const apologyVideoRef = useRef<HTMLVideoElement | null>(null);
  const [apologyVideoMuted, setApologyVideoMuted] = useState(true);

  const toggleApologyVideoMute = () => {
    const video = apologyVideoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setApologyVideoMuted(nextMuted);
  };
  const commitments = [
    "Never dismiss your concerns about our relationship",
    "Earn respect through consistency, not words",
    "Keep peace, not add pain to your friendship",
    "Acknowledge your role as Shavi's protector"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-soft">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-ink mb-3 sm:mb-4 text-red-500 hover:text-red-900">
            Noureen, I Owe You an Apology Too
          </h2>
           <p className="text-ink/70  text-pretty text-sm mb-6 sm:mb-8 ">
            You've been there for Shavi, and you see her everyday you notice everything sometimes unknowingly i hurted her. I also hurt you by extension, and that wasn't fair.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-romantic border-romantic-rose/20 bg-card/90 backdrop-blur-sm mb-10">
            <div className="relative overflow-hidden">
              <div className="w-full aspect-video bg-black">
                <video
                  ref={apologyVideoRef}
                  src={noureen}
                  className="h-full w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <button
                type="button"
                aria-label={apologyVideoMuted ? 'Unmute video' : 'Mute video'}
                onClick={toggleApologyVideoMute}
                className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {apologyVideoMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
            <CardContent className="p-4 sm:p-6 text-center">
              <p className="text-muted-foreground font-body italic">
                A small memory to say sorry.
              </p>
            </CardContent>
          </Card>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-6 sm:mb-10 shadow-romantic border-romantic-lavender/20 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-8 md:p-12">
              <p className="text-base  mb-4 sm:mb-6 font-inter font-body leading-relaxed text-foreground">
                I want you to know I see you, too. You matter, because you've always stood by her, protecting her when I failed. I respect you deeply for that. noureen i know u must be super mad about the things i said i was actually super mad cuz i waited for my love and she was not reply i thought ur stoping her ur not leting her talk to me.
              </p>
              <div className=''>
              <p className="text-base sm:text-lg md:text-xl font-body leading-relaxed text-foreground hover:text-violet-400">
                 Still what I said was not justified and its not an justification is an apology for u genuinely respect u pls forgive me if u can ur a pretty woman with a prettier heart yea but i will always be jeoulous of fact that u have shavi 24/7.</p>
                  <p className='mt-3 sm:mt-4 p-3 sm:p-4 bg-rose/20 rounded-md hover:text-red-500 text-sm sm:text-base'>I'M SORRY NOUREEN PLS MAAF KRDE MAINE GUSSE ME KYA KUCH NI BOLA TERI GALTI NI THI MERI THI MERI THI U ARE HER BESTFRIEND KEEP HER HAPPY AND PLS IM SORRY </p>
          </div>
           <div className="border-t border-rose/20 pt-6">
            <h3 className="font-playfair text-xl font-semibold text-ink mb-4">My Commitments to You</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-ink font-inter">I will never dismiss your concerns or influence on her life.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-ink font-inter">I will earn your respect by being consistent, not by words alone.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-rose rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-ink font-inter">I will protect the peace between us, never add to the pain.</p>
              </li>
            </ul>
          </div>

          <div className="border-t border-rose/20 pt-6 text-center">
            <p className="text-ink font-inter text-lg font-medium italic">
              Noureen, I may not deserve your forgiveness yet, but I wanted to acknowledge my mistake and thank you for being the kind of friend Shavi deserves.
            </p>
          </div>
              
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {[{
            src: allahImage,
          title: 'For Noureen --I prayed to Allah ji',
            caption: 'I visited allah ji noureen pls forgive me allah is all forgiving pls make shavi forgive me'
          },{
            src: ganeshImage,
            title: 'For Shavi — I prayed to Ganesh ji',
            caption: 'i prayed to ganesh ji remember once u said u will make me a believer i laughed u did it shavi pls forgive me'
          }].map((img, i) => (
            <Card key={i} className="overflow-hidden shadow-romantic border-romantic-rose/20 bg-card/90 backdrop-blur-sm">
              <div className="relative w-full bg-black">
                <div className="w-full aspect-[3/4]">
                  <img src={img.src} alt={img.title} className="h-full w-full object-contain" loading="lazy" decoding="async" />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-1">{img.title}</h4>
                <p className="text-muted-foreground italic">{img.caption}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 md:gap-6 mb-12">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-soft hover:shadow-romantic transition-all duration-300 border-romantic-rose/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-romantic-lavender mr-4 animate-heartbeat" />
                    <p className="text-lg font-body text-foreground">{commitment}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-romantic border-romantic-rose/30 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <p className="text-lg md:text-xl font-body italic text-foreground">
                "I may not deserve forgiveness yet, but thank you for being 
                the kind of friend Shavi deserves."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};