import React from 'react';
import { motion } from 'framer-motion';
import { Music, Menu } from 'lucide-react';

interface NavBarProps {
  onNavigate: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div class="bg-indigo-600 p-2 rounded-lg text-white">
                <Music size={20} />
            </div>
            <span class="font-bold text-xl tracking-tight text-slate-900">Suno AI Biz <span class="text-indigo-600">2026</span></span>
          </div>
          
          <div class="hidden md:flex space-x-8">
            {[
              { id: 'legal', label: '법적 리스크' },
              { id: 'business', label: '수익 모델' },
              { id: 'tech', label: '워크플로우' },
              { id: 'roadmap', label: '로드맵' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors relative group text-sm"
              >
                {item.label}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div class="md:hidden">
            <button className="text-slate-500 hover:text-indigo-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
