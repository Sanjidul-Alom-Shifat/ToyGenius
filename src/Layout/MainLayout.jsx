// import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    
    return (
        <div>
            
            <NavigationBar></NavigationBar>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;