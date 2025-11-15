import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private router: Router) { }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private checkToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(email: string, password: string): Observable<boolean> {


    if (email === 'user@example.com' && password === '123456') {
      const fakeToken = 'my-super-secret-fake-jwt-token-12345';

      localStorage.setItem('authToken', fakeToken);

      this.loggedIn.next(true);

      return of(true);
    }

    return of(false);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
