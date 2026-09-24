import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { healthArticles } from "@/data/site";

export function generateStaticParams() { return healthArticles.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: healthArticles.find(item => item.slug === slug && item.published)?.title ?? "건강정보" }; }
export default async function HealthDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const entry = healthArticles.find(item => item.slug === slug && item.published); if (!entry) notFound(); return <><PageIntro eyebrow={`HEALTH JOURNAL / ${entry.date}`} title={entry.title} /><section className="content-section shell content-narrow"><div className="content-block">{entry.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><Link href="/health" className="text-link">← 건강정보 목록</Link></section></>; }
