import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "개인정보처리방침" };
export default function PrivacyPage() { return <><PageIntro eyebrow="PRIVACY" title="개인정보처리방침" description="실제 운영 방식과 담당 정보를 확인한 뒤 게시합니다." /><section className="content-section shell"><div className="empty-content"><h2>방침 확인 중</h2><p>현재 홈페이지에는 자체 예약·상담 입력 폼이 없습니다. 개인정보처리방침은 운영 주체, 사용하는 서비스, 문의처가 확정되면 실제 운영 방식에 맞춰 안내하겠습니다.</p></div></section></>; }
