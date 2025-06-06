export interface Holiday {
  date: string; // ISO date string, e.g. '2024-06-01'
  title: string;
  description?: string;
}

export const HOLIDAYS: Holiday[] = [
  { date: '2025-06-06', title: 'Bakrid / Eid al-Adha', description: 'Bakrid / Eid al-Adha' },
  { date: '2025-06-27', title: 'Rath-Yatra', description: 'Rath-Yatra' },
  { date: '2025-08-15', title: 'Independence Day', description: 'Independence Day of India' },
  { date: '2025-08-15', title: 'Janmashtami', description: 'Festival celebrating the birth of Lord Krishna' },
  { date: '2025-10-02', title: 'Gandhi Jayanti', description: 'Birthday of Mahatma Gandhi' },
  { date: '2025-10-20', title: 'Diwali', description: 'Festival of Lights' }
];