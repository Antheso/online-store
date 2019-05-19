import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatSlideToggleModule
} from '@angular/material';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routing';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditSidebarComponent } from './edit-product/edit-sidebar/edit-sidebar.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageSidebarComponent } from './manage-users/manage-sidebar/manage-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [
    AdminComponent,
    AddProductComponent,
    EditProductComponent,
    EditSidebarComponent,
    ManageUsersComponent,
    ManageSidebarComponent
  ]
})
export class AdminModule { }
