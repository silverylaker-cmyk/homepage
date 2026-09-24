import { FeeSearch } from "@/components/FeeSearch";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "비급여 진료비 안내" };

export default function FeesPage() { return <><PageIntro eyebrow="NON-COVERED FEES" title="비급여 진료비 안내" description="확인된 비급여 항목과 금액을 이곳에 게시합니다." /><section className="content-section shell"><FeeSearch /></section></>; }
