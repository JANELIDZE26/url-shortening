import { Injectable } from '@angular/core';
import { Copy } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'https://url-shortening-b8926-default-rtdb.firebaseio.com/copies.json';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  saveCopy(copy: Copy): void {
    const authToken = this.localStorageService.getItem('authToken');
    this.http
      .post(this.url, copy, {
        params: new HttpParams().set('auth', authToken),
      })
      .subscribe();
  }

  getCopies(authToken: string): Observable<Copy[]> | null {
    return this.http
      .get<{ [userId: string]: Copy }>(this.url, {
        params: new HttpParams().set('auth', authToken),
      })
      .pipe(
        map((data: { [userId: string]: Copy }) => {
          if (data === null) {
            return null;
          }
          return Object.entries(data).map((copies) => copies[1]);
        })
      );
  }
}
