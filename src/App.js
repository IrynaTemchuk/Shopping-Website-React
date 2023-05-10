import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from './pages/main';
import Women from './pages/women';
import Men from './pages/men';
import Kids from './pages/kids';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Router>
    <Navbar />
    <Routes>
        <Route path='/main' element={<Main/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/home' element={<Home/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
