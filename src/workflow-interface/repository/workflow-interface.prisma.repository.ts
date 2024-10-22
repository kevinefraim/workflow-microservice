import { Injectable } from '@nestjs/common';
import { IWorkflowInterfaceRepository } from './workflow-interface.repository.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkflowInterfaceModel } from 'src/workflow-interface/workflow-interface.model';
import { CreateWorkflowInterfaceWithStepsDto } from 'src/workflow-interface/dto/create-workflow-interface.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaWorkflowInterfaceRepository
  implements IWorkflowInterfaceRepository
{
  constructor(private readonly prisma: PrismaService) {}

  private include: Prisma.Workflow_interfaceInclude = {
    workflow_steps: { include: { step_event_type: true } },
  };

  async create(
    data: CreateWorkflowInterfaceWithStepsDto,
  ): Promise<WorkflowInterfaceModel> {
    const { steps, ...rest } = data;
    console.log(steps, 'steps');

    return this.prisma.workflow_interface.create({
      data: {
        ...rest,
        workflow_steps: {
          createMany: {
            data: steps.map((step) => ({
              ...step,
            })),
          },
        },
      },
      include: this.include,
    }) as unknown as WorkflowInterfaceModel;
  }

  async findAll(): Promise<WorkflowInterfaceModel[]> {
    return this.prisma.workflow_interface.findMany({
      include: this.include,
    }) as unknown as WorkflowInterfaceModel[];
  }

  async findById(id: number): Promise<WorkflowInterfaceModel | null> {
    return this.prisma.workflow_interface.findUnique({
      where: { id },
      include: this.include,
    }) as unknown as WorkflowInterfaceModel;
  }

  async update(
    id: number,
    data: Partial<WorkflowInterfaceModel>,
  ): Promise<WorkflowInterfaceModel> {
    const {
      id: workflowId,
      created_at,
      updated_at,
      deleted_at,
      ...rest
    } = data;

    return this.prisma.workflow_interface.update({
      where: { id },
      data: rest,
    }) as unknown as WorkflowInterfaceModel;
  }

  async delete(id: number): Promise<WorkflowInterfaceModel> {
    return this.prisma.workflow_interface.delete({
      where: { id },
    }) as unknown as WorkflowInterfaceModel;
  }

  async findByUrn(urn: string): Promise<WorkflowInterfaceModel | null> {
    return this.prisma.workflow_interface.findFirst({
      where: { urn },
    }) as unknown as WorkflowInterfaceModel;
  }
}
