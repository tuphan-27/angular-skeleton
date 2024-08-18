import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MENU_ITEMS } from './constants';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
    MENU_ITEMS = MENU_ITEMS;
}
