import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "병원소개" };

export default function AboutPage() { return <><PageIntro eyebrow="ABOUT ALJI" title="귀 기울이는 진료" description="알지 이비인후과는 신매역 인근에서 귀·코·목의 건강을 함께 살피고자 합니다." /><section className="content-section shell content-grid"><p className="content-label">OUR APPROACH</p><div><div className="content-block"><h2>충분히 듣고, 이해할 수 있게.</h2><p>불편함의 모습은 사람마다 다릅니다. 증상을 듣고 필요한 진료를 알기 쉬운 말로 설명하는 공간을 지향합니다.</p></div><div className="content-block"><h2>진료 분야</h2><p>만성·알레르기 비염, 난청·이명, 머리·목의 암과 종양에 관한 진료 안내를 제공합니다.</p><Link className="text-link" href="/care">진료안내 보기 <span aria-hidden="true">↗</span></Link></div></div></section></>; }
