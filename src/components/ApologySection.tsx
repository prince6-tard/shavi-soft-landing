import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const ApologySection = () => {
  const commitments = [
    "Communicate honestly, even when it's hard",
    "Be present and on time, always",
    "Listen without interrupting or defending",
    "Seek therapy and guidance for growth",
    "Write weekly check-in notes to stay connected"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            My Apology to You
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 shadow-romantic border-romantic-rose/20 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl font-body leading-relaxed text-foreground mb-6">
                I made mistakes that hurt you deeply. I wasn't present when you needed me, 
                I dismissed your feelings, and I let my own insecurities create distance between us. 
                It was wrong, and it made you feel unheard and unvalued.
              </p>
              
              <p className="text-lg md:text-xl font-body leading-relaxed text-foreground">
                You deserve better. I'm not asking for a reset—just a chance to show 
                I've learned and changed. You mean everything to me, and I want to be 
                the partner you deserve.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-8 text-foreground">
            My Commitments to Change
          </h3>
          
          <div className="grid gap-4 md:gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-soft hover:shadow-romantic transition-all duration-300 border-romantic-lavender/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-romantic-rose mr-4 animate-heartbeat" />
                    <p className="text-lg font-body text-foreground">{commitment}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};