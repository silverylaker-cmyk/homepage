import Link from "next/link";
import { clinic } from "@/data/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-top"><div><div className="footer-eyebrow">ALJI ENT CLINIC</div><h2>귀 기울이는 진료,<br />이해할 수 있는 설명.</h2></div><Link className="footer-top-link" href="/care">진료 안내 살펴보기 <span aria-hidden="true">↗</span></Link></div>
    <div className="shell footer-bottom"><div><strong>{clinic.name}</strong><p>{clinic.station} 인근 · 상세 위치 및 진료 시간은 확정 후 안내합니다.</p></div><nav aria-label="하단 메뉴"><Link href="/about">병원소개</Link><Link href="/care">진료안내</Link><Link href="/visit">이용안내</Link><Link href="/examinations">검사안내</Link><Link href="/notices">소식</Link><Link href="/health">건강정보</Link><Link href="/fees">비급여 안내</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/credits">소재 출처</Link></nav><small>© 2026 {clinic.name}. 공개 전 검토 중인 홈페이지입니다.</small></div>
  </footer>;
}
