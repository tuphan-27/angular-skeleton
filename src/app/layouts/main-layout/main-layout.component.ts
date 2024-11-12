import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@widgets';

const COMPONENTS = [HeaderComponent, FooterComponent];

@Component({
    selector: 'app-main-layout',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, ...COMPONENTS],
    templateUrl: './main-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
