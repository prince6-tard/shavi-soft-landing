import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import cat1 from '@/assets/cat-1.jpg';
import cat2 from '@/assets/cat-2.jpg';
import cat3 from '@/assets/cat-3.jpg';

export const CatGallery = () => {
  const cats = [
    {
      image: cat1,
      caption: "Certified meow-pology officer.",
      name: "Chief Whiskers"
    },
    {
      image: cat2,
      caption: "Will purr for forgiveness.",
      name: "Detective Mittens"
    },
    {
      image: cat3,
      caption: "Press paw to accept hug.",
      name: "Inspector Fluff"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-foreground">
            The Forgiveness Committee
          </h2>
          <p className="text-xl font-body text-center mb-16 text-muted-foreground">
            These experts in unconditional love are here to help our case.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden shadow-romantic hover:shadow-xl transition-all duration-500 border-romantic-rose/20 bg-card/95 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Floating heart */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    💕
                  </motion.div>
                </div>
                
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {cat.name}
                  </h3>
                  <p className="text-muted-foreground font-body italic leading-relaxed">
                    "{cat.caption}"
                  </p>
                  
                  {/* Paw prints */}
                  <motion.div
                    className="flex justify-center mt-4 space-x-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-romantic-rose opacity-60"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        🐾
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};