import React from 'react';

import {
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
} from '@awsui/components-react';

export function CreateSecurityGroupPage() {
  return (
    <Form
      header={<Header variant={'h1'}>Create Security Group</Header>}
      actions={
        <SpaceBetween direction={'horizontal'} size={'m'}>
          <Button variant={'link'}>Cancel</Button>
          <Button variant={'primary'}>Create Security Group</Button>
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

        <Container header={<Header>Security Group Settings</Header>}>
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

export default CreateSecurityGroupPage;
