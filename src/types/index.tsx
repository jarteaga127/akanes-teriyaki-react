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

export interface Step1Props {
    formData: BookingDetails;
    updateFields: (fields: Partial<BookingDetails>) => void;
    onNext: () => void;
}

export interface Step2Props {
    formData: BookingDetails;
    updateFields: (fields: Partial<BookingDetails>) => void;
    onNext: () => void;
    onBack: () => void;
}

export interface Step3Props {
    formData: BookingDetails;
    onConfirm: () => void;
    onBack: () => void;
}

export interface Step4Props {
    formData: BookingDetails;
    resetForm: () => void;
}