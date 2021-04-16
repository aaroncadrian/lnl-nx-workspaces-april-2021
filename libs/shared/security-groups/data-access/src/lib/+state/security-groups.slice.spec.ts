import {
  fetchSecurityGroups,
  securityGroupsAdapter,
  securityGroupsReducer,
} from './security-groups.slice';

describe('securityGroups reducer', () => {
  it('should handle initial state', () => {
    const expected = securityGroupsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(securityGroupsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchSecurityGroupss', () => {
    let state = securityGroupsReducer(
      undefined,
      fetchSecurityGroups.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = securityGroupsReducer(
      state,
      fetchSecurityGroups.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = securityGroupsReducer(
      state,
      fetchSecurityGroups.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
