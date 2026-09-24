import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { healthArticles } from "@/data/site";

export const metadata = { title: "건강정보" };
export default function HealthPage() { const published = healthArticles.filter(item => item.published); return <><PageIntro eyebrow="HEALTH JOURNAL" title="건강정보" description="의료진 검토를 마친 정보부터 게시합니다." /><section className="content-section shell">{published.length ? <div className="link-list">{published.map(item => <Link href={`/health/${item.slug}`} key={item.slug}>{item.title}<span>{item.date} ↗</span></Link>)}</div> : <div className="empty-content"><h2>게시된 글이 없습니다.</h2><p>검토된 건강정보가 준비되면 이곳에서 살펴보실 수 있습니다.</p></div>}</section></>; }
