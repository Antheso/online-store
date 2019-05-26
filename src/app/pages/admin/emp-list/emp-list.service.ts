import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, pluck, catchError } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { Emp } from '../../../model/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  public emp$ = new BehaviorSubject<Emp[]>([]);
  public offset = 0;
  public itemsCount = 0;
  public limit = 5;

  get pages(): any {
    return Array(Math.ceil(this.itemsCount / this.limit)).fill(1).map((x, i) => {
      const pageNum = i + 1;

      return {
        pageNum,
        offset: this.limit * i
      };
    });
  }

  constructor(
    private api: ApiService
  ) { }

  public getEmp(limit: number, offset: number): Observable<Emp[]> {
    return this.api.get('/employees', {
      limit,
      offset
    }).pipe(
      tap(data => {
        this.itemsCount = data.count;
        this.offset = data.offset;
      }),
      pluck('emp'),
      tap(emp => this.emp$.next(emp)),
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

}
