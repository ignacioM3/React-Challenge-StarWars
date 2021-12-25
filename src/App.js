import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main';
import Favorite from './pages/Favorite';
import './styles/App.css'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
