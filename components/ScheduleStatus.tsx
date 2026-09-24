"use client";

import { useEffect, useState } from "react";
import { getScheduleStatus, type ScheduleData, type ScheduleState } from "@/data/schedule";

const labels: Record<ScheduleState, string> = { open: "일정상 진료 시간", break: "일정상 휴게 시간", "check-in-closed": "일정상 접수 마감", closed: "일정상 진료 시간 외" };

export function ScheduleStatus({ schedule }: { schedule: ScheduleData }) {
  const [state, setState] = useState<ScheduleState | null>(null);
  useEffect(() => {
    const update = () => setState(getScheduleStatus(new Date(), schedule));
    const first = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 60_000);
    return () => { window.clearTimeout(first); window.clearInterval(interval); };
  }, [schedule]);
  return state && <p className="schedule-status">{labels[state]} <small>실제 접수·대기 상태와 다를 수 있습니다.</small></p>;
}
