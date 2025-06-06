// src/app/upcoming-events/events.ts
export interface Event {
  date: string; // ISO date string, e.g. '2024-06-01'
  title: string;
  description?: string;
}

export const EVENTS: Event[] = [
  { date: '2025-06-10', title: 'Angular Workshop', description: 'Angular Workshop' },
  { date: '2025-06-15', title: 'Team Meeting', description: 'Cap team sync-up.' },
  { date: '2025-07-01', title: 'Project Deadline', description: 'Final project submission.' }
];
