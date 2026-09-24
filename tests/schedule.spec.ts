import { expect, test } from "@playwright/test";
import { getScheduleStatus, type ScheduleData } from "../data/schedule";

const schedule: ScheduleData = {
  updatedAt: "2026-09-24",
  weekly: { mon: { open: "09:00", close: "18:00", breakStart: "12:00", breakEnd: "13:00", lastCheckIn: "17:30" } },
  exceptions: {},
};
const korea = (time: string) => new Date(`2026-09-21T${time}:00+09:00`);

test("schedule status respects opening, break, check-in and closing boundaries", () => {
  expect(getScheduleStatus(korea("08:59"), schedule)).toBe("closed");
  expect(getScheduleStatus(korea("09:00"), schedule)).toBe("open");
  expect(getScheduleStatus(korea("12:00"), schedule)).toBe("break");
  expect(getScheduleStatus(korea("13:00"), schedule)).toBe("open");
  expect(getScheduleStatus(korea("17:30"), schedule)).toBe("check-in-closed");
  expect(getScheduleStatus(korea("18:00"), schedule)).toBe("closed");
});

test("closed exceptions and missing schedule data suppress open status", () => {
  expect(getScheduleStatus(korea("10:00"), { ...schedule, exceptions: { "2026-09-21": { closed: true } } })).toBe("closed");
  expect(getScheduleStatus(korea("10:00"), { ...schedule, weekly: null })).toBeNull();
  expect(getScheduleStatus(korea("10:00"), { ...schedule, updatedAt: null })).toBeNull();
  expect(getScheduleStatus(new Date("2026-09-22T10:00:00+09:00"), schedule)).toBe("closed");
});
