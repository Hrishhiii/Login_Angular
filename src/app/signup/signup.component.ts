// import { Component, HostListener } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxSpinnerModule } from 'ngx-spinner';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [RouterOutlet, NgFor, ReactiveFormsModule, NgxSpinnerModule],
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent {
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

//   constructor(private router: Router, private spinner: NgxSpinnerService) {
//   this.snackbarVisible = false;
//   this.resetInactivityTimer();
// }

//   togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//   }

//   submitForm() {
//   if (this.userForm.valid) {
//     console.log(this.userForm.value);

//     this.spinner.show(); // Show spinner

//     setTimeout(() => {
//       this.spinner.hide(); // Hide spinner after 2 sec
//       this.router.navigate(['/home']);
//     }, 2000);
//   }
// }


//   @HostListener('window:mousemove')
//   @HostListener('window:keydown')
//   @HostListener('window:mousedown')
//   @HostListener('window:touchstart')
//   @HostListener('window:scroll')
//   resetInactivityTimer() {
//     console.log("Resetting inactivity timer");
//     if (this.snackbarVisible) {

//       this.snackbarVisible = false;
//     }
//     if (this.inactivityTimeoutId) {
//       clearTimeout(this.inactivityTimeoutId);
//     }
//     this.inactivityTimeoutId = setTimeout(() => {
//       this.snackbarVisible = true;
//     }, 10000);
//   }
// }

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, NgFor, ReactiveFormsModule,MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule , CapitalizePipe],
  templateUrl: './signup.component.html', 
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  showPassword: boolean = false;
  snackbarVisible: boolean = false;
  inactivityTimeoutId: any;
  loading: boolean = false; // 🔄 New loading state

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),

    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });

  constructor(private router: Router) {
    this.resetInactivityTimer();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.userForm.valid) {
      this.loading = true; // 🔄 Show custom spinner

      setTimeout(() => {
        this.loading = false; // ✅ Hide spinner
        this.router.navigate(['/home']);
      }, 2000); // Simulate async delay
    }
  }

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  @HostListener('window:mousedown')
  @HostListener('window:touchstart')
  @HostListener('window:scroll')
  resetInactivityTimer() {
    if (this.snackbarVisible) {
      this.snackbarVisible = false;
    }
    if (this.inactivityTimeoutId) {
      clearTimeout(this.inactivityTimeoutId);
    }
    this.inactivityTimeoutId = setTimeout(() => {
      this.snackbarVisible = true;
    }, 10000);
  }
}
