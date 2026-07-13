export interface BookingDetails {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    seat: string;
}

export interface TimeSlot {
    time: string;
    label: string;
    isAvailable: boolean;
}

export interface SeatType {
    seat: string;
    label: string;
    isAvailable: boolean;
}