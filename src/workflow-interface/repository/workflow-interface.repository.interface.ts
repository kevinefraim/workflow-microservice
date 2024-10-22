import { CreateWorkflowInterfaceWithStepsDto } from 'src/workflow-interface/dto/create-workflow-interface.dto';
import { WorkflowInterfaceModel } from 'src/workflow-interface/workflow-interface.model';

export interface IWorkflowInterfaceRepository {
  create(
    data: CreateWorkflowInterfaceWithStepsDto,
  ): Promise<WorkflowInterfaceModel>;
  findAll(): Promise<WorkflowInterfaceModel[]>;
  findById(id: number): Promise<WorkflowInterfaceModel | null>;
  update(
    id: number,
    data: Partial<WorkflowInterfaceModel>,
  ): Promise<WorkflowInterfaceModel>;
  delete(id: number): Promise<WorkflowInterfaceModel>;
  findByUrn(urn: string): Promise<WorkflowInterfaceModel | null>;
}
