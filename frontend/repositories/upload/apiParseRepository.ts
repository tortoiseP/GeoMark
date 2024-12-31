import ApiServiceV2 from '@/services/api.service.v2'

export class APIParseRepository {
  constructor(private readonly request = ApiServiceV2) {}

  async analyze(
    projectId: string,
    format: string,
    task: string,
    uploadIds: number[],
    option: object
  ): Promise<string> {
    const url = `/projects/${projectId}/upload`
    const data = {
      format,
      task,
      uploadIds,
      ...option
    }
    const response = await this.request.post(url, data)
    return response.data.task_id
  }

  revert(serverId: string): void {
    const url = `/fp/revert/`
    this.request.delete(url, serverId)
  }
}
