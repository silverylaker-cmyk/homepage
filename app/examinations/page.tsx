import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "검사안내" };

export default function ExaminationsPage() { return <><PageIntro eyebrow="EXAMINATIONS" title="검사안내" description="실제 제공하는 검사와 준비사항을 확인한 뒤 이곳에 안내합니다." /><section className="content-section shell"><div className="empty-content"><h2>검사 정보 준비 중</h2><p>검사 항목, 과정, 준비사항을 확인하고 게시하겠습니다. 현재 이 페이지에는 확인되지 않은 장비나 검사 내용을 표시하지 않습니다.</p></div></section></>; }
