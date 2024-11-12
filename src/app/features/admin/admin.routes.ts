import { Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then((m) => m.UsersComponent)
    },
    {
        path: 'boats',
        loadComponent: () => import('./pages/boats/boats.component').then((m) => m.BoatsComponent)
    },
    {
        path: 'boats/:id',
        loadComponent: () => import('./pages/boat-details/boat-details.component').then((m) => m.BoatDetailsComponent)
    }
];

export default ROUTES;
