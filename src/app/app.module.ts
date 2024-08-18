import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from '@core/interceptors';

import { AppStoreModule } from '@store/store.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AppStoreModule, HttpClientModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
