import { Injectable, Inject } from '@nestjs/common';
import { WorkflowInterfaceModel } from './workflow-interface.model';
import { IWorkflowInterfaceRepository } from 'src/workflow-interface/repository/workflow-interface.repository.interface';
import { CreateWorkflowInterfaceWithStepsDto } from 'src/workflow-interface/dto/create-workflow-interface.dto';

@Injectable()
export class WorkflowInterfaceService {
  constructor(
    @Inject('IWorkflowInterfaceRepository')
    private readonly workflowInterfaceRepo: IWorkflowInterfaceRepository,
  ) {}

  create(
    data: CreateWorkflowInterfaceWithStepsDto,
  ): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceRepo.create(data);
  }

  findAll(): Promise<WorkflowInterfaceModel[]> {
    return this.workflowInterfaceRepo.findAll();
  }

  findById(id: number): Promise<WorkflowInterfaceModel | null> {
    return this.workflowInterfaceRepo.findById(id);
  }

  update(
    id: number,
    data: Partial<WorkflowInterfaceModel>,
  ): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceRepo.update(id, data);
  }

  delete(id: number): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceRepo.delete(id);
  }

  findByUrn(urn: string): Promise<WorkflowInterfaceModel | null> {
    return this.workflowInterfaceRepo.findByUrn(urn);
  }
}
