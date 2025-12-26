import { Header, Footer } from '../components/Base';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout;
