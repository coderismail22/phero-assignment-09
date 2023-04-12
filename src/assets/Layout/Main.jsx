import React from 'react';
import { Outlet } from 'react-router-dom';
import './Main.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Main = () => {
    return (
        <div className='bg-slate-200 flex flex-col min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;