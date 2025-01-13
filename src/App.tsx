import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import store from "./store/store.ts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from './pages/MenuPage';
import LoginPage from "./pages/LoginPage.tsx";


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
