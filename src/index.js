import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Comment from "./Comment.js";


function App() {
    return <div className="ui container comments">
        <Comment author="Sam"/>
        <Comment author="Will"/>
        <Comment author="Rhys"/>
        
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"))