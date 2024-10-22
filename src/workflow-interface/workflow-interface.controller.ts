import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { WorkflowInterfaceService } from './workflow-interface.service';
import { WorkflowInterfaceModel } from './workflow-interface.model';
import { CreateWorkflowInterfaceWithStepsDto } from 'src/workflow-interface/dto/create-workflow-interface.dto';

@ApiTags('workflow-interface')
@Controller('workflow-interface')
export class WorkflowInterfaceController {
  constructor(
    private readonly workflowInterfaceService: WorkflowInterfaceService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new workflow interface' })
  @ApiBody({
    description: 'Workflow Interface Data',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({
    status: 201,
    description: 'The workflow interface has been created successfully.',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(
    @Body() data: CreateWorkflowInterfaceWithStepsDto,
  ): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all workflow interfaces' })
  @ApiResponse({
    status: 200,
    description: 'All workflow interfaces retrieved successfully.',
    type: [WorkflowInterfaceModel],
  })
  async findAll(): Promise<WorkflowInterfaceModel[]> {
    return this.workflowInterfaceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a workflow interface by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the workflow interface',
  })
  @ApiResponse({
    status: 200,
    description: 'Workflow interface found.',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({ status: 404, description: 'Workflow interface not found' })
  async findById(
    @Param('id') id: string,
  ): Promise<WorkflowInterfaceModel | null> {
    return this.workflowInterfaceService.findById(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a workflow interface by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the workflow interface to update',
  })
  @ApiBody({
    description: 'Updated workflow interface data',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({
    status: 200,
    description: 'Workflow interface updated successfully.',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Workflow interface not found' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<WorkflowInterfaceModel>,
  ): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceService.update(+id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a workflow interface by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the workflow interface to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'Workflow interface deleted successfully.',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({ status: 404, description: 'Workflow interface not found' })
  async delete(@Param('id') id: string): Promise<WorkflowInterfaceModel> {
    return this.workflowInterfaceService.delete(+id);
  }

  @Get('urn/:urn')
  @ApiOperation({ summary: 'Get a workflow interface by URN' })
  @ApiParam({
    name: 'urn',
    type: String,
    description: 'URN of the workflow interface',
  })
  @ApiResponse({
    status: 200,
    description: 'Workflow interface found.',
    type: WorkflowInterfaceModel,
  })
  @ApiResponse({ status: 404, description: 'Workflow interface not found' })
  async findByUrn(
    @Param('urn') urn: string,
  ): Promise<WorkflowInterfaceModel | null> {
    return this.workflowInterfaceService.findByUrn(urn);
  }
}
