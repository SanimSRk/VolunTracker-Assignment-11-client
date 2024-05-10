import { Outlet } from 'react-router-dom';
import Naver from '../Compment/Header/Naver/Naver';
import Footer from '../Compment/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="">
      <Naver></Naver>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
