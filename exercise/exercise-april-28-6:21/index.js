import * as React from 'react';
import * as ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from "./Comment.js";
import ApprovalCard from "./ApprovalCard.js"


function App() {
    return <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
            </div>
            Are you sure this is going to work</ApprovalCard>
        <ApprovalCard>
            <Comment 
                author="Sam" 
                timeAgo="Today @ 5:00PM" 
                av={faker.image.avatar()} 
                post="That post was awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwesome"/>
        </ApprovalCard>
        <ApprovalCard>
            <Comment 
                author="Will"
                timeAgo="Yesterday @ 3:00AM" 
                av={faker.image.avatar()} 
                post="Good stuff"/>
        </ApprovalCard>
        <ApprovalCard>
            <Comment 
                author="Rhys" 
                timeAgo="Unknown" 
                av={faker.image.avatar()} 
                post="YEEEEE buddy"/>
        </ApprovalCard>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"))
