import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { DeptListService } from './dept-list.service';
import { Dept } from '../../../model/dept';


@Injectable({
  providedIn: 'root'
})
export class DeptListResolver implements Resolve<Dept[]> {

  constructor(
    private deptSrv: DeptListService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Dept[]> {
    return this.deptSrv.getDept(route.queryParams.limit, route.queryParams.offset);
  }

}
