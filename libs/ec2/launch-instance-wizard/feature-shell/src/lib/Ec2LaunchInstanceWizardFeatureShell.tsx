import React from 'react';

import { Route, Link } from 'react-router-dom';

import './Ec2LaunchInstanceWizardFeatureShell.module.scss';

/* eslint-disable-next-line */
export interface Ec2LaunchInstanceWizardFeatureShellProps {}

export function Ec2LaunchInstanceWizardFeatureShell(
  props: Ec2LaunchInstanceWizardFeatureShellProps
) {
  return (
    <div>
      <h1>Welcome to ec2-launch-instance-wizard-feature-shell!</h1>

      <ul>
        <li>
          <Link to="/">ec2-launch-instance-wizard-feature-shell root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => (
          <div>
            This is the ec2-launch-instance-wizard-feature-shell root route.
          </div>
        )}
      />
    </div>
  );
}

export default Ec2LaunchInstanceWizardFeatureShell;
