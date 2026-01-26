import React from 'react';
import { DISTRIBUTORS } from '../constants';
import { motion } from 'framer-motion';

const DistributorTable: React.FC = () => {
  return (
    <section id="distributors" className="py-16 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">🌍 음원 유통사(Distributor) 비교</h2>
        <p className="mt-4 text-lg text-slate-500">
            AI 음원에 대한 정책이 명확한 유통사를 선택해야 계정 정지 위험을 피할 수 있습니다.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
                <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">유통사</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">AI 정책</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">비용 구조</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">로열티</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">특이사항</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {DISTRIBUTORS.map((dist, idx) => (
                <motion.tr 
                    key={dist.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-indigo-50/30 transition-colors"
                >
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-slate-900">{dist.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            dist.policyType === 'good' ? 'bg-green-100 text-green-800' :
                            dist.policyType === 'warning' ? 'bg-amber-100 text-amber-800' :
                            'bg-slate-100 text-slate-800'
                        }`}>
                            {dist.policy}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{dist.cost}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-indigo-600">{dist.royalty}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{dist.note}</td>
                </motion.tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default DistributorTable;
