import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WorkflowInterfaceModule } from 'src/workflow-interface/workflow-interface.module';

@Module({
  imports: [PrismaModule, WorkflowInterfaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
