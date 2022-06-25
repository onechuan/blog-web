import { fetchArticles } from "@/api/article";
import { IArticle } from "@/interface/article";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArticleData {
    total:number;
    current:number;
    articles:IArticle[]
}

interface IArticleSlice {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: IArticleSlice = {
    loading: true,
    error: null,
    data: {
        total:0,
        current:1,
        articles:[]
    }
}

export const getArticles = createAsyncThunk(
    "article/list",
    async (params:any, thunkAPI)=>{
        const res = await fetchArticles();
        console.log("res", res);
        
        return res;
    }
)

export const articleSlice = createSlice({
    name:"article",
    initialState,
    reducers:{},
    extraReducers:{
        [getArticles.pending.type]: (state: IArticleSlice)=>{
            state.loading = true;
        },
        [getArticles.fulfilled.type]: (state:IArticleSlice,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [getArticles.rejected.type]: (state:IArticleSlice,action:PayloadAction<string|null>)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = action.payload;
        }
    }
});

export default null;