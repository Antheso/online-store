import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Emp } from '../../../model/emp';
import { EmpListService } from './emp-list.service';


@Injectable({
  providedIn: 'root'
})
export class EmpListResolver implements Resolve<Emp[]> {

  constructor(
    private empSrv: EmpListService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Emp[]> {
    return this.empSrv.getEmp(route.queryParams.limit, route.queryParams.offset);
  }

}
