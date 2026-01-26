import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Sliders, Disc } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Prompt Engineering',
    icon: <Mic2 className="text-white" size={24} />,
    desc: '정교한 메타 태그 활용',
    detail: '[Verse], [Chorus], [Drop] 구조화 및 Style 태그 최적화'
  },
  {
    id: 2,
    title: 'Post-Production',
    icon: <Sliders className="text-white" size={24} />,
    desc: 'Stem 분리 및 재배치',
    detail: 'Lalal.ai로 분리 후 DAW(Ableton)에서 노이즈 제거 및 편곡'
  },
  {
    id: 3,
    title: 'Mastering & Visual',
    icon: <Disc className="text-white" size={24} />,
    desc: '최종 상업용 패키징',
    detail: 'Ozone AI 마스터링 (-14dB LUFS) + 앨범 아트워크'
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="tech" className="py-16 scroll-mt-24 bg-slate-50 -mx-4 px-4 sm:-mx-8 sm:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900">🎛️ 고품질 음원 제작 워크플로우</h2>
                <p className="mt-4 text-lg text-slate-500">
                    'Raw' 생성물은 경쟁력이 없습니다. 3단계 프로세스로 가치를 더하세요.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-indigo-200 -z-0"></div>

                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                            {step.icon}
                        </div>
                        <div className="absolute top-4 right-4 text-5xl font-black text-slate-100 -z-10 select-none">
                            0{step.id}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-sm font-semibold text-indigo-600 mb-2">{step.desc}</p>
                        <p className="text-sm text-slate-500">{step.detail}</p>
                    </motion.div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default Workflow;
