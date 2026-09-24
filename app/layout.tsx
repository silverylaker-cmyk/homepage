import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clinic } from "@/data/site";

export const metadata: Metadata = {
  title: { default: "알지 이비인후과 | 신매역", template: "%s | 알지 이비인후과" },
  description: "신매역 알지 이비인후과. 만성·알레르기 비염, 난청·이명, 머리·목의 암 진료 안내.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" data-scroll-behavior="smooth"><body><a href="#main" className="skip-link">본문으로 바로가기</a><Header /><main id="main">{children}</main><Footer />{clinic.bookingUrl ? <a className="mobile-booking" href={clinic.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 ↗</a> : <span className="mobile-booking disabled">네이버 예약 준비 중</span>}</body></html>;
}
