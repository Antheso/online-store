import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { EmpListService } from './emp-list.service';
import { Emp } from '../../../model/emp';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  private subs = new Subscription();

  get emps(): Observable<Emp[]> {
    return this.empSrv.emp$;
  }

  get offset(): number {
    return this.empSrv.offset;
  }

  get limit(): number {
    return this.empSrv.limit;
  }

  get pages(): any {
    return this.empSrv.pages;
  }

  constructor(
    private empSrv: EmpListService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.subs.add (
      this.route.queryParams.pipe(
        switchMap(params => this.empSrv.getEmp(params.limit, params.offset))
      ).subscribe()
    );
  }

}
