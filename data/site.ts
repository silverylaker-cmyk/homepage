export const clinic = {
  name: "알지 이비인후과",
  station: "신매역",
  bookingUrl: null as string | null,
  address: null as string | null,
  phone: null as string | null,
  mapUrl: null as string | null,
  businessName: null as string | null,
  representative: null as string | null,
  registrationNumber: null as string | null,
};

export type CareId = "rhinitis" | "hearing-tinnitus" | "head-neck-cancer";

export const cares: Record<CareId, {
  number: string;
  title: string;
  detailTitle: string;
  subtitle: string;
  summary: string;
  path: string;
  keywords: string[];
}> = {
  rhinitis: {
    number: "01", title: "만성·알레르기 비염", detailTitle: "만성·알레르기 비염",
    subtitle: "코 진료 안내", summary: "반복되는 코의 불편함을 이야기하고, 진료 안내를 살펴보세요.",
    path: "/care/rhinitis", keywords: ["코막힘", "재채기", "콧물"],
  },
  "hearing-tinnitus": {
    number: "02", title: "난청·이명", detailTitle: "난청·이명",
    subtitle: "귀 진료 안내", summary: "듣는 일의 변화를 느끼셨다면, 귀 진료 안내를 살펴보세요.",
    path: "/care/hearing-tinnitus", keywords: ["듣기 어려움", "귀울림"],
  },
  "head-neck-cancer": {
    number: "03", title: "암", detailTitle: "머리·목의 암",
    subtitle: "두경부 종양 진료 안내", summary: "머리·목 부위의 암과 종양에 관한 진료 안내를 살펴보세요.",
    path: "/care/head-neck-cancer", keywords: ["머리·목", "두경부 종양"],
  },
};

export const careList = Object.values(cares);

import type { WeeklyHours } from "./schedule";

export const schedule = {
  timezone: "Asia/Seoul",
  updatedAt: null as string | null,
  // 운영 시간과 예외일이 확인되기 전에는 상태를 계산하지 않습니다.
  weekly: null as WeeklyHours | null,
  exceptions: {} as Record<string, { closed: boolean; open?: string; close?: string; note?: string }>,
};

export type Fee = { category: string; code: string; name: string; price: string; note?: string; updatedAt: string };
export const fees: Fee[] = [];

export type Entry = { slug: string; title: string; date: string; body: string[]; published: boolean };
// Static export requires a generated route for each dynamic template. These
// unpublished records generate only an unlinked 404 until approved content exists.
export const notices: Entry[] = [{ slug: "draft", title: "", date: "", body: [], published: false }];
export const healthArticles: Entry[] = [{ slug: "draft", title: "", date: "", body: [], published: false }];

export const faqs = [
  { question: "예약은 어떻게 하나요?", answer: "네이버 예약을 사용할 예정입니다. 예약 주소가 확인되면 이곳에서 바로 연결할 수 있습니다." },
  { question: "진료 시간은 어디서 확인할 수 있나요?", answer: "진료 시간과 휴진 일정은 확정 후 이용안내에 게시합니다." },
  { question: "암과 두경부 종양은 같은 뜻인가요?", answer: "두경부 종양에는 양성과 악성 종양이 모두 포함될 수 있습니다. 이 홈페이지의 ‘암’ 안내는 머리·목 부위의 암과 종양에 관한 진료 분야를 찾기 쉽게 표시한 것입니다." },
];
