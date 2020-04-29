import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props)

        this.state = { lat: null, errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(
            posit => {  
              this.setState({lat: posit.coords.latitude})  
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        )
    } 

    render(){
        
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
