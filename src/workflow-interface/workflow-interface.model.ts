export class WorkflowInterfaceModel {
  id: number;
  urn: string;
  organization_id: number;
  group_urn: string;
  title: string;
  subtitle: string;
  description: string;
  author_urn: string;
  activated_at: Date | null;
  created_at: Date;
  deleted_at: Date | null;
  updated_at: Date;
}
