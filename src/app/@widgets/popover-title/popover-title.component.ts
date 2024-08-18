import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-popover-title',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popover-title.component.html',
    styleUrl: './popover-title.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverTitleComponent {
    @Input() title: string;

    @Output() closed = new EventEmitter<any>();

    isVisible = false;

    onClose() {
        this.closed.emit();
    }

    onToggleVisible() {
        this.isVisible = !this.isVisible;
    }
}
