import './Layout.css';
import NavBar from '@/components/nav-bar/NavBar.tsx';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer/Footer.tsx';

const Layout = () => {
    return <>
        <div className="layout">
            <NavBar/>
            <div className="content-layout">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>;
};

export default Layout;
