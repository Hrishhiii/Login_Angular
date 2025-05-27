import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, NgFor, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showPassword: boolean = false;
  snackbarVisible: boolean = false;
  inactivityTimeoutId: any;

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
    this.snackbarVisible = false;
    this.resetInactivityTimer();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.router.navigate(['/home']);
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
    }, 10000); // 10 seconds for testing
  }
}
