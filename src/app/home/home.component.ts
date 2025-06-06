import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OfficeHoursComponent } from './components/office-hours/office-hours.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { SideWidgetComponent } from './components/side-widget/side-widget.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CalendarComponent,
    OfficeHoursComponent,
    UpcomingEventsComponent,
    SideWidgetComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
