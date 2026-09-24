import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "소재 출처" };
export default function CreditsPage() { return <><PageIntro eyebrow="CREDITS" title="소재 출처" description="이 사이트의 시각 소재에 관한 안내입니다." /><section className="content-section shell content-narrow"><div className="content-block"><h2>머리·목 탐색 그림</h2><p>이 사이트를 위해 직접 제작한 SVG 도판입니다. 외부 해부 일러스트나 인물 사진은 사용하지 않았습니다.</p></div><div className="content-block"><h2>글꼴</h2><p>Google Fonts의 Noto Sans KR, Noto Serif KR, DM Sans를 사용합니다. 서체 라이선스는 SIL Open Font License입니다.</p></div></section></>; }
