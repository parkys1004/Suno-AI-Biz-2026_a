import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const events = [
    { time: 'Week 1-2', label: 'W1', title: '준비 (Setup)', desc: 'Suno AI Premier 구독, 틈새 장르 선정, 페르소나 기획', color: 'bg-indigo-100 text-indigo-600' },
    { time: 'Week 3-4', label: 'W3', title: '제작 (Production)', desc: '데모 50곡 생성 후 상위 10곡 선별, DAW 믹싱, 아트워크', color: 'bg-indigo-100 text-indigo-600' },
    { time: 'Month 2', label: 'M2', title: '출시 (Launch)', desc: '유통사 등록, 숏폼 바이럴 마케팅, 플레이리스트 피칭', color: 'bg-emerald-100 text-emerald-600' }
  ];

  return (
    <section id="roadmap" className="py-16 scroll-mt-24">
        <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">📅 단계별 실행 로드맵</h2>
            <p className="mt-4 text-lg text-slate-500">
                첫 수익 발생까지의 8주 집중 실행 계획입니다.
            </p>
        </div>

        <div className="space-y-8 relative">
             <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200"></div>

             {events.map((evt, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex relative pl-16"
                 >
                     <div className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm border border-white z-10 ${evt.color}`}>
                         {evt.label}
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full hover:shadow-md transition-shadow">
                         <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{evt.time}</span>
                         <h4 className="text-lg font-bold text-slate-900 mt-1">{evt.title}</h4>
                         <p className="mt-2 text-slate-600 text-sm">{evt.desc}</p>
                     </div>
                 </motion.div>
             ))}
        </div>
    </section>
  );
};

export default Roadmap;
