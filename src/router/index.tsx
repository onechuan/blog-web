import  React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

/*加入路由懒加载*/
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));
const Timeline = lazy(() => import("@/pages/timeline"));
const About = lazy(() => import("@/pages/about"));
const Archive = lazy(() => import("@/pages/archive"));

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
        {path:"/blog",element:<Blog/>},
        {path:"/timeline",element:<Timeline/>},
        {path:"/about",element:<About/>},
        {path:"/archive",element:<Archive/>}
    ])
}

export default RouterContainer;