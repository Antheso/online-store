import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CategoryResolver } from '../category/category.resolver';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersResolver } from './manage-users/manage-users.resolver';

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
