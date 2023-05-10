import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Kids from './components/Kids/Kids';
import Men from './components/Men/Men';
import Women from './components/Women/Women';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Women />
      <Men />
      <Kids />
      <Home />
    </div>
  );
}

export default App;
