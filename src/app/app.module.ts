import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppStoreModule } from '@store/store.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule, AppRoutingModule, AppStoreModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
