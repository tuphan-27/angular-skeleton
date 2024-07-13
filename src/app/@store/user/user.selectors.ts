import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateEnum } from '@store/app-state.enums';

import { UserState } from './user.reducer';

const selectUserFeature = createFeatureSelector<UserState>(AppStateEnum.User);

export const UserSelectors = {
    selectUser: createSelector(selectUserFeature, (state) => state.user)
};
