
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Headphones, FileCheck } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'MRH (Mixed Reality Headset)',
            description: '크라우드 펀딩 성공, 3D 입체 음향 기반의 차세대 헤드셋.',
            icon: <Headphones className="w-10 h-10 text-primary mb-4" />,
            tags: ['Hardware', '3D Audio', 'Product Design'],
        },
        {
            title: '3D Audio Algorithm',
            description: '공간감 극대화를 위한 Binaural 렌더링 기술 개발.',
            icon: <Layers className="w-10 h-10 text-primary mb-4" />,
            tags: ['DSP', 'Algorithm', 'Binaural'],
        },
        {
            title: 'IP Management',
            description: '100여 건 이상의 지식재산권 확보 및 기술 표준화.',
            icon: <FileCheck className="w-10 h-10 text-primary mb-4" />,
            tags: ['Patent', 'Standardization', 'Strategy'],
        },
    ];

    return (
        <section id="projects" className="py-24 bg-background relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Projects</h2>
                    <p className="text-gray-400">대표 성과 및 프로젝트</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#222] border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/10"
                        >
                            <div className="bg-[#1A1A1A] rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                                {project.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
