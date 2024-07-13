import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppStateEnum } from './app-state.enums';

import { userReducer } from './user/user.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({
            [AppStateEnum.User]: userReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
            connectInZone: true
        })
    ]
})
export class AppStoreModule {}
