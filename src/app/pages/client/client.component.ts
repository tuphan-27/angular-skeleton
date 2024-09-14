import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-client',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './client.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent {}
