import Layout from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Missing from './pages/Missing';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Layout/>}>
        <Route index element={<Home />}/> 
        <Route path='about' element={<About />}/>
        <Route path='*' element={<Missing />}/>
      </Route>
    </Routes>
      
  );
}

export default App;
