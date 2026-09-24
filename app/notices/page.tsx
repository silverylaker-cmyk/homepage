import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { notices } from "@/data/site";

export const metadata = { title: "소식" };
export default function NoticesPage() { const published = notices.filter(item => item.published); return <><PageIntro eyebrow="NEWS" title="소식" description="진료 일정과 운영에 관한 소식을 안내합니다." /><section className="content-section shell">{published.length ? <div className="link-list">{published.map(item => <Link href={`/notices/${item.slug}`} key={item.slug}>{item.title}<span>{item.date} ↗</span></Link>)}</div> : <div className="empty-content"><h2>등록된 소식이 없습니다.</h2><p>확인된 운영 공지가 있으면 이곳에 게시하겠습니다.</p></div>}</section></>; }
