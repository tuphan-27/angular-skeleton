import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./containers/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'users',
                loadComponent: () => import('./containers/users/users.component').then((m) => m.UsersComponent)
            },
            {
                path: 'boats',
                loadComponent: () => import('./containers/boats/boats.component').then((m) => m.BoatsComponent)
            },
            {
                path: 'boats/:id',
                loadComponent: () =>
                    import('./containers/boat-details/boat-details.component').then((m) => m.BoatDetailsComponent)
            }
        ]
    }
];

export default ROUTES;
