import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.authenticate(email, password).subscribe(
        (isAuthenticated) => {
          if (isAuthenticated) {
            console.log('Authentication successful!');
            // Redirect to a protected route or perform other actions for authenticated users
            this.router.navigate(['/homepage']);
          } else {
            console.error('Invalid email or password.');
            // Display error message or perform other actions for failed authentication
          }
        },
        (error) => {
          console.error('An error occurred during authentication:', error);
          // Handle errors (e.g., display an error message)
        }
      );
    }
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  redirectToForgotPassword() {
    // Implement logic for forgot password redirection
  }
}
