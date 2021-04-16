import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './VpcFeatureShell.module.scss';
import { AppLayout, SideNavigation } from '@awsui/components-react';
import { useFollowHandler } from '@aws/shared/util-routing';

const VpcSubnetsFeatureShell = React.lazy(
  () => import('@aws/vpc/subnets/feature-shell')
);

const VpcDashboard = React.lazy(() => import('@aws/vpc/feature-dashboard'));

function VpcFeatureShellRoutes() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        path={`${match.path}/subnets`}
        component={VpcSubnetsFeatureShell}
      />

      <Route path={match.path} component={VpcDashboard} />
    </Switch>
  );
}

export function VpcFeatureShell() {
  const match = useRouteMatch();

  const onFollow = useFollowHandler();

  return (
    <AppLayout
      toolsHide
      navigation={
        <SideNavigation
          onFollow={onFollow}
          header={{ text: 'VPC', href: '/vpc' }}
          items={[
            {
              type: 'link',
              text: 'Dashboard',
              href: `${match.url}`,
            },
            {
              type: 'link',
              text: 'Subnets',
              href: `${match.url}/subnets`,
            },
          ]}
        />
      }
      content={<VpcFeatureShellRoutes />}
    />
  );
}

export default VpcFeatureShell;
