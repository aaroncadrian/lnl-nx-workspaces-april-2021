export type InstanceState = 'Available';

export interface Instance {
  id: string;
  name: string;
  type: string;
  state: InstanceState;
  vpcId: string;
}
