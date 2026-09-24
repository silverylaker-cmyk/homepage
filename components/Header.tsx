"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { clinic } from "@/data/site";

const nav = [
  { href: "/about", label: "병원소개" },
  { href: "/care", label: "진료안내" },
  { href: "/visit", label: "이용안내" },
  { href: "/faq", label: "자주 묻는 질문" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { close(); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="site-header">
    <div className="header-inner shell">
      <Link href="/" className="wordmark" onClick={close} aria-label="알지 이비인후과 홈"><span className="brand-mark" aria-hidden="true">알</span><span>알지 <small>이비인후과</small></span></Link>
      <nav className="desktop-nav" aria-label="주 메뉴">{nav.map(item => <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
      <div className="header-actions"><Link href="/fees" className="fee-link">비급여 안내 <span aria-hidden="true">↗</span></Link>{clinic.bookingUrl ? <a className="header-booking ready" href={clinic.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 ↗</a> : <span className="header-booking">네이버 예약 준비 중</span>}</div>
      <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "닫기" : "메뉴"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="모바일 메뉴" aria-hidden={!open} inert={!open}>
      {nav.map(item => <Link key={item.href} href={item.href} onClick={close}>{item.label}<span aria-hidden="true">↗</span></Link>)}
      <Link href="/fees" onClick={close}>비급여 안내<span aria-hidden="true">↗</span></Link>
    </nav>
  </header>;
}
