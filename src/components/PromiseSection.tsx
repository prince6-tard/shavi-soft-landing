import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';


export const PromiseSection = () => {
  const timeline = [
    {
      period: "30 Days",
      action: "Daily journal, no stonewalling",
      description: "I'll write daily about my emotions and commit to open communication",
      icon: "📝"
    },
    {
      period: "60 Days",
      action: "Therapy sessions begun",
      description: "Professional help to understand and change harmful patterns",
      icon: "🧠"
    },
    {
      period: "90 Days",
      action: "Relationship check-in dinner",
      description: "A special evening we plan together to assess our progress",
      icon: "🍽️"
    },
    {
      period: "Ongoing",
      action: "Weekly connection rituals",
      description: "Regular check-ins, date nights, and intentional quality time",
      icon: "💕"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-6 sm:mb-8 md:mb-12 text-foreground">
            My Promise & Timeline
          </h2>
          <p className="text-lg sm:text-xl font-body text-center mb-8 sm:mb-12 md:mb-16 text-muted-foreground max-w-2xl mx-auto">
            These aren't just words—they're commitments with deadlines and accountability.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-romantic opacity-60" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 w-4 h-4 bg-romantic-rose rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ["0 0 0 0 hsl(var(--romantic-rose) / 0.3)", "0 0 0 10px hsl(var(--romantic-rose) / 0)", "0 0 0 0 hsl(var(--romantic-rose) / 0)"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <div className="ml-16">
                  <Card className="shadow-soft hover:shadow-romantic transition-all duration-300 border-romantic-lavender/20 bg-card/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-heading font-semibold text-romantic-rose mb-1">
                            {item.period}
                          </h3>
                          <h4 className="text-lg font-body font-medium text-foreground">
                            {item.action}
                          </h4>
                        </div>
                        <motion.span 
                          className="text-3xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground font-body">
                        {item.description}
                      </p>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center mt-4 text-romantic-rose"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Commitment Made</span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};