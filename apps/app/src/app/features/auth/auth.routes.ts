import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./pages/sign-up/sign-up.component').then((m) => m.SignUpComponent)
            }
        ]
    }
];

export default ROUTES;
