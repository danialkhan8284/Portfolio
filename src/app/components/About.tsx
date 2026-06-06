import { motion } from "motion/react";
import { Shield, Network, Bug } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Passionate about identifying vulnerabilities, securing systems, and applying security best practices to protect applications and networks."
    },
    {
      icon: Network,
      title: "Network & System Security",
      description: "Building practical skills in Linux security, networking fundamentals, vulnerability assessment, and security monitoring."
    },
    {
      icon: Bug,
      title: "Security Tools & Labs",
      description: "Hands-on experience with Nmap, Wireshark, Burp Suite, OWASP ZAP, Nikto, and TryHackMe labs for practical cybersecurity learning."
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
            I'm a Cybersecurity enthusiast with a strong interest in Network Security, Vulnerability Assessment, and System Security. My journey in technology is driven by a passion for understanding how systems work, identifying security weaknesses, and learning how to protect digital assets from emerging threats.

            I have hands-on experience with Linux environments, networking fundamentals, security assessment tools, and practical cybersecurity labs. Through platforms like TryHackMe and real-world practice, I continuously develop my skills in vulnerability analysis, web application security, and defensive security techniques.

            </p>
            <p className="text-gray-400 leading-relaxed">
              
            My goal is to build a career in Cyber Security, contribute to securing systems and networks, and grow into roles such as SOC Analyst, Security Analyst, or Penetration Tester.
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
