import { Outlet } from 'react-router-dom';
import Naver from '../Compment/Header/Naver/Naver';
import Footer from '../Compment/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="">
      <div className="">
        <Naver></Naver>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
