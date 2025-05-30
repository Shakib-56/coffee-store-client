import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from './LayOut/MainLayOut.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    children:[{
      index:true,
      loader:()=>fetch("http://localhost:3000/coffees"),
      Component:Home,
    },
    {
      path:"addCoffee",
      Component:AddCoffee
    },{
      path:"updateCofee",
      Component:UpdateCoffee
    },
    {
      path:"coffee/:id",
      loader:({params})=>{
        console.log(params.id);
       return fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      Component:CoffeeDetails
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
