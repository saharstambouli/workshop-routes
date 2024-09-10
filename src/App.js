import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'
import Settings from './components/Settings';
import Products from './pages/Products';
import ProductDescription from './pages/ProductDescription';


function App() {

  const navigate = useNavigate()


  const isAuth = false

  const getProfile = () => {
    if(isAuth){
      navigate('/profile')
    }else{
      navigate('*')
    }
  }


  return (
    <div className="App">
      <Navigation/>
        <Routes>

            <Route path="/" element={<Home getProfile={getProfile}/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/profile" element={<Profile/>} >
                <Route path='settings' element={<Settings/>} />
            </Route>  
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<ProductDescription/>}/>
            <Route path='*' element={<h1> page no found </h1>}/>


        </Routes>




    </div>
  );
}

export default App;
