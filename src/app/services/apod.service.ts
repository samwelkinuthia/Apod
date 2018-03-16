import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApodService {

  constructor(private http: HttpClient) {
  }
}
