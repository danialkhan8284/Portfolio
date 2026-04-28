import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      color: "#00ff41",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Auth", "Python (Backend & Automation)"]
    },
    {
      title: "Frontend",
      color: "#00d9ff",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Cybersecurity",
      color: "#ff0080",
      skills: ["Penetration Testing", "Network Security", "OWASP Top 10", "Security Audits"]
    },
    {
      title: "Tools & Others",
      color: "#ffd700",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Linux", "Zapier"]
    }
  ];

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4108_1px,transparent_1px),linear-gradient(to_bottom,#00ff4108_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Technical <span className="text-[#00d9ff]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 font-mono text-sm hover:bg-white/20 hover:border-[#00ff41]/50 transition-all cursor-default"
                    style={{
                      boxShadow: `0 0 0 0 ${category.color}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px 0 ${category.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 0 ${category.color}40`;
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
