import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CategoryResolver } from '../category/category.resolver';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersResolver } from './manage-users/manage-users.resolver';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpListResolver } from './emp-list/emp-list.resolver';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptListResolver } from './dept-list/dept-list.resolver';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpAddEmpResolver } from './emp-add/emp-add-emp.resolver';
import { EmpAddDeptResolver } from './emp-add/emp-add-dept.resolver';
import { DeptAddComponent } from './dept-add/dept-add.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'edit-product',
        pathMatch: 'full'
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
        resolve: {
          data: CategoryResolver
        }
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent,
        resolve: {
          data: ManageUsersResolver
        }
      },
      {
        path: 'emp-list',
        component: EmpListComponent,
        resolve: {
          data: EmpListResolver
        }
      },
      {
        path: 'dept-list',
        component: DeptListComponent,
        resolve: {
          data: DeptListResolver
        }
      },
      {
        path: 'emp-add',
        component: EmpAddComponent,
        resolve: {
          emp: EmpAddEmpResolver,
          dept: EmpAddDeptResolver
        }
      },
      {
        path: 'dept-add',
        component: DeptAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutes { }
