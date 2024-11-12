import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxScrollViewModule } from 'devextreme-angular';
import { FooterComponent, HeaderComponent, SideBarComponent } from '@widgets';

import { PAGE_ROUTES } from '@app/shared/constants';
import { MenuItemModel } from '@widgets/side-bar/models';

const DEVEXTREMES = [DxScrollViewModule];
const COMPONENTS = [HeaderComponent, FooterComponent, SideBarComponent];

const MENU_ITEMS: MenuItemModel[] = [
    {
        text: 'Dashboard',
        routerLink: PAGE_ROUTES.ADMIN_DASHBOARD
    },
    {
        text: 'Users',
        routerLink: PAGE_ROUTES.ADMIN_USERS
    },
    {
        text: 'Boats',
        routerLink: PAGE_ROUTES.ADMIN_BOATS
    }
];

@Component({
    selector: 'app-admin-layout',
    imports: [CommonModule, RouterModule, ...DEVEXTREMES, ...COMPONENTS],
    standalone: true,
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {
    MENU_ITEMS = MENU_ITEMS;
}
