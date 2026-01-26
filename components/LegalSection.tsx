import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, CheckCircle2, Lock } from 'lucide-react';

const LegalSection: React.FC = () => {
  return (
    <section id="legal" className="py-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">⚖️ 법적 권리 및 리스크 관리</h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          수익화의 첫 단계는 저작권 보호입니다. AI 생성물의 권리 관계를 명확히 이해하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Suno License Card */}
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur border border-indigo-100 rounded-2xl p-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Lock className="text-indigo-600" />
            Suno AI 라이선스
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">Free</div>
                <div>
                    <h4 className="font-bold text-slate-800">Basic Plan</h4>
                    <p className="text-sm text-slate-500 mt-1">비상업적 이용만 가능. 소유권은 Suno 귀속.</p>
                </div>
            </div>
            <div className="flex gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-lg">Pro</div>
                <div>
                    <h4 className="font-bold text-indigo-900">Pro / Premier</h4>
                    <p className="text-sm text-indigo-700 mt-1"><strong>상업적 이용 권리 확보.</strong> 소유권 사용자 귀속 (구독 기간 내 생성분).</p>
                </div>
            </div>
            <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-lg border border-amber-200">
                ⚠️ 구독 취소 후에도 구독 기간 중 생성한 음원의 상업적 권리는 영구 유지됩니다.
            </div>
          </div>
        </motion.div>

        {/* Copyright Risk Card */}
        <motion.div 
             whileHover={{ y: -5 }}
             className="bg-white/90 backdrop-blur border border-indigo-100 rounded-2xl p-8 shadow-xl relative overflow-hidden"
        >
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle size={120} />
            </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
             <AlertTriangle className="text-orange-500" />
             저작권 등록 가능성 (USCO)
          </h3>
          
          <div className="space-y-6">
             <p className="text-slate-600 mb-4 text-sm">
                미국 저작권청 및 한국 저작권위원회는 "인간의 창작적 개입"이 없는 순수 AI 생성물의 저작권을 인정하지 않습니다.
             </p>

             <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span className="text-red-500">등록 불가</span>
                        <span className="text-red-500">순수 프롬프트</span>
                    </div>
                    <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-red-500" />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span className="text-indigo-500">부분 인정</span>
                        <span className="text-indigo-500">인간 작사 + AI 작곡</span>
                    </div>
                    <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} transition={{ duration: 1 }} className="h-full bg-indigo-500" />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span className="text-emerald-500">등록 가능 (높음)</span>
                        <span className="text-emerald-500">후보정 + 편곡 + 인간 보컬</span>
                    </div>
                    <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1 }} className="h-full bg-emerald-500" />
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalSection;
