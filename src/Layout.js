import { Header, Footer } from './Base';
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
