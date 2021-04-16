import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Instance } from '@aws/shared/ec2/domain';

export const EC2INSTANCES_FEATURE_KEY = 'ec2Instances';

export interface Ec2InstancesState extends EntityState<Instance> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const ec2InstancesAdapter = createEntityAdapter<Instance>();

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
 *   dispatch(fetchEc2Instances())
 * }, [dispatch]);
 * ```
 */
export const fetchEc2Instances = createAsyncThunk(
  'ec2Instances/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getEc2Instancess()`;
     * Right now we just return an empty array.
     */
    return fetch('/api/ec2/instances').then((m) => m.json());
  }
);

export const initialEc2InstancesState: Ec2InstancesState = ec2InstancesAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const ec2InstancesSlice = createSlice({
  name: EC2INSTANCES_FEATURE_KEY,
  initialState: initialEc2InstancesState,
  reducers: {
    add: ec2InstancesAdapter.addOne,
    remove: ec2InstancesAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEc2Instances.pending, (state: Ec2InstancesState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchEc2Instances.fulfilled,
        (state: Ec2InstancesState, action: PayloadAction<Instance[]>) => {
          ec2InstancesAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchEc2Instances.rejected,
        (state: Ec2InstancesState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const ec2InstancesReducer = ec2InstancesSlice.reducer;

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
 *   dispatch(ec2InstancesActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const ec2InstancesActions = ec2InstancesSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllEc2Instances);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const {
  selectAll,
  selectEntities,
  selectTotal,
} = ec2InstancesAdapter.getSelectors();

export const getEc2InstancesState = (rootState: unknown): Ec2InstancesState =>
  rootState[EC2INSTANCES_FEATURE_KEY];

export const selectAllEc2Instances = createSelector(
  getEc2InstancesState,
  selectAll
);

export const selectEc2InstanceCount = createSelector(
  getEc2InstancesState,
  selectTotal
);

export const selectEc2InstancesEntities = createSelector(
  getEc2InstancesState,
  selectEntities
);
