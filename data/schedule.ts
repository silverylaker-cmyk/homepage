export type DayHours = { open: string; close: string; breakStart?: string; breakEnd?: string; lastCheckIn?: string };
export type WeeklyHours = Partial<Record<"mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun", DayHours>>;
export type ScheduleData = { weekly: WeeklyHours | null; exceptions: Record<string, { closed: boolean; open?: string; close?: string; note?: string }>; updatedAt: string | null };
export type ScheduleState = "open" | "break" | "check-in-closed" | "closed";

const dayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;
const parseMinutes = (value: string) => { const [hours, minutes] = value.split(":").map(Number); return hours * 60 + minutes; };

export function getScheduleStatus(date: Date, schedule: ScheduleData): ScheduleState | null {
  if (!schedule.weekly || !schedule.updatedAt) return null;
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const part = (type: string) => parts.find(item => item.type === type)?.value ?? "";
  const dateKey = `${part("year")}-${part("month")}-${part("day")}`;
  const day = dayKeys[["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(part("weekday"))];
  const exception = schedule.exceptions[dateKey];
  if (exception?.closed) return "closed";
  const base = schedule.weekly[day];
  if (!base && !(exception?.open && exception?.close)) return "closed";
  const open = exception?.open ?? base?.open;
  const close = exception?.close ?? base?.close;
  if (!open || !close) return null;
  const now = Number(part("hour")) * 60 + Number(part("minute"));
  if (now < parseMinutes(open) || now >= parseMinutes(close)) return "closed";
  if (base?.breakStart && base.breakEnd && now >= parseMinutes(base.breakStart) && now < parseMinutes(base.breakEnd)) return "break";
  if (base?.lastCheckIn && now >= parseMinutes(base.lastCheckIn)) return "check-in-closed";
  return "open";
}
