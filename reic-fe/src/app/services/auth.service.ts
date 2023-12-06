import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(email: string, password: string): Observable<boolean> {
    const isValidUser = email === 'test@example.com' && password === 'password';
    return of(isValidUser);
  }

  register(email: string, password: string): Observable<boolean> {
    return of(true);
  }

  resetPassword(password: string): Observable<boolean> {
    return of(true);
  }
}