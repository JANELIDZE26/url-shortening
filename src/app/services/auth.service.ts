import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyDj6PKxageQqqxwGYfOBLjN7XixF4pJ22g';

  constructor(private http: HttpClient) {}

  // signup(userData: UserData): string;
  // signup(userData: UserData): Observable<ResponseData>;

  signup(userData: UserData): Observable<ResponseData> | Observable<never> {
    return this.http
      .post<ResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleErrors));
  }

  login(userData: UserData): Observable<ResponseData> {
    return this.http
      .post<ResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(errorResponse: HttpErrorResponse): Observable<never> {
    const error = errorResponse.error.error.message.split('_').join(' ');

    return throwError(error);
  }
}
