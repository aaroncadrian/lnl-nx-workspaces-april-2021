import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Table, { TableProps } from '@awsui/components-react/table';
import { Button, Header, Link, SpaceBetween } from '@awsui/components-react';
import { useRouteMatch } from 'react-router-dom';
import { useNavigateTo } from '@aws/shared/util-routing';
import {
  fetchEc2Instances,
  selectAllEc2Instances,
  selectEc2InstanceCount,
} from '@aws/shared/ec2/data-access-instances';
import { Instance } from '@aws/shared/ec2/domain';

const columnDefs: TableProps.ColumnDefinition<Instance>[] = [
  {
    id: 'name',
    header: 'Name',
    cell(item: Instance): React.ReactNode {
      return item.name;
    },
  },
  {
    id: 'id',
    header: 'Identifier',
    cell(item: Instance): React.ReactNode {
      return <Link href={'#'}>{item.id}</Link>;
    },
  },
  {
    id: 'vpcId',
    header: 'VPC',
    cell(item: Instance): React.ReactNode {
      return (
        <Link href={'#'} external>
          {item.vpcId}
        </Link>
      );
    },
  },
];

export function ListInstancesPage() {
  const match = useRouteMatch();

  const instances = useSelector(selectAllEc2Instances);
  const instanceCount = useSelector(selectEc2InstanceCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEc2Instances());
  }, []);

  const navigateTo = useNavigateTo();

  return (
    <Table
      header={
        <Header
          actions={
            <SpaceBetween size={'m'} direction={'horizontal'}>
              <Button
                onClick={() =>
                  navigateTo(`${match.url}/launch-instance-wizard`)
                }
                variant={'primary'}
              >
                Launch Instance
              </Button>
            </SpaceBetween>
          }
          counter={`(${instanceCount})`}
        >
          Instances
        </Header>
      }
      columnDefinitions={columnDefs}
      items={instances}
    />
  );
}

export default ListInstancesPage;
