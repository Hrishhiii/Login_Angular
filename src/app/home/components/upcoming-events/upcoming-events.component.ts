import { Component, OnInit } from '@angular/core';
import { EVENTS, Event } from './events'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  currentMonthEvents: Event[] = [];
  currentMonthName: string = '';

  ngOnInit(): void {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0 = January, 5 = June, etc.

    this.currentMonthName = today.toLocaleString('default', { month: 'long' });

    this.currentMonthEvents = EVENTS.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentMonth;
    });
  }
}
