import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const NoureenApology = () => {
  const commitments = [
    "Never dismiss your concerns about our relationship",
    "Earn respect through consistency, not words",
    "Keep peace, not add pain to your friendship",
    "Acknowledge your role as Shavi's protector"
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
            Noureen, I Owe You an Apology Too
          </h2>
          <p className="text-xl font-body text-center mb-12 text-muted-foreground">
            You've stood by Shavi and saw the way I hurt her. I hurt you by extension too.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mb-12 shadow-romantic border-romantic-lavender/20 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl font-body leading-relaxed text-foreground mb-6">
                I know I cost you trust and patience. But I see you, and I respect you 
                for protecting Shavi when I failed to. You're the kind of friend everyone 
                deserves, and I let my actions create tension between all of us.
              </p>
              
              <p className="text-lg md:text-xl font-body leading-relaxed text-foreground">
                I'll do better—not just for her, but for the people she loves. Including you.
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