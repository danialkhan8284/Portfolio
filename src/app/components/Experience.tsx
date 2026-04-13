import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Cyber Security Intern",
      organization: "TechToch Solutions",
      period: "June 2025 - Sept 2025",
      description: "I gained hands-on experience in real-world development and improved my technical and problem-solving skills."
    },
    {
      type: "work",
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      period: "Jun 2024 - Dec 2024",
      description: "Built full-stack MERN applications for small businesses with focus on security and performance."
    }
  ];

  const education = [
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      organization: "PMAS Arid Agriculture University Rawalpindi ",
      period: "2022 - 2026",
      description: "Specialized in Cybersecurity and Network Security. Relevant coursework: Network Security, Cryptography, Web Development."
    },
    {
      type: "education",
      title: "Certified Ethical Hacker (CEH) - In Progress",
      organization: "Coursera + TryHackMe",
      period: "2025",
      description: "Currently pursuing certification in ethical hacking and penetration testing methodologies."
    },
     {
      type: "education",
      title: "MERN Stack Developer",
      organization: "Chai with Code",
      period: "2026",
      description: "Currently pursuing a course in Backend Development to strengthen my skills in server-side technologies and application logic."
    }
  ];

  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4108_1px,transparent_1px),linear-gradient(to_bottom,#00ff4108_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Experience & <span className="text-[#00d9ff]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-[#00ff41]" />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[#00ff41]/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00ff41] rounded-full shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00ff41]/50 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-[#00d9ff] font-mono text-sm">{item.organization}</p>
                      </div>
                      <span className="px-3 py-1 bg-[#00ff41]/20 border border-[#00ff41]/50 rounded-full text-[#00ff41] text-sm font-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-[#00d9ff]" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[#00d9ff]/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00d9ff] rounded-full shadow-[0_0_10px_rgba(0,217,255,0.5)]" />

                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00d9ff]/50 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-[#00ff41] font-mono text-sm">{item.organization}</p>
                      </div>
                      <span className="px-3 py-1 bg-[#00d9ff]/20 border border-[#00d9ff]/50 rounded-full text-[#00d9ff] text-sm font-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
