export type SubnetState = 'Available';

export interface Subnet {
  id: string;
  name: string;
  state: SubnetState;
}
