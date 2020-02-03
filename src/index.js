import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './resources/styles/style.css';
import Routes from './Routes';

const App=()=>{

    return(

        <BrowserRouter>
            <Route path="/" component={Routes}/>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


