import { createAction, props } from '@ngrx/store';

import { UserViewModel } from '@app/shared/models';

enum UserActionsEnum {
    SetUser = '[User] Set User'
}

export const UserActions = {
    SetUser: createAction(UserActionsEnum.SetUser, props<{ user: UserViewModel }>())
};
