export const sampleHours = [
  { icon: "🌤️", label: "평일", note: "08:00 ~ 19:00 (센터별 상이)" },
  { icon: "🌥️", label: "토요일", note: "08:00 ~ 17:00 (단축 운영)" },
  { icon: "🌙", label: "일요일·공휴일", note: "휴무" },
];

export const comparisonRows = [
  {
    label: "운영 시간",
    left: "평일 낮 시간 중심",
    right: "낮부터 저녁까지 연장 운영",
  },
  {
    label: "적합한 경우",
    left: "표준적인 낮 시간 돌봄이 필요한 경우",
    right: "맞벌이 가정, 야간 돌봄이 필요한 경우",
  },
  {
    label: "제공 서비스",
    left: "식사·간식, 송영, 건강관리, 인지·운동 프로그램",
    right: "주간보호와 동일 + 저녁 시간대 돌봄",
  },
];

export const dailySchedule = [
  {
    step: 1,
    icon: "🚐",
    title: "등원 및 송영",
    description: "센터 차량이 자택 앞까지 이동을 도와드려요.",
  },
  {
    step: 2,
    icon: "🩺",
    title: "건강 체크",
    description: "혈압, 체온 등 기본 건강 상태를 확인합니다.",
  },
  {
    step: 3,
    icon: "🧩",
    title: "오전 인지·운동 프로그램",
    description: "인지 자극 활동, 가벼운 운동 프로그램을 진행합니다.",
  },
  {
    step: 4,
    icon: "🍚",
    title: "점심 식사 및 휴식",
    description: "영양을 고려한 점심 식사와 휴식 시간을 제공합니다.",
  },
  {
    step: 5,
    icon: "🎨",
    title: "오후 프로그램",
    description: "미술, 음악, 원예 등 취미 활동 프로그램을 운영합니다.",
  },
  {
    step: 6,
    icon: "🏠",
    title: "귀가 송영",
    description: "하원 시간에 맞춰 차량으로 안전하게 귀가를 도와드려요.",
  },
];

export const notes = [
  "위 운영시간과 하루 일과는 대표적인 예시이며, 실제 운영시간과 프로그램은 센터마다 다를 수 있습니다.",
  "이용을 원하는 센터에 직접 연락해 정확한 운영시간, 연장 서비스 가능 여부, 준비물을 확인하는 것이 가장 정확합니다.",
  "등하원 이동 시간이 길어지면 어르신이 쉽게 피곤해질 수 있으니, 자택과 센터 간 거리를 함께 고려하는 것이 좋습니다.",
];
