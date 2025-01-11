import { Routes, Route } from 'react-router-dom';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Components/Gallery/Gallery';
import { Header } from "./Components/Header/Header";
import { Home } from './Components/Home/Home';
import { useData } from './Components/Functions/Hooks/useData';
import { Join } from './Components/Join/Join';
import { Menu } from './Components/Menu/Menu';
import ScrollToTop from './Components/Functions/Tools/ScrollToTop';
import './App.css';

function App() {
  const data = useData();

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/menu" element={<Menu {...data} />} />
        <Route path="/gallery" element={<Gallery photos={data.photos} />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;