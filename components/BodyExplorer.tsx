"use client";

import Link from "next/link";
import { useState } from "react";
import { cares, type CareId } from "@/data/site";

type RegionId = "ear" | "nose" | "mouth" | "throat";
const regions: { id: RegionId; label: string; title: string; care: CareId; x: number; y: number }[] = [
  { id: "ear", label: "귀", title: "귀 진료", care: "hearing-tinnitus", x: 24, y: 37 },
  { id: "nose", label: "코", title: "코 진료", care: "rhinitis", x: 56, y: 41 },
  { id: "mouth", label: "입", title: "입·목 부위 진료", care: "head-neck-cancer", x: 63, y: 56 },
  { id: "throat", label: "목", title: "목 부위 진료", care: "head-neck-cancer", x: 45, y: 75 },
];

export function BodyExplorer() {
  const [selected, setSelected] = useState<RegionId | null>(null);
  const current = regions.find(region => region.id === selected);
  return <div className="explorer-grid">
    <div className="explorer-art">
      <div className="art-topline"><span>HEAD &amp; NECK</span><span>01 — 04</span></div>
      <div className="head-stage" role="group" aria-label="머리와 목 그림에서 진료 부위 선택">
        <svg viewBox="0 0 420 450" role="img" aria-label="귀, 코, 입, 목이 표시된 머리와 목 그림" className="head-illustration">
          <defs><pattern id="grain" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".35" fill="#837c6d" opacity=".16" /></pattern></defs>
          <path d="M15 449c27-65 83-87 139-93l27-50 89-7 20 60c64 7 101 36 116 90" fill="#dfd8cb" stroke="#24231f" strokeWidth="2" />
          <path d="M128 146C117 81 157 35 222 31c66-3 104 39 104 104 0 28-5 56-19 91-10 28-18 49-43 71l1 22c-12 13-50 19-79 4l-6-30c-27-30-38-64-43-96-19-12-26-31-9-51Z" fill="#eee7db" stroke="#24231f" strokeWidth="2.5" />
          <path d="M128 150c-8-56 21-113 88-119 44-4 83 18 99 56-30-23-62-20-91-9-30 11-56 17-75 15-3 21-8 42-21 57Z" fill="#34332e" />
          <path d="M128 146c-17-14-29 0-26 27 2 24 16 42 32 41l13-17" fill="#e8dfd2" stroke="#24231f" strokeWidth="2.5" />
          <path d="M125 165c-12-8-14 9-7 21m8-8c13-7 8 18 1 24" fill="none" stroke="#867c6b" strokeWidth="1.8" />
          <path d="M191 156c15-10 34-9 47-2m35-2c12-6 25-5 37 1" fill="none" stroke="#34332e" strokeWidth="2" strokeLinecap="round" />
          <path d="M197 169c8 6 19 7 29 0m54-2c9 5 18 4 24-1" fill="none" stroke="#34332e" strokeWidth="2" strokeLinecap="round" />
          <path d="M252 171c-4 22-13 34-12 47 6 5 17 7 26 2" fill="none" stroke="#796f61" strokeWidth="2" strokeLinecap="round" />
          <path d="M224 248c11-6 27-9 38-5 9 3 17 5 24 3m-56 10c19 5 38 4 55-1" fill="none" stroke="#796f61" strokeWidth="2" strokeLinecap="round" />
          <path d="M185 322c22 24 67 25 83 0m-106 32c15 26 58 47 86 49m38-45c-12 18-25 29-37 45" fill="none" stroke="#8d8274" strokeWidth="1.5" />
          <path d="M15 449c27-65 83-87 139-93l27-50 89-7 20 60c64 7 101 36 116 90" fill="url(#grain)" />
          {regions.map(region => <circle key={region.id} cx={region.x * 4.2} cy={region.y * 4.5} r="20" fill={selected === region.id ? "#b96b50" : "#c4baa9"} opacity={selected === region.id ? ".28" : "0"} />)}
        </svg>
        {regions.map(region => <button key={region.id} className={`art-marker ${selected === region.id ? "active" : ""}`} style={{ left: `${region.x}%`, top: `${region.y}%` }} type="button" aria-label={`${region.label} 선택`} aria-pressed={selected === region.id} aria-controls="region-panel" onClick={() => setSelected(region.id)}><span className="marker-dot" aria-hidden="true" /><span className="marker-label">{region.label}</span></button>)}
      </div>
      <div className="region-choices" role="group" aria-label="부위 이름으로 선택">{regions.map(region => <button key={region.id} type="button" aria-pressed={selected === region.id} aria-controls="region-panel" onClick={() => setSelected(region.id)} className={selected === region.id ? "active" : ""}>{region.label}<span aria-hidden="true">↗</span></button>)}</div>
    </div>
    <div className="explorer-result" id="region-panel">
      <div className="result-overline"><span>선택한 부위</span><span>{selected ? `0${regions.findIndex(r => r.id === selected) + 1} / 04` : "— / 04"}</span></div>
      <div aria-live="polite" className="sr-only">{current ? `${current.label} 선택, ${current.title}. 관련 진료: ${cares[current.care].title}` : "궁금한 부위를 선택해 주세요"}</div>
      {current ? <>
        <div className="result-symbol" aria-hidden="true">{current.label}</div>
        <p className="result-kicker">{current.label}에서 시작하는 진료 안내</p>
        <h3>{current.title}</h3>
        <p className="result-description">{cares[current.care].summary}</p>
        <Link className="result-link" href={cares[current.care].path}><span>{cares[current.care].title} 자세히 보기</span><span aria-hidden="true">↗</span></Link>
        <button type="button" className="reset-button" onClick={() => setSelected(null)}>선택 초기화 <span aria-hidden="true">×</span></button>
      </> : <>
        <div className="result-symbol muted" aria-hidden="true">＋</div>
        <p className="result-kicker">YOUR GUIDE</p>
        <h3>궁금한 부위를<br />선택해 주세요.</h3>
        <p className="result-description">그림의 표시나 아래 부위 이름을 누르면 관련 진료를 안내합니다.</p>
        <div className="result-default-links">{Object.values(cares).map(care => <Link key={care.path} href={care.path}>{care.title}<span aria-hidden="true">↗</span></Link>)}</div>
      </>}
      <p className="explorer-disclaimer">부위 선택은 진료 안내를 찾기 위한 기능입니다.</p>
    </div>
  </div>;
}
