import { Module } from '@nestjs/common';
import { SubnetsController } from './subnets.controller';

@Module({
  imports: [],
  controllers: [SubnetsController],
  providers: [],
})
export class AppModule {}
