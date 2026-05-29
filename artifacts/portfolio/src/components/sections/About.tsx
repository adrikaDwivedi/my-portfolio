import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-4xl font-bold mb-4">The <span className="text-gradient-violet">Story</span></h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I didn't just learn to code; I learned to craft. My journey started with a fascination for how digital products make people feel. Today, I channel that passion into building robust cross-platform applications and precise, responsive web interfaces.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mt-6">
            Whether I'm architecting a React Native app from scratch or fine-tuning a complex UI animation, my goal is the same: absolute polish. I'm obsessed with user-focused products where every interaction feels intentional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
