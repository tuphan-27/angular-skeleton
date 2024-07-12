import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'maintainance',
        loadComponent: () =>
            import('./pages/maintainance/maintainance.component').then((m) => m.PageMaintainanceComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.PageNotFoundComponent)
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
