import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule } from 'devextreme-angular';

import { FooterComponent } from '@layouts/footer/footer.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { SideBarComponent } from '@layouts/side-bar/side-bar.component';

const DEVEXTREMES = [DxScrollViewModule];

const COMPONENTS = [HeaderComponent, FooterComponent, SideBarComponent];

@Component({
    selector: 'app-default-layout',
    imports: [CommonModule, ...DEVEXTREMES, ...COMPONENTS],
    standalone: true,
    templateUrl: './default-layout.component.html',
    styleUrl: './default-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {}
