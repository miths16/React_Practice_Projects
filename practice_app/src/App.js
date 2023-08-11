import './App.css';
import AddData from './Components/AddData';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewData from './Components/ViewData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddData/>} />
        <Route path='/view' element={<ViewData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
