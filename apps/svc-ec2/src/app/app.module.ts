import { Module } from '@nestjs/common';
import { InstancesController } from './instances.controller';

@Module({
  imports: [],
  controllers: [InstancesController],
  providers: [],
})
export class AppModule {}
