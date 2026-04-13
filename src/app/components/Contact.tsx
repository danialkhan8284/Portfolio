import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.send(
    "service_tctie1l",
    "template_igu04qr",
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    "SBtYew4y_HZ-qyCR6"
  )
  .then(() => {
    alert("Message sent successfully ✅");
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send ❌");
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00ff41] rounded-full blur-[128px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full blur-[128px] opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Get In <span className="text-[#00ff41]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00d9ff] mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00ff41] to-[#00d9ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:alex.morgan@example.com" className="text-white hover:text-[#00ff41] transition-colors">
                      muhammaddanialkhan298@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#00ff41] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Block A Satelite Town , Rawalpindi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-4">Available for</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full" />
                  Backend Development Projects
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00d9ff] rounded-full" />
                  Security Consulting
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full" />
                  Full-Stack Development
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00d9ff] rounded-full" />
                  Freelance Opportunities
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-mono text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-mono text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d9ff] focus:ring-1 focus:ring-[#00d9ff] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-mono text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#00ff41] to-[#00d9ff] text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.5)]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
