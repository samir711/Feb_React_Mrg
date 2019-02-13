import React from  'react';
import ReactDOM from 'react-dom';

// Component

import Home from './home';

const App = () => {
    return(
        <div>
            <h1>React First Component with react</h1>
           <h1>React with Redux</h1>
            <Home/>
        </div>
    )
}

//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'))