import { FaqList } from "@/components/FaqList";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "자주 묻는 질문" };

export default function FaqPage() { return <><PageIntro eyebrow="FAQ" title="자주 묻는 질문" description="방문 전에 궁금할 수 있는 내용을 모았습니다." /><section className="content-section shell content-narrow"><FaqList /></section></>; }
