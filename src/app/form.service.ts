import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:4000/submit';

  constructor(private http: HttpClient) {}

  submitForm(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student);
  }
}
