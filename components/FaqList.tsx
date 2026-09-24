import { faqs } from "@/data/site";

export function FaqList({ limit }: { limit?: number }) {
  return <div className="faq-list">{faqs.slice(0, limit).map((faq, index) => <details key={faq.question}><summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">＋</span></summary><p>{faq.answer}</p></details>)}</div>;
}
