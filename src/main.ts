import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@environment';

import { AppComponent } from './app/app.component';

import APP_PROVIDERS from './app/app.providers';

if (environment.isProduction) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: APP_PROVIDERS
    // eslint-disable-next-line no-console
}).catch((error) => console.log(error));
