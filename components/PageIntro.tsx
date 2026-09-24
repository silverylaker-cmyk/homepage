import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: string; description?: string; children?: ReactNode }) {
  return <section className="page-intro shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-intro-description">{description}</p>}{children}</section>;
}
