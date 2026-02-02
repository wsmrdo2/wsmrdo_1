
import React from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Contact: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., email service)
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <section id="contact" className="py-24 bg-[#111] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#1A1A1A] to-[#222] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    기술 자문 및 협업 관련 문의는 언제든 환영합니다.<br />
                                    새로운 청각 경험을 함께 만들어갑시다.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                            <Mail className="text-primary w-5 h-5" />
                                        </div>
                                        <span>contact@hubon.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                            <Linkedin className="text-primary w-5 h-5" />
                                        </div>
                                        <a href="#" className="hover:text-primary transition-colors">LinkedIn Profile</a>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                        placeholder="How can we collaborate?"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 border-t border-white/5 py-12 relative z-10 bg-background">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-8 w-auto opacity-80" />
                        <span className="text-gray-400 text-sm">© 2024 Dowonseok. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
