import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  registrationError: string | null = null;
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.resetPasswordForm = this.formBuilder.group({
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
    if (this.resetPasswordForm.valid) {
      const password = this.resetPasswordForm.value.password;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;

      if (password !== confirmPassword) {
        this.registrationError = 'Passwords do not match.';

        setTimeout(() => {
          this.registrationError = null;
        }, 15000);
        
        return;
      }

      this.authService.resetPassword(password).subscribe(
        (isReset) => {
          if (isReset) {
            console.log('Password reset successful!');
            this.submitted = true;
          } else {
            console.error('Password reset failed.');
          }
        },
        (error) => {
          console.error('An error occurred during password reset:', error);
        }
      );
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
