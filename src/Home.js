import React,{Component} from "react";

class Home extends React.Component {
    render() {
        return(
            <div style = {{textAlign:'center'}}>
                <div>
                    <h1>
                        Welcome to React
                    </h1>
                    <button onClick={this.props.onLogOut}>Log Out</button>
                </div>
            </div>
        )
    }
}

export default Home;