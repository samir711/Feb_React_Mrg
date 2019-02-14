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
            news : JSON,
            filtered: JSON

        }
    }

    filterNews(keyword) {
   //     console.log("getting in filter", keyword);
        let filtered = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;

        });
    
        this.setState({filtered:filtered})
   //console.log(filtered);
    }


    render() {
         
        return(

            <div>
            <Header newSearch= {(data) => this.filterNews(data)}/>
            <NewsList newsData = {this.state.filtered}/>
            {/* <h1>React First Component with react</h1>
            <h1>React with Redux</h1> */}

        </div>

        )

    }

}


//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'))