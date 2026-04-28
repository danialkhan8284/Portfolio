import { motion } from "motion/react";
import { Shield, Code, Database } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Passionate about building secure systems with defense-in-depth principles"
    },
    {
      icon: Code,
      title: "Backend & Python Development",
      description: "Crafting scalable REST APIs and automation solutions using Node.js, Express, and Python"
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "End-to-end MERN stack development with focus on robust architecture"
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            About <span className="text-[#00ff41]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00d9ff] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
             I'm a developer with a passion for secure system design and backend architecture. My journey in tech combines the analytical mindset of cybersecurity with the creativity of full-stack development.

             Alongside working with modern web technologies, I actively use Python for backend development, automation, and building secure, efficient applications.

            </p>
            <p className="text-gray-400 leading-relaxed">
              
             Whether it's building RESTful APIs, implementing authentication systems, or exploring network security concepts, I'm driven by the challenge of creating robust, secure, and scalable solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00ff41]/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00ff41] to-[#00d9ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
