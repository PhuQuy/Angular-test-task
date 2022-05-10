export interface RandomRestaurant {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: Hours;
}

interface Hours {
  monday: Weekday;
  tuesday: Weekday;
  wednesday: Weekday;
  thursday: Weekday;
  friday: Weekday;
  saturday: Weekday;
  sunday: Weekday;
}

interface Weekday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}