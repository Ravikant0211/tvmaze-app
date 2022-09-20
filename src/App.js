import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';


// pages
import Homepage from './Pages/Homepage/Homepage';
import Singlepage from './Pages/SinglePage/Singlepage';

// styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path='/singleshow/:id' element={<Singlepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
