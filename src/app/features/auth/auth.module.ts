import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
                loadComponent: () => import('./modules/login/login.component').then((m) => m.LoginComponent)
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./modules/sign-up/sign-up.component').then((m) => m.SignUpComponent)
            }
        ]
    }
];

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class AuthModule {}
