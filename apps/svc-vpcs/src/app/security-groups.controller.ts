import { Controller, Get } from '@nestjs/common';
import { SecurityGroup } from '@aws/shared/security-groups/domain';

@Controller('security-groups')
export class SecurityGroupsController {
  @Get()
  getAll(): SecurityGroup[] {
    return [
      { id: 'first-sg', name: 'First', vpcId: 'vpc-123' },
      { id: 'second-sg', name: 'Second', vpcId: 'vpc-456' },
    ];
  }
}
