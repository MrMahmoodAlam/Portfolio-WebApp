import './index.css';

import Landing from "./Components/Landing";
import Resume from './Components/Resume';

import ContactLanding from './Components/ContactLanding';

import Article1 from './Components/ArticlesRoute/Article1';
import Article2 from './Components/ArticlesRoute/Article2';
import Article3 from './Components/ArticlesRoute/Article3';

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>

      <Routes>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>

      <Routes>
        <Route path='/contact' element={<ContactLanding/>}/>
      </Routes>

      <Routes>
        <Route path='/HTMLarticle' element={<Article1/>}/>
      </Routes>

      <Routes>
        <Route path='/CSSarticle' element={<Article2/>}/>
      </Routes>

      <Routes>
        <Route path='/JSarticle' element={<Article3/>}/>
      </Routes>


    </BrowserRouter>
      
    </>
  );
}

export default App;
