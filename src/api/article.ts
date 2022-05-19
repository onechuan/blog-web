import http from "./http";

export function fetchArticles(params: any = {}): Promise<any>{
    return http.get("/article/list",{...params});
}

export function fetchArticleHots(params: any = {}): Promise<any>{
    return http.get("/article/hots",{...params});
}