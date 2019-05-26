import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { EmpAddService } from './emp-add.service';
import { Emp } from '../../../model/emp';


@Injectable({
  providedIn: 'root'
})
export class EmpAddEmpResolver implements Resolve<Emp[]> {

  constructor(
    private empSrv: EmpAddService
  ) { }

  public resolve(): Observable<Emp[]> {
    return this.empSrv.getAllEmp();
  }

}
