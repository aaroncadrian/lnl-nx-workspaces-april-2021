import React, { useEffect } from 'react';

import './VpcSubnetsFeatureList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSubnets,
  selectAllSubnets,
  selectSubnetCount,
} from '@aws/shared/subnets/data-access';
import Table, { TableProps } from '@awsui/components-react/table';
import {
  Button,
  Header,
  Link,
  SpaceBetween,
  StatusIndicator,
} from '@awsui/components-react';
import { useRouteMatch } from 'react-router-dom';
import { useNavigateTo } from '@aws/shared/util-routing';
import { Subnet } from '@aws/shared/subnets/domain';

const columnDefs: TableProps.ColumnDefinition<Subnet>[] = [
  {
    id: 'name',
    header: 'Name',
    cell(item: Subnet): React.ReactNode {
      return item.name;
    },
  },
  {
    id: 'subnetId',
    header: 'Subnet ID',
    cell(item: Subnet): React.ReactNode {
      return <Link href={'#'}>{item.id}</Link>;
    },
  },
  {
    id: 'state',
    header: 'State',
    cell(item: Subnet): React.ReactNode {
      return <StatusIndicator type={'success'}>{item.state}</StatusIndicator>;
    },
  },
];

export function ListSubnetsPage() {
  const match = useRouteMatch();

  const subnets = useSelector(selectAllSubnets);
  const subnetCount = useSelector(selectSubnetCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubnets());
  }, []);

  const navigateTo = useNavigateTo();

  return (
    <Table
      header={
        <Header
          actions={
            <SpaceBetween size={'m'} direction={'horizontal'}>
              <Button
                onClick={() => navigateTo(`${match.url}/create`)}
                variant={'primary'}
              >
                Create Subnet
              </Button>
            </SpaceBetween>
          }
          counter={`(${subnetCount})`}
        >
          Subnets
        </Header>
      }
      columnDefinitions={columnDefs}
      items={subnets}
    />
  );
}

export default ListSubnetsPage;
