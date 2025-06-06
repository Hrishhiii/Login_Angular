import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [  RouterModule,NgxSkeletonLoaderModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
      
}
