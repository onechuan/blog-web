import { getToken } from "@/utils/auth";
import axios, { AxiosResponse,AxiosRequestConfig } from "axios";


export interface IHttpResponse<T=unknown>{
    status:number;
    msg:string;
    code:number;
    data:T;
}

const baseUrlMap = {
    test:"http://localhost:3001/",
    mock:"https://www.fastmock.site/mock/529b7481979b1b6705e49a40a9d65be5/blog/api"
}

// 创建实例
const instance = axios.create({
    baseURL: baseUrlMap.mock,
    timeout:5000
});


// 配置请求和响应拦截
instance.interceptors.request.use(
    (config: AxiosRequestConfig)=>{
        const token = getToken();
        if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response: AxiosResponse<IHttpResponse>)=>{
        const { code, msg, data } = response.data;
        console.log("response",response);
        
        if(code !== 200){
            return Promise.reject(new Error(msg || 'Error'));
        }
        return data;
    },
    error=>{
        return Promise.reject(error);
    }
)


export default instance;