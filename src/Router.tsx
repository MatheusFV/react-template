import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeRouter } from './modules/Home/router';


export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <HomeRouter path=""/>
        </BrowserRouter>
    );
}