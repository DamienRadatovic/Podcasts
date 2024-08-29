import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import useIsMobile from '@/hooks/mobile.hook.ts';
import BurgerMenu from '@/components/burger-menu/BurgerMenu.tsx';
import { useState } from 'react';

const NavBar = () => {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickBurger = (): void => {
        setIsOpen((prev) => !prev);
    };
    
    const handleClickHome = (): void => {
        navigate('/');
    };

    const navList = [
        { path: '/podcasts', title: 'Podcasts' },
        { path: '/blog', title: 'Blog' },
        { path: '/about', title: 'About Us' },
    ];

    return <>
        <div className="nav-bar">
            <div className="nav-bar-container">
                <div className="nav-bar-left" onClick={handleClickHome}>
                    <h2>Podcats.</h2>
                </div>
                <div className="nav-bar-right">
                    {
                        isMobile ?
                            <BurgerMenu onClick={handleClickBurger}/>
                            :
                            navList.map((item) => (
                                <NavLink key={item.path} to={item.path}>
                                    <h3>{item.title}</h3>
                                </NavLink>
                            ))
                    }
                </div>
            </div>
            <div className={`burger-container ${isOpen ? 'open-burger' : 'close-burger'}`}>
                {
                    navList.map((item) => (
                        <NavLink key={item.path} to={item.path}>
                            <h3>{item.title}</h3>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    </>;
};

export default NavBar;
