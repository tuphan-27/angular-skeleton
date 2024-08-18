import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopupModule, DxScrollViewModule } from 'devextreme-angular';
import { PositionAlignment } from 'devextreme-angular/common';

import { CustomButtonComponent } from '@widgets/custom-button/custom-button.component';

import { ButtonOptions } from './models';

const DEVEXTREMES = [DxPopupModule, DxScrollViewModule];

const WIDGETS = [CustomButtonComponent];

@Component({
    selector: 'app-popup-container',
    standalone: true,
    imports: [CommonModule, ...DEVEXTREMES, ...WIDGETS],
    templateUrl: './popup-container.component.html',
    styleUrls: ['./popup-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupContainerComponent {
    private _visible = false;

    @Input()
    get visible() {
        return this._visible;
    }

    set visible(value: boolean) {
        this._visible = value;
        this.visibleChange.emit(value);
    }

    @Input() width: number | string = 'auto';
    @Input() height: number | string = 'auto';
    @Input() title: string;
    @Input() position: PositionAlignment = 'center';
    @Input() showCloseButton = true;
    @Input() hideOnOutsideClick = true;
    @Input() closeOnEscapeClick = true;

    @Input() customClass: string;
    @Input() fullScreen = false;
    @Input() deferRendering = true;

    @Input() contentTemplate: TemplateRef<any>;
    @Input() footerTemplate: TemplateRef<any>;
    @Input() headerTemplate: TemplateRef<any>;

    @Input() saveButtonOptions: ButtonOptions = {
        text: 'Save',
        type: 'primary',
        visible: true
    };
    @Input() cancelButtonOptions: ButtonOptions = {
        text: 'Cancel',
        type: 'secondary',
        visible: true
    };
    @Input() deleteButtonOptions: ButtonOptions = {
        text: 'Delete',
        type: 'danger',
        visible: false
    };

    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() showing = new EventEmitter<any>();
    @Output() shown = new EventEmitter<any>();
    @Output() hidden = new EventEmitter<any>();
    @Output() hiding = new EventEmitter<any>();

    @Output() saved = new EventEmitter<void>();
    @Output() canceled = new EventEmitter<void>();
    @Output() deleted = new EventEmitter<void>();

    onPopupShowing(event: any) {
        this.showing.emit(event);
    }

    onPopupShown(event: any) {
        this.shown.emit(event);
    }

    onPopupHidden(event: any) {
        this.hidden.emit(event);
    }

    onPopupHiding(event: any) {
        this.hiding.emit(event);
    }

    onSave() {
        if (this.saveButtonOptions.onClick) {
            this.saveButtonOptions.onClick();

            return;
        }

        this.saved.emit();
    }

    onCancel() {
        if (this.cancelButtonOptions.onClick) {
            this.cancelButtonOptions.onClick();

            return;
        }

        this.canceled.emit();
    }

    onDelete() {
        if (this.deleteButtonOptions.onClick) {
            this.deleteButtonOptions.onClick();

            return;
        }

        this.deleted.emit();
    }
}
