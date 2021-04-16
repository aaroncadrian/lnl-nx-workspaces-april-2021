import { fetchSubnets, subnetsAdapter, subnetsReducer } from './subnets.slice';

describe('subnets reducer', () => {
  it('should handle initial state', () => {
    const expected = subnetsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(subnetsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchSubnetss', () => {
    let state = subnetsReducer(undefined, fetchSubnets.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = subnetsReducer(
      state,
      fetchSubnets.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = subnetsReducer(
      state,
      fetchSubnets.rejected(new Error('Uh oh'), null, null)
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
