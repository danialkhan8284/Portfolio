import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Network Security Scanner",
      description: "Python-based tool for automated network vulnerability assessment and port scanning with detailed reporting.",
      image: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGNvZGUlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzU5NDQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Networking", "Security"],
      color: "#00ff41"
    },
 
    {
      title: "Network Sniffer",
      description: "Developed a Python-based Network Sniffer to capture and analyze network packets in real time. The project monitors network traffic and extracts important information such as source/destination IP addresses, protocols, ports, packet size, and other packet details. It helped strengthen practical understanding of TCP/IP, network protocols, packet analysis, and network security monitoring.",
      image: "https://images.unsplash.com/photo-1543148898-0a32d4cf6d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGNvZGUlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzU5NDQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Networking", "Security", "Packet Analysis", "Real-time Analysis"],
      color: "#ff0080"
    },
   
    {
      title: "SOC Simulator",
      description: "A SOC Simulator that mimics real-time security monitoring by analyzing logs and detecting suspicious activities such as unauthorized access attempts and network scanning. It demonstrates core SOC concepts including threat detection, log analysis, and incident response fundamentals.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      tags: ["MERN Stack", "Socket.io", "WebSockets"],
      color: "#ffd700"
    },
    {
      title: "Python-Keystroke-Event-Logger",
      description: "A Python application that logs keystroke events for security analysis and monitoring purposes.",
      image: "https://images.unsplash.com/photo-1687603921109-46401b201195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiYWNrZW5kJTIwc2VydmVyJTIwYXBpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU5NDQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Security", "Logging", "Monitoring", "Keystroke Analysis"],
      color: "#00d9ff"
    },
    // {
    //   title: "E-Commerce REST API",
    //   description: "Scalable Node.js backend with Express, MongoDB, JWT authentication, payment integration, and comprehensive error handling.",
    //   image: "https://images.unsplash.com/photo-1687603921109-46401b201195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiYWNrZW5kJTIwc2VydmVyJTIwYXBpJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzU5NDQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    //   tags: ["Node.js", "Express", "MongoDB"],
    //   color: "#00d9ff"
    // },
  ];

  return (
    <section id="projects" className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Featured <span className="text-[#00ff41]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00d9ff] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ff41]/50 transition-all"
              style={{
                boxShadow: '0 0 0 0 rgba(0,255,65,0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px 0 ${project.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0,255,65,0)';
              }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff41] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/danialkhan8284?tab=repositories"
                    className="flex items-center gap-2 text-[#00ff41] hover:text-[#00d9ff] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-mono">Code</span>
                  </a>
                  <a
                    href="https://github.com/danialkhan8284?tab=repositories"
                    className="flex items-center gap-2 text-[#00d9ff] hover:text-[#00ff41] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-mono">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
