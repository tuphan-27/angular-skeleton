import { createReducer, on } from '@ngrx/store';

import { UserViewModel } from '@app/shared/models';

import { UserActions } from './user.actions';

export interface UserState {
    user: UserViewModel | undefined;
}

const INITIAL_STATE: UserState = {
    user: undefined
};

export const userReducer = createReducer(
    INITIAL_STATE,
    on(UserActions.SetUser, (state, payload): UserState => {
        return { ...state, user: payload.user };
    })
);
