import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule } from 'devextreme-angular';

import { MenuItemModel } from '@layouts/side-bar/models';

import { FooterComponent } from '@layouts/footer/footer.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { SideBarComponent } from '@layouts/side-bar/side-bar.component';

const DEVEXTREMES = [DxScrollViewModule];

const COMPONENTS = [HeaderComponent, FooterComponent, SideBarComponent];

@Component({
    selector: 'app-side-bar-layout',
    imports: [CommonModule, ...DEVEXTREMES, ...COMPONENTS],
    standalone: true,
    templateUrl: './side-bar-layout.component.html',
    styleUrl: './side-bar-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarLayoutComponent {
    @Input() menuItems: MenuItemModel[] = [];
}
