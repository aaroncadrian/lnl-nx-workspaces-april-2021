import { Controller, Get } from '@nestjs/common';
import { Instance } from '@aws/shared/ec2/domain';

@Controller('instances')
export class InstancesController {
  @Get()
  getAll(): Instance[] {
    return [
      {
        id: 'inst-a',
        name: 'Server A',
        type: 'Linux',
        state: 'Available',
        vpcId: 'vpc-123',
      },
      {
        id: 'inst-b',
        name: 'Server B',
        type: 'Windows',
        state: 'Available',
        vpcId: 'vpc-123',
      },
    ];
  }
}
