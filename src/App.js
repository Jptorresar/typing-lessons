import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './components/home.jsx'
import Lessons from './components/Lessons.jsx'
import Assessment from './components/Assessment.jsx';
import Resourses from './components/resourses.jsx'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resourses" element={<Resourses />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
