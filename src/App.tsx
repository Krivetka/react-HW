import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import HomePage from "./pages/HomePage";
import MenuPage from './pages/MenuPage';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Header/>
            {/*<MenuPage />*/}
            <HomePage />
            <Footer/>
        </Provider>

    );
};

export default App;
