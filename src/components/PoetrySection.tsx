import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const PoetrySection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-romantic border-romantic-rose/30 bg-gradient-to-br from-romantic-cream to-romantic-lavender/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center relative">
              {/* Decorative rose */}
              <motion.div
                className="absolute top-4 right-4 text-romantic-rose opacity-40"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                🌹
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground mb-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    I broke a blue thing in us—
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    a quiet vase of mornings.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    I'll learn to carry the cup of us
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    with both hands, this time.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-sm font-body italic text-muted-foreground"
                >
                  — inspired by the depth of regret and hope
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};