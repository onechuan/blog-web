import http from './http'

export function fetchArticles(params: any = {}): Promise<any> {
  return http.get('/v2/article/list', { ...params })
}

export function fetchArticleHots(params: any = {}): Promise<any> {
  return http.get('/v2/article/hots', { ...params })
}
