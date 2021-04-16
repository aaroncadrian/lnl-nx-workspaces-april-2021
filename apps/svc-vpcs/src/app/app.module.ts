import { Module } from '@nestjs/common';
import { SubnetsController } from './subnets.controller';
import { SecurityGroupsController } from './security-groups.controller';

@Module({
  imports: [],
  controllers: [SubnetsController, SecurityGroupsController],
  providers: [],
})
export class AppModule {}
