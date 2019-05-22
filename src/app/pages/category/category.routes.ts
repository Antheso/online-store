import {CategoryComponent} from './category.component';
import { CategoryResolver } from './category.resolver';
import { CategoryFullResolver } from './category-full.resolver';

export const categoryRoutes = [
    {
        path: '',
        component: CategoryComponent,
        resolve: {
            data: CategoryResolver,
            fullData: CategoryFullResolver
        }
    },
];
