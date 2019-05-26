import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { EmpAddService } from './emp-add.service';
import { Emp } from '../../../model/emp';
import { Dept } from '../../../model/dept';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent {

  public emp = new Emp();

  public saveEmp(): void {
    this.empSrv.addEmp(this.emp).subscribe(() => {
      this.emp = new Emp();
    });
  }

  get depts(): Observable<Dept[]> {
    return this.empSrv.dept$;
  }

  get emps(): Observable<Emp[]> {
    return this.empSrv.emp$;
  }

  constructor(
    private empSrv: EmpAddService
  ) { }

}
