import { Injectable } from '@angular/core';

import { SvgIcon } from '@app/isons/icons.constants';

@Injectable({
    providedIn: 'root'
})
export class SvgIconsRegistryService {
    private _registry = new Map<string, string>();

    registerIcons(icons: SvgIcon[]) {
        icons.forEach((icon: SvgIcon) => this._registry.set(icon.name, icon.data));
    }

    getIcon(iconName: string) {
        if (!this._registry.has(iconName)) {
            throw new Error(`Unable to find icon with name: ${iconName}`);
        }

        return this._registry.get(iconName);
    }
}
