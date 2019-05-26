import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Dept } from '../../../model/dept';
import { DeptListService } from './dept-list.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  private subs = new Subscription();

  get depts(): Observable<Dept[]> {
    return this.deptSrv.dept$;
  }

  get offset(): number {
    return this.deptSrv.offset;
  }

  get limit(): number {
    return this.deptSrv.limit;
  }

  get pages(): any {
    return this.deptSrv.pages;
  }

  constructor(
    private deptSrv: DeptListService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.subs.add (
      this.route.queryParams.pipe(
        switchMap(params => this.deptSrv.getDept(params.limit, params.offset))
      ).subscribe()
    );
  }

}
