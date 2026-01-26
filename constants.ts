import { BusinessModel, Distributor } from './types';

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    id: 'streaming',
    title: 'DSP 스트리밍',
    icon: '🌊',
    desc: '가장 전통적인 방식이지만 경쟁이 치열합니다. "다작(Volume)" 전략보다는 명확한 컨셉의 "브랜딩" 전략이 2026년에는 유효합니다.',
    stats: { roi: 60, barrier: 20, sustainability: 80, scalability: 70, safety: 90 },
    pros: ['지속적인 로열티', '자산 가치 축적'],
    cons: ['낮은 곡당 단가', '초기 마케팅 필수'],
    tips: 'Spotify Canvas와 연동된 비주얼 스토리텔링이 필수입니다.'
  },
  {
    id: 'stock',
    title: '스톡 뮤직 & 라이선싱',
    icon: '🏢',
    desc: '유튜버, 팟캐스터, 기업 영상 수요가 폭발하며 가장 안정적인 현금 흐름을 만듭니다. BGM, 효과음 등 목적성이 뚜렷해야 합니다.',
    stats: { roi: 75, barrier: 40, sustainability: 70, scalability: 80, safety: 80 },
    pros: ['높은 단가', '기업 대상 B2B 기회'],
    cons: ['까다로운 품질 기준', '트렌드 변화 민감'],
    tips: 'Pond5, AudioJungle에 "Corporate", "Upbeat" 키워드로 대량 등록하세요.'
  },
  {
    id: 'content',
    title: '콘텐츠 크리에이터',
    icon: '📹',
    desc: '유튜브 채널(수면, 명상, Lofi)을 직접 운영하여 광고 수익과 음원 수익을 동시에 창출합니다. 팬덤 확보가 핵심입니다.',
    stats: { roi: 90, barrier: 60, sustainability: 90, scalability: 90, safety: 70 },
    pros: ['팬덤 구축 가능', '다양한 수익원(굿즈 등)'],
    cons: ['영상 제작 능력 필요', '시간 투자 많음'],
    tips: '24/7 라이브 스트리밍을 통해 시청 시간을 확보하세요.'
  },
  {
    id: 'beats',
    title: '비트 및 샘플 판매',
    icon: '🥁',
    desc: '래퍼나 다른 프로듀서를 대상으로 비트(Type Beat)나 샘플 팩을 판매합니다. 힙합, EDM 장르에 특화된 전략입니다.',
    stats: { roi: 70, barrier: 50, sustainability: 60, scalability: 50, safety: 60 },
    pros: ['즉각적인 현금화', '커뮤니티 형성'],
    cons: ['높은 음악적 이해도 요구', '저작권 분쟁 소지'],
    tips: 'BeatStars에서 "Free for non-profit" 전략으로 리드를 수집하세요.'
  },
  {
    id: 'freelance',
    title: '맞춤형 용역',
    icon: '🛠️',
    desc: 'Fiverr, 크몽 등에서 팟캐스트 인트로, 게임 배경음악 등을 맞춤 제작해줍니다. AI를 도구로 활용해 제작 시간을 단축합니다.',
    stats: { roi: 80, barrier: 30, sustainability: 50, scalability: 30, safety: 90 },
    pros: ['높은 마진율', '포트폴리오 축적'],
    cons: ['노동 집약적', '클라이언트 커뮤니케이션'],
    tips: '빠른 수정(Revision)과 다양한 옵션 제공을 AI의 속도로 해결하세요.'
  }
];

export const DISTRIBUTORS: Distributor[] = [
  {
    name: 'DistroKid',
    policy: '허용 (표기 권장)',
    policyType: 'good',
    cost: '연간 구독제 ($22.99~)',
    royalty: '100%',
    note: '업로드 속도 빠름, 다작 전략에 유리'
  },
  {
    name: 'TuneCore',
    policy: '허용',
    policyType: 'good',
    cost: '곡당 결제 or 무제한',
    royalty: '100%',
    note: '퍼블리싱 관리 기능 우수'
  },
  {
    name: 'CD Baby',
    policy: '검수 엄격',
    policyType: 'warning',
    cost: '곡당 결제 (영구)',
    royalty: '91%',
    note: '물리적 매체 유통 가능, 장기적 관리 유리'
  },
  {
    name: 'Amuse',
    policy: '허용',
    policyType: 'good',
    cost: '무료 (느림) / Pro',
    royalty: '100% (Pro)',
    note: '모바일 앱 기반, 초기 진입 용이'
  }
];
