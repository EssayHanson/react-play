import React, { Component } from 'react';

class People extends Component {

    render() {

        var names = ['Steven', 'Hansolo', 'August'];
        var namesList = names.map((name, index) => {
            return <div key={names + index}> 
                <li>{name}</li>
                </div>
        })
        return <ul>{ namesList }</ul>
    }
}

export default People;