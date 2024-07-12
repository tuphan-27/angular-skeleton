import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-maintainance',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maintainance.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMaintainanceComponent {}
