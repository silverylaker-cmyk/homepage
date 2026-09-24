import Link from "next/link";
import { careList } from "@/data/site";

export function CareRows() {
  return <div className="care-rows">{careList.map(care => <Link href={care.path} className="care-row" key={care.path}><span className="care-number">{care.number}</span><span className="care-name">{care.title}</span><span className="care-subtitle">{care.subtitle}</span><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div>;
}
