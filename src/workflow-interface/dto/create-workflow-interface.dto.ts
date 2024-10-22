import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsArray,
  ValidateNested,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWorkflowStepDto {
  @ApiProperty({ description: 'URN of the workflow step' })
  @IsString()
  urn: string;

  @ApiProperty({ description: 'Step event URN' })
  @IsString()
  step_event_urn: string;

  @ApiProperty({ description: 'Step event ID' })
  @IsInt()
  step_event_id: number;

  @ApiProperty({ description: 'Whether this is the main event' })
  @IsBoolean()
  is_main_event: boolean;

  @ApiProperty({ description: 'Title of the workflow step' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Order of the workflow step' })
  @IsInt()
  order: number;

  @ApiProperty({ description: 'Assignee URN' })
  @IsString()
  assignee_urn: string;

  @ApiProperty({
    description: 'Description of the workflow step',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Whether the step is approvable' })
  @IsBoolean()
  approvable: boolean;

  @ApiProperty({ description: 'Whether the step is skippable' })
  @IsBoolean()
  skippable: boolean;

  @ApiProperty({ description: 'Whether the step is cancellable' })
  @IsBoolean()
  cancellable: boolean;
}

export class CreateWorkflowInterfaceWithStepsDto {
  @ApiProperty({ description: 'URN of the workflow interface' })
  @IsString()
  urn: string;

  @ApiProperty({
    description: 'Organization ID associated with the workflow interface',
  })
  @IsInt()
  organization_id: number;

  @ApiProperty({ description: 'Group URN for the workflow interface' })
  @IsString()
  group_urn: string;

  @ApiProperty({ description: 'Title of the workflow interface' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Subtitle of the workflow interface',
  })
  @IsString()
  subtitle: string;

  @ApiProperty({
    description: 'Description of the workflow interface',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Author URN for the workflow interface' })
  @IsString()
  author_urn: string;

  @ApiProperty({ description: 'List of workflow steps' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWorkflowStepDto)
  steps: CreateWorkflowStepDto[];
}
