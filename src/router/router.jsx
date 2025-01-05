import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import Homepage from "../pages/HomePage/Homepage";
import FindTutors from "../pages/FindTutors/FindTutors";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Auth from "../Auth/Auth";
import Details from "../pages/Details/Details";
import PrivateRouter from "./PrivateRouter";
import UpdateMyTuturial from "../pages/UpdateMyTuturial/UpdateMyTuturial";
import LangCategory from "../pages/LangCategory/LangCategory";
import MyBookedTutorsCard from "../pages/MyBookedTutors/MyBookedTutorsCard";
import LangugeFilterCard from "../pages/HomePage/LangugeFilterCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/findTutors',
        element: <FindTutors></FindTutors>

      },
      {
        path: '/myBookedTutors',
        element: <PrivateRouter><MyBookedTutors></MyBookedTutors></PrivateRouter>,
        
      },
      {
        path: '/myBookedTutorsCard',
        element: <PrivateRouter><MyBookedTutorsCard></MyBookedTutorsCard></PrivateRouter>,
        
      },
      {
        path: '/myTutorials',
        element: <PrivateRouter><MyTutorials></MyTutorials></PrivateRouter> 

      },
      {
        path: '/addtutorials',
        element: <PrivateRouter><AddTutorials></AddTutorials></PrivateRouter> 
      },
      {
        path: '/updatemytuturial/:id',
        element: <PrivateRouter><UpdateMyTuturial></UpdateMyTuturial></PrivateRouter>,
        loader: ({params}) => fetch(`https://langauge-tutor-server.onrender.com/langauges/${params.id}`)
        
      },
      
      {
        path: '/details/:id',
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: ({params}) => fetch(`https://langauge-tutor-server.onrender.com/langauges/${params.id}`)

      },
      {
        path: '/langugeFilterCard',
        element: <LangugeFilterCard></LangugeFilterCard>,
        
      },
      {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
          {
            path: '/auth/login',
            element: <Login></Login>
          },
          {
            path: '/auth/register',
            element: <Register></Register>
          },
        ]
      },

    ]
  },
]);


export default router;
