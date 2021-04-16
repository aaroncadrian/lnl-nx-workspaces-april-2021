import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './VpcSubnetsFeatureShell.module.scss';

const ListSubnetsPage = React.lazy(
  () => import('@aws/vpc/subnets/feature-list')
);

const CreateSubnetPage = React.lazy(
  () => import('@aws/vpc/subnets/feature-create')
);

export function VpcSubnetsFeatureShell() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/create`} component={CreateSubnetPage} />
      <Route path={match.path} component={ListSubnetsPage} />
    </Switch>
  );
}

export default VpcSubnetsFeatureShell;
