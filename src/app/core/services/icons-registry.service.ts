import { Injectable } from '@angular/core';

import { SvgIcon } from '@app/isons/icons.constants';

@Injectable({
    providedIn: 'root'
})
export class IconsRegistryService {
    private _registry = new Map<string, string>();

    registerIcons(icons: SvgIcon[]) {
        icons.forEach((icon: SvgIcon) => this._registry.set(icon.name, icon.data));
    }

    getIcon(iconName: string) {
        if (!this._registry.has(iconName)) {
            throw new Error(
                `We could not find the WooSender Icon with the name ${iconName}, did you add it to the Icon registry?`
            );
        }

        return this._registry.get(iconName);
    }
}
