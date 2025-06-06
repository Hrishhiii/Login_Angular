import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HOLIDAYS, Holiday } from './holiday';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarForm = new FormGroup({
    selectedDate: new FormControl(new Date())
  });

  nextHoliday: Holiday | null = null;
  currentMonthHolidays: Holiday[] = [];

  ngOnInit(): void {
    this.updateNextHoliday();
    this.updateCurrentMonthHolidays();
  }

  // Show holidays in current month
  updateCurrentMonthHolidays() {
    const today = new Date();
    const currentMonth = today.getMonth();
    this.currentMonthHolidays = HOLIDAYS.filter(h => {
      const date = new Date(h.date);
      return date.getMonth() === currentMonth;
    });
  }

  // Find the next upcoming holiday
  updateNextHoliday() {
    const today = new Date();
    this.nextHoliday = HOLIDAYS
      .map(h => ({ ...h, dateObj: new Date(h.date) }))
      .filter(h => h.dateObj >= today)
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())[0] || null;
  }

  // Optional date filter
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    const minDate = new Date(2025, 0, 1); // Jan 1, 2025
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date >= minDate && date <= today;
  };
}
