import {CategoryComponent} from './category.component';
import { CategoryResolver } from './category.resolver';

export const categoryRoutes = [
    {
        path: '',
        component: CategoryComponent,
        resolve: {
            data: CategoryResolver
        }
    },
];
