import React from 'react';

import './VpcSubnetsFeatureCreate.module.scss';
import {
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
} from '@awsui/components-react';

export function CreateSubnetPage() {
  return (
    <Form
      header={<Header variant={'h1'}>Create Subnet</Header>}
      actions={
        <SpaceBetween direction={'horizontal'} size={'m'}>
          <Button variant={'link'}>Cancel</Button>
          <Button variant={'primary'}>Create Subnet</Button>
        </SpaceBetween>
      }
    >
      <SpaceBetween size={'m'}>
        <Container header={<Header>VPC</Header>}>
          <FormField
            label={'VPC ID'}
            description={'Create subnets in this VPC'}
          >
            <Input value={''} onChange={() => void 0} />
          </FormField>
        </Container>

        <Container header={<Header>Subnet Settings</Header>}>
          <FormField
            label={'Something Else'}
            description={'More configuration'}
          >
            <Input value={''} onChange={() => void 0} />
          </FormField>
        </Container>
      </SpaceBetween>
    </Form>
  );
}

export default CreateSubnetPage;
