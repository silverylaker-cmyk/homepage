import { PageIntro } from "@/components/PageIntro";
import { CareRows } from "@/components/CareRows";

export const metadata = { title: "진료안내" };

export default function CarePage() { return <><PageIntro eyebrow="OUR CARE" title="진료안내" description="귀·코·목의 불편함을 살펴보고, 관련 진료 안내로 이동하세요." /><section className="content-section shell"><CareRows /><p className="care-note">암 안내는 머리·목 부위의 암과 종양(두경부 종양)에 관한 내용입니다. 구체적인 검사·진료 범위는 확인 후 안내합니다.</p></section></>; }
