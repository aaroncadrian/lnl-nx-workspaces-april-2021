import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SecurityGroup } from '@aws/shared/security-groups/domain';

export const SECURITYGROUPS_FEATURE_KEY = 'securityGroups';

export interface SecurityGroupsState extends EntityState<SecurityGroup> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const securityGroupsAdapter = createEntityAdapter<SecurityGroup>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchSecurityGroups())
 * }, [dispatch]);
 * ```
 */
export const fetchSecurityGroups = createAsyncThunk(
  'securityGroups/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getSecurityGroupss()`;
     * Right now we just return an empty array.
     */
    return fetch('/api/vpc/security-groups').then((m) => m.json());
  }
);

export const initialSecurityGroupsState: SecurityGroupsState = securityGroupsAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const securityGroupsSlice = createSlice({
  name: SECURITYGROUPS_FEATURE_KEY,
  initialState: initialSecurityGroupsState,
  reducers: {
    add: securityGroupsAdapter.addOne,
    remove: securityGroupsAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSecurityGroups.pending, (state: SecurityGroupsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchSecurityGroups.fulfilled,
        (
          state: SecurityGroupsState,
          action: PayloadAction<SecurityGroup[]>
        ) => {
          securityGroupsAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchSecurityGroups.rejected,
        (state: SecurityGroupsState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const securityGroupsReducer = securityGroupsSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(securityGroupsActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const securityGroupsActions = securityGroupsSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllSecurityGroups);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const {
  selectAll,
  selectEntities,
  selectTotal,
} = securityGroupsAdapter.getSelectors();

export const getSecurityGroupsState = (
  rootState: unknown
): SecurityGroupsState => rootState[SECURITYGROUPS_FEATURE_KEY];

export const selectAllSecurityGroups = createSelector(
  getSecurityGroupsState,
  selectAll
);

export const selectSecurityGroupCount = createSelector(
  getSecurityGroupsState,
  selectTotal
);

export const selectSecurityGroupsEntities = createSelector(
  getSecurityGroupsState,
  selectEntities
);
