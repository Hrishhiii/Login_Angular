import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
