import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _URL = 'http://localhost:5000/message';

  constructor(private http: HttpClient) { }

  getMessage(data: any) {
    return this.http.post<any>(this._URL, data);
  }
}
