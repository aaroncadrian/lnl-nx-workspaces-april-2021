import { Controller, Get } from '@nestjs/common';
import { Subnet } from '@aws/shared/subnets/domain';

@Controller('subnets')
export class SubnetsController {
  @Get()
  getAll(): Subnet[] {
    return [
      { id: 'subnet-a', name: 'Subnet A', state: 'Available' },
      { id: 'subnet-b', name: 'Subnet B', state: 'Available' },
    ];
  }
}
