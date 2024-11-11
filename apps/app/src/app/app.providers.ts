import { EnvironmentProviders, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from '@core/interceptors';

import APP_STORE from '@store/app.store';

import ROUTES from './app.routes';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideHttpClient(),
    provideRouter(ROUTES),
    APP_STORE,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];

export default APP_PROVIDERS;
