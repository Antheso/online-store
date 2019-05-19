import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full',
        canActivate: [ AuthGuard ]
    },
    {
        path: 'catalog',
        loadChildren: './pages/category/category.module#CategoryModule',
        canActivateChild: [ AuthGuard ]
    },
    {
        path: 'product',
        loadChildren: './pages/product/product.module#ProductModule',
        canActivateChild: [ AuthGuard ]
    },
    {
        path: 'cart',
        loadChildren: './pages/cart/cart-page.module#CartPageModule',
        canActivateChild: [ AuthGuard ]
    },
    {
        path: 'admin',
        loadChildren: './pages/admin/admin.module#AdminModule',
        canActivateChild: [
            AuthGuard,
            AdminGuard
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: '**',
        component: Page404Component,
        canActivate: [ AuthGuard ]
    }
];
