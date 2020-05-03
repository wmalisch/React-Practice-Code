import React from 'react';
import Contacts from './Contacts.js'

class App extends React.Component {
    state = {
        contacts: []
    }
    
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        })
    }

    render(){
        return(
            <Contacts contacts={this.state.contacts} />
        );
    }
}
export default App;