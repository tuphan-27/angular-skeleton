import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarLayoutComponent } from '@layouts';

import { MENU_ITEMS } from './constants';

const WIDGETS = [SideBarLayoutComponent];

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [RouterModule, ...WIDGETS],
    templateUrl: './admin.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
    MENU_ITEMS = MENU_ITEMS;
}
