import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Dept } from '../../../model/dept';
import { EmpAddService } from './emp-add.service';


@Injectable({
  providedIn: 'root'
})
export class EmpAddDeptResolver implements Resolve<Dept[]> {

  constructor(
    private empSrv: EmpAddService
  ) { }

  public resolve(): Observable<Dept[]> {
    return this.empSrv.getAllDept();
  }

}
