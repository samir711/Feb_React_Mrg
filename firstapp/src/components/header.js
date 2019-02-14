import React, {Component} from 'react';


// const render = () => {

// }

class Header extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React News App',
            keyword: 'User Search',
            search: 'User Search'

        }
    }

    inputChange(event) {
        console.log(event.target.value);
        this.setState({keyword:(event.target.value?event.target.value:'User Search')});
        this.props.newSearch(event.target.value)

    }
    render() {

        return(
            <header>
            <h2 className='logo'
             onClick={() => console.log('clicked')}
            >{this.state.title}</h2>
            <center>
            <input type="text" placeholder = "Enter your Search"
            onChange = {this.inputChange.bind(this)}

            />
            <h3>{this.state.keyword}</h3>
            </center>
            <hr/>
        </header>
        )
    }
}



export default Header;