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
                onClick={() => window.location.href = 'mailto:your.email@example.com?subject=I%20read%20your%20apology'}
                className="bg-white text-romantic-rose hover:bg-romantic-cream transition-colors px-8 py-3 text-lg font-medium shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.location.href = 'https://wa.me/yourphonenumber?text=I%20read%20your%20apology%20website'}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-romantic-rose transition-colors px-8 py-3 text-lg font-medium"
              >
                <Heart className="w-5 h-5 mr-2" />
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