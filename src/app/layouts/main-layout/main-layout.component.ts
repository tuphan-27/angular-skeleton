import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    styleUrl: './main-layout.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './main-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
