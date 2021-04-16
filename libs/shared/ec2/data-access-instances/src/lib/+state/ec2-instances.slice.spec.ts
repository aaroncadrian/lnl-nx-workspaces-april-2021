import {
  fetchEc2Instances,
  ec2InstancesAdapter,
  ec2InstancesReducer,
} from './ec2-instances.slice';

describe('ec2Instances reducer', () => {
  it('should handle initial state', () => {
    const expected = ec2InstancesAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(ec2InstancesReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchEc2Instancess', () => {
    let state = ec2InstancesReducer(
      undefined,
      fetchEc2Instances.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = ec2InstancesReducer(
      state,
      fetchEc2Instances.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = ec2InstancesReducer(
      state,
      fetchEc2Instances.rejected(new Error('Uh oh'), null, null)
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
