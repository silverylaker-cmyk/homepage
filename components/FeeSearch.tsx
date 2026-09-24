"use client";

import { useMemo, useState } from "react";
import { fees } from "@/data/site";

export function FeeSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = [...new Set(fees.map(fee => fee.category))];
  const filtered = useMemo(() => fees.filter(fee => (category === "all" || fee.category === category) && `${fee.name} ${fee.code}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [category, query]);
  return <><div className="fees-tools"><label className="sr-only" htmlFor="fee-search">항목명 또는 코드 검색</label><input id="fee-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="항목명 또는 코드 검색" /><label className="sr-only" htmlFor="fee-category">분류 선택</label><select id="fee-category" value={category} onChange={event => setCategory(event.target.value)}><option value="all">전체 분류</option>{categories.map(item => <option key={item} value={item}>{item}</option>)}</select></div><p className="care-note" role="status">검색 결과 {filtered.length}건</p>{filtered.length ? <div className="fees-table-wrap"><table className="fees-table"><thead><tr><th scope="col">분류</th><th scope="col">코드</th><th scope="col">항목명</th><th scope="col">금액</th><th scope="col">비고</th><th scope="col">변경일</th></tr></thead><tbody>{filtered.map(fee => <tr key={`${fee.code}-${fee.name}`}><td>{fee.category}</td><td>{fee.code}</td><td>{fee.name}</td><td>{fee.price}</td><td>{fee.note ?? "—"}</td><td>{fee.updatedAt}</td></tr>)}</tbody></table></div> : <div className="empty-content"><h2>표시할 항목이 없습니다.</h2><p>{fees.length ? "검색어나 분류를 바꿔 다시 살펴보세요." : "비급여 항목과 금액을 확인한 뒤 게시합니다."}</p></div>}</>;
}
