import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BUSINESS_MODELS } from '../constants';
import { Check, AlertCircle, Lightbulb } from 'lucide-react';

const BusinessStrategy: React.FC = () => {
  const [selectedId, setSelectedId] = useState('streaming');
  const selectedModel = BUSINESS_MODELS.find(m => m.id === selectedId) || BUSINESS_MODELS[0];

  // Prepare chart data based on selected model
  // We want to compare the selected model against an "Ideal" or "Average" baseline visually, 
  // or just show the stats polygon.
  const chartData = [
    { subject: '수익성', A: selectedModel.stats.roi, fullMark: 100 },
    { subject: '진입용이성', A: 100 - selectedModel.stats.barrier, fullMark: 100 }, // Invert barrier for "Ease"
    { subject: '지속성', A: selectedModel.stats.sustainability, fullMark: 100 },
    { subject: '확장성', A: selectedModel.stats.scalability, fullMark: 100 },
    { subject: '안전성', A: selectedModel.stats.safety, fullMark: 100 },
  ];

  return (
    <section id="business" className="py-16 scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">💼 수익화 비즈니스 모델</h2>
        <p className="mt-4 text-lg text-slate-500">
            5가지 핵심 비즈니스 모델을 비교 분석하여 최적의 전략을 수립하세요.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Navigation List */}
        <div className="lg:col-span-5 space-y-3">
          {BUSINESS_MODELS.map((model) => (
            <motion.button
              key={model.id}
              onClick={() => setSelectedId(model.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                selectedId === model.id 
                  ? 'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div>
                <div className={`font-bold text-lg ${selectedId === model.id ? 'text-indigo-800' : 'text-slate-700'}`}>
                    {model.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">{model.desc.substring(0, 30)}...</div>
              </div>
              <span className="text-2xl">{model.icon}</span>
            </motion.button>
          ))}
        </div>

        {/* Content & Chart Area */}
        <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/50 backdrop-blur rounded-2xl border border-white shadow-xl p-6 h-full flex flex-col">
                <div className="h-[300px] w-full mb-6">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name={selectedModel.title}
                            dataKey="A"
                            stroke="#4f46e5"
                            strokeWidth={3}
                            fill="#4f46e5"
                            fillOpacity={0.3}
                        />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-indigo-50/50 rounded-xl p-6 border border-indigo-100 flex-grow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">{selectedModel.icon}</span>
                            <h3 className="text-2xl font-bold text-indigo-900">{selectedModel.title}</h3>
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed text-sm">
                            {selectedModel.desc}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-emerald-600 text-sm mb-2 flex items-center gap-1"><Check size={14}/> 장점</h4>
                                <ul className="text-xs text-slate-600 space-y-1">
                                    {selectedModel.pros.map((p, i) => <li key={i}>• {p}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-red-500 text-sm mb-2 flex items-center gap-1"><AlertCircle size={14}/> 단점</h4>
                                <ul className="text-xs text-slate-600 space-y-1">
                                    {selectedModel.cons.map((c, i) => <li key={i}>• {c}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-indigo-100 p-3 rounded-lg flex items-start gap-2">
                             <Lightbulb className="text-indigo-600 shrink-0 mt-0.5" size={16} />
                             <p className="text-xs text-indigo-900 font-medium">Pro Tip: {selectedModel.tips}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategy;
