import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { notices } from "@/data/site";

export function generateStaticParams() { return notices.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: notices.find(item => item.slug === slug && item.published)?.title ?? "소식" }; }
export default async function NoticeDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const entry = notices.find(item => item.slug === slug && item.published); if (!entry) notFound(); return <><PageIntro eyebrow={`NEWS / ${entry.date}`} title={entry.title} /><section className="content-section shell content-narrow"><div className="content-block">{entry.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><Link href="/notices" className="text-link">← 소식 목록</Link></section></>; }
