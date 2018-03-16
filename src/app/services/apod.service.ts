import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApodService {
  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=N18TwfvKYuPWR5mjCxFcnLwYBzK2cWpAarckfTG8&');
  }
}
