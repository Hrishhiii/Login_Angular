// import { Component, HostListener, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CapitalizePipe } from './capitalize.pipe';
// import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CapitalizePipe, NgFor, ReactiveFormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent{
//   showPassword: boolean = false;
//   userForm: FormGroup = new FormGroup({
//     name: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//     ]),
//     email: new FormControl('', [
//       Validators.required,
//       Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
//     ]),
//     address: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6),
//     ])
//   });

//   passwordVisible: boolean = false;

//   togglePasswordVisibility(): void {
//     this.passwordVisible = !this.passwordVisible;
//   }

//   submitForm() {
//     if (this.userForm.valid) {
//       console.log(this.userForm.value);
//     }
//   }

// }


// import { Component, HostListener } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CapitalizePipe } from './capitalize.pipe';
// import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CapitalizePipe, NgFor, ReactiveFormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   showPassword: boolean = false;
//   snackbarVisible: boolean = false;
//   inactivityTimeoutId: any;

//   userForm: FormGroup = new FormGroup({
//     name: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//     ]),
//     email: new FormControl('', [
//       Validators.required,
//       Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
//     ]),
//     address: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6),
//     ])
//   });

//   passwordVisible: boolean = false;

//   togglePasswordVisibility(): void {
//     this.passwordVisible = !this.passwordVisible;
//   }

//   submitForm() {
//     if (this.userForm.valid) {
//       console.log(this.userForm.value);
//     }
//   }

//   constructor() {
//     this.snackbarVisible = false;
//     this.resetInactivityTimer();
//   }

//   @HostListener('window:mousemove')
//   @HostListener('window:keydown')
//   @HostListener('window:mousedown')
//   @HostListener('window:touchstart')
//   @HostListener('window:scroll')
//   resetInactivityTimer() {
//     // Hide snackbar immediately on user activity
//     if (this.snackbarVisible) {
//       this.snackbarVisible = false;
//     }

//     // Clear previous timer
//     if (this.inactivityTimeoutId) {
//       clearTimeout(this.inactivityTimeoutId);
//     }

//     // Restart inactivity timer
//     this.inactivityTimeoutId = setTimeout(() => {
//       this.snackbarVisible = true;
//     }, 10000); // 10 seconds for testing
//   }
// }


import { Component } from '@angular/core';
import { Router, NavigationEnd , RouterOutlet  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet], // or any necessary modules like RouterOutlet
})
export class AppComponent {
  isSignupRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isSignupRoute = event.url === '/' || event.url === '/signup';
    });
  }
}
