import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//Component

import Posts from './post_file';
import Profile from './profile_file';
import Home from './Home'

class Routing extends Component {

    render() {
        return(
            <BrowserRouter>
                 <div>
                     <header>
                        <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/profile">Profile</Link>

                     </header>
                            <Route path="/posts" component={Posts}></Route>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/profile" component={Profile}></Route>
                 </div>
            </BrowserRouter>


        )
    }

}

export default Routing;