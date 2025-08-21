import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';

export const MemoriesSection = () => {
  const memories = [
    {
      image: memory1,
      title: "First Monsoon Walk",
      description: "You laughed at thunder and I felt safe. Even in the storm, you brought me peace.",
      emotion: "🌧️"
    },
    {
      image: memory2,
      title: "Study-Date Panic",
      description: "You stayed while I spiraled. I want to learn to steady you too when you need it.",
      emotion: "📚"
    },
    {
      image: memory1, // Reusing for now, can be replaced
      title: "Cat on the Roof",
      description: "We named her Chai. I still check the roof when it rains, thinking of that moment.",
      emotion: "🐱"
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
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
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