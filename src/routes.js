import Home from "./Pages/Home";

export const routes =  [
    {
        name:"ProductsPage",
        path:"/products",
        exact:true,
        element: <Home />
    }
]