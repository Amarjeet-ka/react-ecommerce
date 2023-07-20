import React from 'react';
import './App.css';
import Home from './features/page/Home';
import Loginpage from './features/page/Loginpage';
import SignupPage from './features/page/SignupPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cartpage from './features/page/Cartpage';
import Checkout from './features/page/Checkout';
import ProductDetailPage from './features/page/ProductDetailPage';

const router = createBrowserRouter([
  {
  path:'/',
  element:(<Home/>)
  },
  {
    path:'/login',
   element: (<Loginpage/>)
  },
  { 
    path:'/sign-up',
    element:(<SignupPage/>)
  },
  {
    path:"/cart",
   element:(<Cartpage/>)
  },
  {
    path:"/checkout",
   element:(<Checkout/>)
  },
  {
    path:"/product-detail",
   element:(<ProductDetailPage/>)
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <RouterProvider router={router}/>
      </header>
    </div>
  );
}

export default App;
