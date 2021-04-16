import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './VpcFeatureShell.module.scss';
import { AppLayout, SideNavigation } from '@awsui/components-react';
import { useFollowHandler } from '@aws/shared/util-routing';
import * as ec2 from "@aws/ec2/feature-shell";





const VpcSubnetsFeatureShell = React.lazy(
  () => import('@aws/vpc/subnets/feature-shell')
);

const SharedSecurityGroupsFeatureShell = React.lazy(
  () => import('@aws/shared/security-groups/feature-shell')
);

const VpcDashboard = React.lazy(() => import('@aws/vpc/feature-dashboard'));

function VpcFeatureShellRoutes() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        path={`${match.path}/subnets2`}
        component={VpcSubnetsFeatureShell}
      />

      <Route
        path={`${match.path}/security-groups`}
        component={SharedSecurityGroupsFeatureShell}
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
            {
              type: 'link',
              text: 'Security Groups',
              href: `${match.url}/security-groups`,
            },
          ]}
        />
      }
      content={<VpcFeatureShellRoutes />}
    />
  );
}

export default VpcFeatureShell;
