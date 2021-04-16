import React from 'react';

import { Route, Link } from 'react-router-dom';

import './VpcFeatureDashboard.module.scss';

/* eslint-disable-next-line */
export interface VpcFeatureDashboardProps {}

export function VpcFeatureDashboard(props: VpcFeatureDashboardProps) {
  return (
    <div>
      <h1>Welcome to vpc-feature-dashboard!</h1>

      <ul>
        <li>
          <Link to="/">vpc-feature-dashboard root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the vpc-feature-dashboard root route.</div>}
      />
    </div>
  );
}

export default VpcFeatureDashboard;
