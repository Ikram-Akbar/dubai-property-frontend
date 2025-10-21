import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
   path: "/",
   Component:MainLayout,
   children:[
    { index: true,
      Component:Home,
    },
    { path: "home",
      Component:Home,
    },
   ]
  },
]);
