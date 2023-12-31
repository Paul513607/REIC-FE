import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationError: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordComplexityValidator()]],
      confirmPassword: ['', Validators.required]
    });
  }

  passwordComplexityValidator(): any {
    return (control: AbstractControl) => {
      const password = control.value;
  
      if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(
          password
        )
      ) {
        return { complexity: true };
      }
  
      return null; // Valid password
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const confirmPassword = this.registerForm.value.confirmPassword;

      if (password !== confirmPassword) {
        this.registrationError = 'Passwords do not match.';

        setTimeout(() => {
          this.registrationError = null;
        }, 15000);
        
        return;
      }

      this.authService.register(email, password).subscribe(
        (isRegistered) => {
          if (isRegistered) {
            console.log('Registration successful!');
            this.router.navigate(['/login']);
          } else {
            console.error('Registration failed.');
          }
        },
        (error) => {
          console.error('An error occurred during registration:', error);
        }
      );
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}