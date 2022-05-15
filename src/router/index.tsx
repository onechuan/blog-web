import  React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

/*加入路由懒加载*/
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));

// const RouterContainer: React.FC = ()=>{
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />}/>
//                 <Route path="blog" element={<Blog />}/>
//                 <Route path="*" element={<h1>Not found page</h1>}/>
//             </Routes>
//         </Router>
//     )
// }

const RouterContainer: React.FC = ()=>{
    return useRoutes([
        {path:"/", element:<Home/>},
        {path:"/blog",element:<Blog/>}
    ])
}

export default RouterContainer;