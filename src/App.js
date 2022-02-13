import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './pages/Main';
import Favorite from './pages/Favorite';
import './styles/App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import { Result } from "./pages/Result";


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/React-Challenge-StarWars/favorite" element={<Favorite />} />
          <Route path="/React-Challenge-StarWars/result" element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
