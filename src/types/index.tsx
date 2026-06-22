export interface BookingDetails {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
}

export interface TimeSlot {
    time: string;
    isAvailable: boolean;
}