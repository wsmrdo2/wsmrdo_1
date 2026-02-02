
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Expertise: React.FC = () => {
    const skills = [
        { name: 'Audio Signal Processing (DSP)', level: 95 },
        { name: 'H/W & S/W Fusion Design', level: 90 },
        { name: 'Embedded System Engineering', level: 85 },
    ];

    return (
        <section id="expertise" className="py-24 bg-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Experience Timeline */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
                        >
                            <Briefcase className="text-primary" /> Experience
                        </motion.h2>

                        <div className="border-l-2 border-white/10 pl-8 relative space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-[#1A1A1A]" />
                                <h3 className="text-xl font-bold text-white">연구소장 (Director of Research)</h3>
                                <p className="text-primary font-medium mb-2">주식회사 후본 (HUBON Inc.) | Present</p>
                                <p className="text-gray-400 mb-4">
                                    3D 오디오 디바이스 및 MRH(Mixed Reality Headset) 총괄 개발을 리드하고 있습니다.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-gray-500 space-y-1">
                                    <li>3D 입체 음향 및 MR 오디오 전문가</li>
                                    <li>Binaural Effect 및 헤드 트래킹 알고리즘 최적화</li>
                                    <li>하드웨어/소프트웨어 통합 아키텍처 설계</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Skills Progress */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-10"
                        >
                            Expertise
                        </motion.h2>

                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-primary">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                                            className="h-full bg-primary rounded-full relative"
                                        >
                                            <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-white/20 to-transparent" />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Expertise;
