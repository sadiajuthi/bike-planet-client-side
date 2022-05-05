
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import UpdateProduct from './component/UpdateProduct/UpdateProduct';
import Additem from './component/Additem/Additem';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/additem' element={<Additem></Additem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update/:productId' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
      <Route path='*' element={<NotFound></NotFound>}></Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
