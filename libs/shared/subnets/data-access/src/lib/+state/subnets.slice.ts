import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Subnet } from '@aws/shared/subnets/domain';

export const SUBNETS_FEATURE_KEY = 'subnets';

export interface SubnetsState extends EntityState<Subnet> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const subnetsAdapter = createEntityAdapter<Subnet>();

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
 *   dispatch(fetchSubnets())
 * }, [dispatch]);
 * ```
 */
export const fetchSubnets = createAsyncThunk(
  'subnets/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getSubnetss()`;
     * Right now we just return an empty array.
     */
    return fetch('/api/vpc/subnets').then((m) => m.json());
  }
);

export const initialSubnetsState: SubnetsState = subnetsAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const subnetsSlice = createSlice({
  name: SUBNETS_FEATURE_KEY,
  initialState: initialSubnetsState,
  reducers: {
    add: subnetsAdapter.addOne,
    remove: subnetsAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubnets.pending, (state: SubnetsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchSubnets.fulfilled,
        (state: SubnetsState, action: PayloadAction<Subnet[]>) => {
          subnetsAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchSubnets.rejected, (state: SubnetsState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const subnetsReducer = subnetsSlice.reducer;

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
 *   dispatch(subnetsActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const subnetsActions = subnetsSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllSubnets);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const {
  selectAll,
  selectEntities,
  selectTotal,
} = subnetsAdapter.getSelectors();

export const getSubnetsState = (rootState: unknown): SubnetsState =>
  rootState[SUBNETS_FEATURE_KEY];

export const selectAllSubnets = createSelector(getSubnetsState, selectAll);

export const selectSubnetCount = createSelector(getSubnetsState, selectTotal);

export const selectSubnetsEntities = createSelector(
  getSubnetsState,
  selectEntities
);
