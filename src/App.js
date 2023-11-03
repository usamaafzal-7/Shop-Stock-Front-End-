import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AdminCustomer from './Component/Admin&CustomerPage/AdminCustomer';
import AdminLogin from './Component/AdminLogin/AdminLogin';
import AdminAppBar from './Component/AdminPanel/AdminAppBar/AdminAppBar';
import { Dashboard } from './Component/AdminPanel/Pages/Dashboard';
import Products from './Component/AdminPanel/Pages/Products';
import CartProduct from './Component/CartProduct/CartProduct';
import Footer from './Component/Common Componet/Footer/Footer';
import WebBar from './Component/Common Componet/WebBar/WebBar';
import HomePage from './Component/HomePage/HomePage';
import Login from './Component/LoginPage/Login';
import MenProduct from './Component/ProductPage/MenProduct';
import SignUp from './Component/SignUpPage/SignUp';
function App() {
  // console.log(process.env.REACT_APP_HOST,"hossssstyyyy")
  return (
    <>
      <WebBar/>
      <Routes>
        <Route path='/' element={<Box><HomePage /></Box>}></Route>
        <Route path='/adminandcustomer' element={<Box><AdminCustomer /></Box>}></Route>
        <Route path='/admin' element={<Box><AdminLogin /></Box>}></Route>
        <Route path='/customer' element={<Box><Login /></Box>}></Route>
        <Route path='/signUp' element={<Box><SignUp /></Box>}></Route>
        <Route path='/menproduct' element={<Box><MenProduct /></Box>}></Route>
        <Route path='/cartProduct' element={<Box><CartProduct /></Box>}></Route>
        {/* <Route path='/adminapp' element={<AdminAppBar/>}></Route> */}
        <Route path='/dashboard' element={<Box><AdminAppBar /><Dashboard /></Box>}></Route>
        <Route path='/pro' element={<Box><AdminAppBar /><Products /></Box>}> </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
