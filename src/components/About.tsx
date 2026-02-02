
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Radio } from 'lucide-react';

const About: React.FC = () => {
    const values = [
        {
            icon: <Lightbulb className="w-8 h-8 text-primary" />,
            title: 'Innovation',
            description: '100여 건의 특허가 증명하는 기술 혁신.',
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: 'Experience',
            description: '사용자 중심의 몰입형 사운드 경험 설계.',
        },
        {
            icon: <Radio className="w-8 h-8 text-primary" />,
            title: 'Future',
            description: 'MR(혼합현실) 시대의 새로운 표준 제시.',
        },
    ];

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        20년 경력의 베테랑 엔지니어로서,<br className="hidden md:block" />
                        하드웨어와 소프트웨어를 아우르는 오디오 솔루션을 설계합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
