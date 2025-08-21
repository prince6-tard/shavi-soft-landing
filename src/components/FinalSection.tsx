import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MessageCircle } from 'lucide-react';

export const FinalSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 shadow-romantic border-romantic-cream/30 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Handwritten-style signature */}
                <svg 
                  width="200" 
                  height="60" 
                  viewBox="0 0 200 60" 
                  className="mx-auto mb-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M20 40 Q30 20, 50 30 T90 25 Q110 15, 130 35 T170 30"
                    stroke="hsl(var(--romantic-rose))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="175"
                    cy="32"
                    r="2"
                    fill="hsl(var(--romantic-rose))"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                  />
                </svg>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl font-body leading-relaxed text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                If you can't forgive me now, I'll understand. This page will stay here 
                as proof that I'm doing the work. You matter to me, Shavi—today and always.
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-body italic text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Every sunrise reminds me of your smile,<br />
                Every sunset, of my promise to do better.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: If she forgives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-romantic border-romantic-cream/30 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-romantic-rose mb-4">What If You Forgive Me?</h3>
                <p className="font-body text-foreground">
                  We build a beautiful family, filled with laughter, understanding, and the unconditional love we've both learned to cherish. Our home is a sanctuary, a testament to our growth and the unwavering power of our bond.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: If she doesn't forgive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-romantic border-romantic-cream/30 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-romantic-rose mb-4">What If You Don't?</h3>
                  <p className="font-body text-foreground">
                    I'll spend my life carrying the lessons you taught me. One day, I'll adopt a little girl and name her Shavi. I'll tell her the story of a prince who loved a princess so much that even when he lost her, he honored her name forever.
                  </p>
                </div>
                <div className="flex-grow flex items-end justify-center">
                    <svg width="100" height="50" viewBox="0 0 100 50" className="mx-auto mt-4">
                        {/* Stick figure body */}
                        <motion.line x1="20" y1="40" x2="80" y2="40" stroke="hsl(var(--romantic-gray))" strokeWidth="2" />
                        {/* Stick figure head */}
                        <motion.circle cx="30" cy="30" r="5" stroke="hsl(var(--romantic-gray))" strokeWidth="2" fill="none" />
                        {/* Tears */}
                        <motion.path
                            d="M28 32 q 2 5, 0 10"
                            stroke="hsl(var(--romantic-rose))"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.path
                            d="M32 32 q 2 5, 0 10"
                            stroke="hsl(var(--romantic-rose))"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        />
                    </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-heading font-semibold text-white mb-6">
            Ready to talk?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.location.href = 'mailto:priyanshutiwari1010@gmail.com?subject=I%20read%20your%20apology'}
                className="bg-white text-romantic-rose hover:bg-romantic-cream transition-colors px-8 py-3 text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.location.href = 'https://wa.me/919219300977?text=I%20read%20your%20apology%20website'}
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white transition-all px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </motion.div>
                WhatsApp
              </Button>
            </motion.div>
          </div>

          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/80 text-sm font-body mt-8"
          >
            💕 Made with love, regret, and hope 💕
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};