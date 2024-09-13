import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, GuestGuard } from '@core/guards';

const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes'),
        canActivate: [GuestGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes'),
        canActivate: [AuthGuard]
    },
    {
        path: 'maintenance',
        loadComponent: () => import('./pages/maintenance/maintenance.component').then((m) => m.PageMaintenanceComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.PageNotFoundComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
