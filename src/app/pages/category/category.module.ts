import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { MatRadioModule, MatButtonModule } from '@angular/material';

import {categoryRoutes} from './category.routes';
import {SharedModule} from '../../shared/shared.module';
import {CategoryComponent} from './category.component';
import { VotingComponent } from '../../components/voting/voting.component';
@NgModule({
    imports: [
        SharedModule,
        MatRadioModule,
        MatButtonModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent,
        VotingComponent
    ]
})
export class CategoryModule { }