import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsRegistryService } from '@core/services';

@Component({
    selector: 'app-svg-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
    @HostBinding('style.display') displayStyle = 'block';
    @HostBinding('style.width') widthStyle = '';
    @HostBinding('style.color') colorStyle = '';

    @Input() name = '';
    @Input() data = '';
    @Input() width = '20px';
    @Input() color = '';

    constructor(
        private _elementRef: ElementRef,
        private _svgIconRegistry: SvgIconsRegistryService
    ) {}

    ngOnInit() {
        this.widthStyle = this.width;
        this.colorStyle = this.color;

        this.generateIcon();
    }

    generateIcon() {
        const svgData = this.name ? this._svgIconRegistry.getIcon(this.name) : this.data;

        const div = document.createElement('div');
        div.innerHTML = svgData ?? '';

        this._elementRef.nativeElement.appendChild(
            div.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'path')
        );
    }
}
