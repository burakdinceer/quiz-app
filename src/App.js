import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </>
  );
}

export default App;
