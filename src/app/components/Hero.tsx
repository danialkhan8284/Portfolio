import { motion } from "motion/react";
import { Terminal, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4108_1px,transparent_1px),linear-gradient(to_bottom,#00ff4108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff41] rounded-full blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Terminal className="w-8 h-8 text-[#00ff41]" />
          <span className="text-[#00ff41] font-mono text-sm tracking-wider">SYSTEM ONLINE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Muhammad Danial khan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6 text-lg md:text-xl font-mono"
        >
          <span className="text-[#00ff41]">Cybersecurity Enthusiast</span>
          <span className="text-gray-500">|</span>
          <span className="text-[#00d9ff]">Python Developer</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-300">MERN Stack Developer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building secure, scalable backend systems and web applications.
          Passionate about defensive security and clean code architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-[#00ff41] text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Hire Me
            </span>
          </a>

          <a
            href="\CV.pdf"
            download="Danial_Khan_CV.pdf"
            className="group relative px-8 py-4 border-2 border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:bg-[#00d9ff]/10"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00ff41] rounded-full p-1 animate-bounce">
            <div className="w-1.5 h-1.5 bg-[#00ff41] rounded-full mx-auto animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
