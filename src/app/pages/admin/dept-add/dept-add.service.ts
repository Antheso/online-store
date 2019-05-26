import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../../../services/api.service';
import { Dept } from '../../../model/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptAddService {

  constructor(
    private api: ApiService
  ) { }

  public addDept(dept: Dept): Observable<any> {
    return this.api.post('/departments', dept);
  }

}
