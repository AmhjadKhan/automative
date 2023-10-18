
import Mainlout from '../Mainlayout/Mainlout';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Addproduct from '../Pages/Addproduct';
import Login from '../Pages/Login';
import Mycart from '../Pages/Mycart';
import User from '../Pages/User';

const myCreateRoute = createBrowserRouter([
    {
      path:'/',
      element:<Mainlout />,
      children:[
        {
            path:'/',
            element:<App />,
            loader: () => fetch('http://localhost:5000/allCars')
        },
        {
            path:'/about',
            element:<About />
        },
        {
            path:'/addproduct',
            element:<Addproduct />
        },
        {
           path:'/mycart',
           element:<Mycart />
        },
        {
            path:"/user",
            element:<User />
        },
        {
            path:'/login',
            element:<Login />
        }
      ]
    }
])
export default myCreateRoute;