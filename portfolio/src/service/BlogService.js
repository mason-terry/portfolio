import { Api } from './ApiService'

export default {
  getBlogEntries() {
    return Api.get('/blog')
  }
}
