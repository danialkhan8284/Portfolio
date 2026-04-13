import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-[#00ff41]" />
            <span className="text-xl font-bold text-white">Muhammad Danial Khan</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/danialkhan8284"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff41] hover:border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-danial-khan-b54a76387/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00d9ff] hover:border-[#00d9ff]/50 hover:bg-[#00d9ff]/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:alex.morgan@example.com"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff41] hover:border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm font-mono">
            © {currentYear} All rights reserved
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            Built with <span className="text-[#00ff41]">React</span> & <span className="text-[#00d9ff]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
