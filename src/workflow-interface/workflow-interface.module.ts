import { Module } from '@nestjs/common';
import { WorkflowInterfaceService } from './workflow-interface.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaWorkflowInterfaceRepository } from 'src/workflow-interface/repository/workflow-interface.prisma.repository';
import { WorkflowInterfaceController } from 'src/workflow-interface/workflow-interface.controller';

@Module({
  controllers: [WorkflowInterfaceController],
  providers: [
    WorkflowInterfaceService,
    PrismaService,
    {
      provide: 'IWorkflowInterfaceRepository',
      useClass: PrismaWorkflowInterfaceRepository,
    },
  ],
  exports: [WorkflowInterfaceService],
})
export class WorkflowInterfaceModule {}
