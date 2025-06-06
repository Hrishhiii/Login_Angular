import { Component } from '@angular/core';

@Component({
  selector: 'app-side-widget',
  standalone: true,
  imports: [],
  templateUrl: './side-widget.component.html',
  styleUrl: './side-widget.component.scss'
})
export class SideWidgetComponent {
  popupVisible = false;
  popupTitle = '';

  openPopup(title: string) {
    this.popupTitle = title;
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
