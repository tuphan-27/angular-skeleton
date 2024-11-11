import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: []
    }
];

export default ROUTES;
