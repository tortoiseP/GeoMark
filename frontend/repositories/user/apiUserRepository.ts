import { UserItem } from '@/domain/models/user/user'
import ApiServiceV2 from '@/services/api.service.v2'

function toModel(item: { [key: string]: any }): UserItem {
  return new UserItem(item.id, item.username, item.is_superuser, item.is_staff)
}

export class APIUserRepository {
  constructor(private readonly request = ApiServiceV2) {}

  async getProfile(): Promise<UserItem> {
    const url = '/me'
    const response = await this.request.get(url)
    return toModel(response.data)
  }

  async list(query: string): Promise<UserItem[]> {
    const url = `/users?q=${query}`
    const response = await this.request.get(url)
    return response.data.map((item: { [key: string]: any }) => toModel(item))
  }
}
