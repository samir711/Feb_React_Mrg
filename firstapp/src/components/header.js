import React, {Component} from 'react';


// const render = () => {

// }

class Header extends Component {

    inputChange(event) {
        console.log("writing");

    }
    render() {

        return(
            <header>
            <h2 className='logo'
             onClick={() => console.log('clicked')}
            >React App</h2>
            <center>
            <input type="text" placeholder = "Enter your Search"
            onChange = {this.inputChange}
            />
            </center>
            <hr/>
        </header>
        )
    }
}



export default Header;