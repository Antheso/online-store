import { Component } from '@angular/core';

import { Dept } from '../../../model/dept';
import { DeptAddService } from './dept-add.service';

@Component({
  selector: 'app-dept-add',
  templateUrl: './dept-add.component.html',
  styleUrls: ['./dept-add.component.css']
})
export class DeptAddComponent {

  public dept = new Dept();

  constructor(
    private deptSrv: DeptAddService
  ) { }

  public addDept(): void {
    this.deptSrv.addDept(this.dept).subscribe(() => {
      this.dept = new Dept();
    });
  }

}
