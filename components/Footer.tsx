import React from 'react';
import { CheckSquare, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
            <CheckSquare className="text-emerald-400" />
            <h3 className="text-xl font-bold">출시 전 필수 체크리스트</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
             {[
                "Suno AI 유료 구독 기간 중에 생성된 음원인가? (소유권 확인)",
                "기존 유명 가수의 목소리나 스타일을 모방하지 않았는가? (퍼블리시티권)",
                "유통사 등록 시 'AI Generated' 여부를 투명하게 표시했는가?",
                "FUP(Artificial Streaming) 감지를 피하기 위해 비정상적 반복 재생을 하지 않았는가?"
             ].map((item, i) => (
                 <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-800" />
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{item}</span>
                 </label>
             ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-800">
            <a 
                href="https://kmong.com/self-marketing/730531/ZQh4nXZpK5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-[#FFD400] text-slate-900 font-bold rounded-xl hover:bg-[#ffe033] transition-all shadow-lg hover:shadow-[#FFD400]/20 flex items-center gap-2 transform hover:-translate-y-1 mb-6"
            >
                <span>크몽 바로가기</span>
                <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="text-center text-slate-500 text-xs">
                © 2026 AI Music Strategy Report Dashboard. 
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
