import Create from "./Pages/Create";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

export const routes =  [
    {
        name:"ProductsPage",
        path:"/",
        element: <Home />
    },
    {
        name:"DetailsPage",
        path:"/product/details/:id",
        element: <Details />
    },
    {
        name:"CreatePage",
        path:"/product/create",
        element: <Create />
    },
]