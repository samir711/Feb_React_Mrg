import React from  'react';
import ReactDOM from 'react-dom';

// Component

//import Home from './home';
import Header from './components/header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>React First Component with react</h1>
           <h1>React with Redux</h1>

        </div>
    )
}

//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'))