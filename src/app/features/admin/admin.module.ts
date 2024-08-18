import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideBarLayoutComponent } from '@layouts';

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
                loadComponent: () => import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'users',
                loadComponent: () => import('./modules/users/users.component').then((m) => m.UsersComponent)
            },
            {
                path: 'boats',
                loadComponent: () => import('./modules/boats/boats.component').then((m) => m.BoatsComponent)
            },
            {
                path: 'boats/:id',
                loadComponent: () =>
                    import('./modules/boat-details/boat-details.component').then((m) => m.BoatDetailsComponent)
            }
        ]
    }
];

const WIDGETS = [SideBarLayoutComponent];

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES), ...WIDGETS]
})
export class AdminModule {}
