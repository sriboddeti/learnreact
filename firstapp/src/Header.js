import React,{Component} from 'react';
//import { render } from 'react-dom';
class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Input'
        }
    }

    render(){
        const myStyle={
            header:{
                backgroundColor:'tomato'
            }
        }
        return(
            <React.Fragment>
                <header style={myStyle.header}>
                    <div style={myStyle.logo}>{this.state.title} </div>
                <center>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.keyword}</p>
                </center>
                </header>
                <hr/>
            </React.Fragment>
        )

    }
}
export default Header;


/*import React from 'react';
const Header = () => {
    return(
        <div>
            <center>
                <h1>First app</h1>
            </center>
        </div>
    )
}
export default Header;*/