import ApiServiceV2 from '@/services/api.service.v2'
import { Catalog } from '~/domain/models/upload/catalog'

function toModel(item: { [key: string]: any }): Catalog {
  return new Catalog(
    item.name,
    item.example,
    item.properties,
    item.task_id,
    item.display_name,
    item.accept_types
  )
}

export class APICatalogRepository {
  constructor(private readonly request = ApiServiceV2) {}

  async list(projectId: string): Promise<Catalog[]> {
    const url = `/projects/${projectId}/catalog`
    const response = await this.request.get(url)
    return response.data.map((item: any) => toModel(item))
  }
}
