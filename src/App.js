import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ArticlePage from './pages/articlepage/articlepage';
import ContactPage from './pages/contactpage/contact';
import Aboutpage from './pages/aboutpage/aboutpage';

function App() {
  return (
    <Router>
      <div className='maincontainer'>
        <Navbar/>
        <div className='routercontainer'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/articles" element={<ArticlePage/>}/>
            <Route path="/contact"  element={<ContactPage/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
          </Routes>
        </div>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;
