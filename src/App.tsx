import React from 'react';
import MenuPage from './pages/MenuPage';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store.ts";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <MenuPage />
        </Provider>

    );
};

export default App;
