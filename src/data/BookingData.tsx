import type { TimeSlot, SeatType } from "../types";

export const TIME_SLOTS: TimeSlot[] =[
{ time: '18:00', label: '18:00', isAvailable: true },
  { time: '19:00', label: '19:00', isAvailable: true },
  { time: '20:00', label: '20:00', isAvailable: true },
  { time: '21:00', label: '21:00', isAvailable: true },
  { time: '22:00', label: '22:00', isAvailable: false },
];

export const SEAT_TYPES: SeatType[] = [
    { seat: 'table', label: 'table', isAvailable: true },
  { seat: 'counter', label: 'counter', isAvailable: true },
  { seat: 'group table', label: 'group table', isAvailable: false },
  { seat: 'window seat', label: 'window seat', isAvailable: false },
];