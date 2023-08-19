import { createBrowserRouter} from "react-router-dom";
 import App from "./App";
 import Home from './pages/Home';
 import SignIn from "./pages/Sign-in";
 import User from './pages/User';
 import Error from "./components/Error"


 const router = createBrowserRouter([
     {
         element: <App />,
         children: [
           { path: "/", element: <Home /> },
           {
             element: <SignIn />,
             path:"/sign-in",
           },
           { path: "/user", element: <User /> },
           { path: "*", element: <Error /> },
         ],
       }
 ]
 )

export default router;