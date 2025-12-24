import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Missing from './Missing';

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
