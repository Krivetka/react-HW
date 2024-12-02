import React from 'react';
import MenuPage from './pages/MenuPage';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import HomePage from "./pages/HomePage.tsx";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            {/*<MenuPage />*/}
            <HomePage />
        </Provider>

    );
};

export default App;
