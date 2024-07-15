import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@environment';

import { UserState } from './user/user.state';

@NgModule({
    imports: [
        NgxsModule.forRoot([UserState]),
        NgxsReduxDevtoolsPluginModule.forRoot({
            name: 'Ngxs Store',
            disabled: environment.isProduction
        })
    ]
})
export class AppStoreModule {}
