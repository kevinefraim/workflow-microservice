import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsArray,
  ValidateNested,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWorkflowStepDto {
  @ApiProperty({ description: 'URN of the workflow step' })
  @IsNotEmpty()
  @IsString()
  urn: string;

  @ApiProperty({ description: 'Step event URN' })
  @IsString()
  @IsNotEmpty()
  step_event_urn: string;

  @ApiProperty({ description: 'Step event ID' })
  @IsNotEmpty()
  @IsInt()
  step_event_id: number;

  @ApiProperty({
    description: 'Whether this is the main event',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  is_main_event: boolean;

  @ApiProperty({ description: 'Title of the workflow step' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Order of the workflow step', required: false })
  @IsInt()
  @IsOptional()
  order: number;

  @ApiProperty({ description: 'Assignee URN', required: false })
  @IsString()
  @IsOptional()
  assignee_urn: string;

  @ApiProperty({
    description: 'Description of the workflow step',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Whether the step is approvable' })
  @IsBoolean()
  @IsOptional()
  approvable: boolean;

  @ApiProperty({ description: 'Whether the step is skippable' })
  @IsBoolean()
  @IsOptional()
  skippable: boolean;

  @ApiProperty({ description: 'Whether the step is cancellable' })
  @IsBoolean()
  @IsOptional()
  cancellable: boolean;
}

export class CreateWorkflowInterfaceWithStepsDto {
  @ApiProperty({ description: 'URN of the workflow interface' })
  @IsString()
  @IsNotEmpty()
  urn: string;

  @ApiProperty({
    description: 'Organization ID associated with the workflow interface',
  })
  @IsInt()
  @IsNotEmpty()
  organization_id: number;

  @ApiProperty({ description: 'Group URN for the workflow interface' })
  @IsString()
  @IsNotEmpty()
  group_urn: string;

  @ApiProperty({ description: 'Title of the workflow interface' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Subtitle of the workflow interface',
  })
  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @ApiProperty({
    description: 'Description of the workflow interface',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Author URN for the workflow interface' })
  @IsString()
  @IsNotEmpty()
  author_urn: string;

  @ApiProperty({ description: 'List of workflow steps' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWorkflowStepDto)
  steps: CreateWorkflowStepDto[];
}
