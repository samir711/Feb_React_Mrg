import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react';

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
                            <Route path="/posts" Component={Posts}></Route>
                            <Route exact path="/" Component={Home}></Route>
                            <Route path="/profile" Component={Profile}></Route>
                 </div>
            </BrowserRouter>


        )
    }

}

export default Routing;