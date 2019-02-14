import React, {Component} from  'react';
import ReactDOM from 'react-dom';

// Component

//import Home from './home';
import Header from './components/header';
import NewsList from './components/news_list';


//Data
import JSON from './db.json';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            news : JSON

        }
    }

    render() {
         
        return(

            <div>
            <Header/>
            <NewsList newsData = {this.state.news}/>
            {/* <h1>React First Component with react</h1>
            <h1>React with Redux</h1> */}

        </div>

        )

    }

}


//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'))