import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Copy {
  full_short_link: string;
  original_link: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private http: HttpClient) {}

  getShorten(url): Observable<any> {
    return this.http.get<{result: Copy}>(`${this.baseUrl}${url}`).pipe(
      tap((copy) => console.log(copy.result)),
      map((copy) => copy.result)
    );
  }
}
