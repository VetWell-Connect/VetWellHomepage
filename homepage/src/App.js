import "./App.css";
import { BrowserRouter, Routes, Route }from "react-router-dom";
import InfoCarousel from "./components/AppCarousel";
import NavigationBar from './components/AppNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Discover from './Pages/Discover';
import Contact from './Pages/Contact';
import AppFooter from "./components/AppFooter";
import Login from './Pages/Login';
import SignUp from './Pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavigationBar/>
        </header>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/discover' element={<Discover/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <main>
        </main>
        <footer>
          <AppFooter/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
