import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { IRouterProps } from '../../common/interfaces/IRouterProps';

export const HomeRouter: React.FC<IRouterProps> = (props) => {
    return (
        <div>
            <Route path={`${props.path}/`} component={HomePage}/>
        </div>
    )
}