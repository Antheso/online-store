import {ProductComponent} from './product.component';

import { ProductResolver } from './product.resolver';

export const productRoutes = [
    {
        path: ':id',
        component: ProductComponent,
        resolve: {
            data: ProductResolver
        }
    },
];
