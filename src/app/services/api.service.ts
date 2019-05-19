import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const API_URL = 'http://localhost:6969';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  public get(url: string, params?: any): Observable<any> {
    return this.http.get(`${ API_URL }${url}`, { params }).pipe(
      pluck('data')
    );
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(`${ API_URL }${url}`, body).pipe(
      pluck('data')
    );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(`${ API_URL }${url}`);
  }

  public patch(url: string, body: any): Observable<any> {
    return this.http.patch(`${ API_URL }${url}`, body);
  }

}
