import { clinic } from "@/data/site";

export function BookingAction({ compact = false }: { compact?: boolean }) {
  if (clinic.bookingUrl) return <a className={`booking-action ${compact ? "compact" : ""}`} href={clinic.bookingUrl} target="_blank" rel="noopener noreferrer">네이버 예약 <span aria-hidden="true">↗</span></a>;
  return <span className={`booking-action disabled ${compact ? "compact" : ""}`} aria-label="네이버 예약 준비 중">네이버 예약 준비 중 <span aria-hidden="true">↗</span></span>;
}
