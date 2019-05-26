import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, pluck, catchError } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import { Dept } from '../../../model/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptListService {

  public dept$ = new BehaviorSubject<Dept[]>([]);
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

  public getDept(limit: number, offset: number): Observable<Dept[]> {
    return this.api.get('/departments', {
      limit,
      offset
    }).pipe(
      tap(data => {
        this.itemsCount = data.count;
        this.offset = data.offset;
      }),
      pluck('dept'),
      tap(dept => this.dept$.next(dept)),
      catchError((error: any) => throwError(error || 'Server error'))
    );
  }

}
