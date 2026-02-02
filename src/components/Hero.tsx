
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import background from '../assets/background.png';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={background}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                        Audio Research Director
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    소리의 차원을 바꾸는 <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                        20년의 집념
                    </span>
                    , 도원석입니다.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    주식회사 후본 연구소장 | 3D 입체 음향 및 MR 오디오 전문가 <br />
                    사용자 중심의 몰입형 사운드 경험을 설계합니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all hover:bg-primary/90 hover:scale-105 flex items-center gap-2"
                    >
                        View Portfolio
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold transition-all hover:bg-white/10 hover:border-white/30 flex items-center gap-2"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Abstract Wave Animation (Simple CSS/SVG Pulse) */}
            <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        fill="url(#gradient)"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></motion.path>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#007AFF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#007AFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
