export interface BusinessModel {
  id: string;
  title: string;
  icon: string;
  desc: string;
  stats: {
    roi: number; // Return on Investment
    barrier: number; // Entry Barrier (Higher is harder, displayed as Ease in chart)
    sustainability: number;
    scalability: number;
    safety: number;
  };
  pros: string[];
  cons: string[];
  tips: string;
}

export interface Distributor {
  name: string;
  policy: string;
  policyType: 'good' | 'warning' | 'neutral';
  cost: string;
  royalty: string;
  note: string;
}
