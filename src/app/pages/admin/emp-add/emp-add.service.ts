import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { Emp } from '../../../model/emp';
import { Dept } from '../../../model/dept';

@Injectable({
  providedIn: 'root'
})
export class EmpAddService {

  public emp$ = new BehaviorSubject<Emp[]>([]);
  public dept$ = new BehaviorSubject<Dept[]>([]);

  constructor(
    private api: ApiService
  ) { }

  public addEmp(emp: Emp): Observable<any> {
    return this.api.post('/employees', emp);
  }

  public getAllEmp(): Observable<Emp[]> {
    return this.api.get('/employees/all').pipe(
      pluck('emp'),
      tap(emp => this.emp$.next(emp))
    );
  }

  public getAllDept(): Observable<Dept[]> {
    return this.api.get('/departments/all').pipe(
      pluck('dept'),
      tap(dept => this.dept$.next(dept))
    );
  }

}
