import React, { Component } from 'react';

class Comment extends Component {

    constructor(props) {
        
        super(props) 
        this.state = {
            counter: 0
        };
    }

    render() {

        return <h1>{this.props.name}</h1>;
    }
}

export default Comment;