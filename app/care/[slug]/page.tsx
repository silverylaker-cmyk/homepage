import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingAction } from "@/components/BookingAction";
import { PageIntro } from "@/components/PageIntro";
import { cares, careList, type CareId } from "@/data/site";

export function generateStaticParams() { return Object.keys(cares).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const care = cares[slug as CareId]; return { title: care?.detailTitle ?? "진료안내" }; }

export default async function CareDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const care = cares[slug as CareId];
  if (!care) notFound();
  return <><PageIntro eyebrow={`CARE / ${care.number}`} title={care.detailTitle} description={care.subtitle} /><section className="content-section shell content-grid"><aside><p className="content-label">진료 분야 / {care.number}</p><div className="mini-list">{care.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}</div></aside><div><div className="content-block"><h2>이런 불편을 이야기해 주세요.</h2><p>{care.summary}</p><p>방문 시 느낀 변화와 궁금한 점을 편하게 말씀해 주세요. 이 페이지는 진료 분야를 찾기 위한 안내입니다.</p></div><div className="content-block"><h2>진료 안내</h2><p>구체적인 검사와 진료 과정은 제공 범위를 확인한 뒤 안내하겠습니다.</p>{slug === "head-neck-cancer" && <div className="notice-box">두경부 종양은 머리·목 부위의 종양을 가리키며, 양성과 악성을 모두 포함할 수 있습니다. 이 페이지의 ‘암’ 표기는 환자가 관련 안내를 찾기 쉽도록 사용합니다.</div>}</div><div className="content-block"><h2>방문 전 확인</h2><p>진료 시간과 예약 방법이 확정되면 이용안내에 게시합니다.</p><Link href="/visit" className="text-link">이용안내 <span aria-hidden="true">↗</span></Link></div><div className="content-block"><h2>예약</h2><BookingAction /></div><div className="detail-nav"><Link href="/care">← 전체 진료안내</Link>{careList.filter(item => item.path !== care.path).map(item => <Link key={item.path} href={item.path}>{item.title} ↗</Link>)}</div></div></section></>;
}
