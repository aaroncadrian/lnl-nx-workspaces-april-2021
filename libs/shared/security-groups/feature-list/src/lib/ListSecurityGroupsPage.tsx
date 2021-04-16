import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Table, { TableProps } from '@awsui/components-react/table';
import { Button, Header, Link, SpaceBetween } from '@awsui/components-react';
import { useRouteMatch } from 'react-router-dom';
import { useNavigateTo } from '@aws/shared/util-routing';
import {
  fetchSecurityGroups,
  selectAllSecurityGroups,
  selectSecurityGroupCount,
} from '@aws/shared/security-groups/data-access';
import { SecurityGroup } from '@aws/shared/security-groups/domain';

const columnDefs: TableProps.ColumnDefinition<SecurityGroup>[] = [
  {
    id: 'name',
    header: 'Name',
    cell(item: SecurityGroup): React.ReactNode {
      return item.name;
    },
  },
  {
    id: 'id',
    header: 'Identifier',
    cell(item: SecurityGroup): React.ReactNode {
      return <Link href={'#'}>{item.id}</Link>;
    },
  },
  {
    id: 'vpcId',
    header: 'VPC',
    cell(item: SecurityGroup): React.ReactNode {
      return (
        <Link href={'#'} external>
          {item.vpcId}
        </Link>
      );
    },
  },
];

export function ListSecurityGroupsPage() {
  const match = useRouteMatch();

  const securityGroups = useSelector(selectAllSecurityGroups);
  const sgCount = useSelector(selectSecurityGroupCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSecurityGroups());
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
                Create Security Group
              </Button>
            </SpaceBetween>
          }
          counter={`(${sgCount})`}
        >
          Security Groups
        </Header>
      }
      columnDefinitions={columnDefs}
      items={securityGroups}
    />
  );
}

export default ListSecurityGroupsPage;
