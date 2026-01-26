import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 border-b border-indigo-50">
        {/* Animated Background Elements */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div 
             animate={{ 
                scale: [1, 1.5, 1],
                x: [0, 50, 0],
                opacity: [0.3, 0.4, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-40 -left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-8"
          >
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-sm font-semibold text-slate-600">Suno AI v4+ 대응 전략 보고서</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl mb-6"
          >
            AI 음악 수익화 전략<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              2026년 완전 정복
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-500"
          >
            법적 리스크 제로, 수익성 극대화. <br/>
            단순 생성을 넘어선 비즈니스 파이프라인 구축을 위한 실전 가이드.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button 
                onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all flex items-center gap-2 group"
            >
              전략 분석 시작하기 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
