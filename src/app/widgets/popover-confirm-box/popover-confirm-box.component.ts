import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopoverComponent, DxPopoverModule } from 'devextreme-angular';
import { Position } from 'devextreme-angular/common';

import { CustomButtonComponent } from '@widgets/custom-button/custom-button.component';
import { PopoverTitleComponent } from '@widgets/popover-title/popover-title.component';

const DEVEXTREMES = [DxPopoverModule];

const WIDGETS = [CustomButtonComponent, PopoverTitleComponent];

@Component({
    selector: 'app-popover-confirm-box',
    standalone: true,
    imports: [CommonModule, ...DEVEXTREMES, ...WIDGETS],
    templateUrl: './popover-confirm-box.component.html',
    styleUrls: ['./popover-confirm-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverConfirmBoxComponent {
    @ViewChild('popover') popover: DxPopoverComponent;

    @Input() title: string;
    @Input() message: string;
    @Input() position: Position = 'bottom';
    @Input() width: 'auto' | number = 'auto';

    @Output() confirmed = new EventEmitter<void>();
    @Output() canceled = new EventEmitter<void>();
    @Output() hidden = new EventEmitter<void>();

    constructor() {}

    onConfirm() {
        this.popover.instance.hide();
        this.confirmed.emit();
    }

    onCancel() {
        this.popover.instance.hide();
        this.canceled.emit();
    }

    onHidden() {
        this.hidden.emit();
    }

    onClose() {
        this.popover.instance.hide();
    }
}
