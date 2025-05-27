import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },  // Signup is default landing page
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'about', component: AboutComponent,
    children: [
      { path: 'team', component: TeamComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'signup' }
];

