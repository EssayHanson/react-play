import React, { Component } from 'react';

class Turtles extends Component { 

    render(){

        const turtles = [
            {
                name: "Leonardo",
                nickName: "Leo",
                weapon: "Katana",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                name: "Donatello",
                nickName: "Don",
                weapon: "Bo staff",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                name: "Michelangelo",
                nickName: "Mikey",
                weapon: "Nunchucks",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
            },
            {
                name: "Raphael",
                nickName: "Raph",
                weapon: "Sai",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
            }
        ]
       
        const displayTurtles =  turtles.map((turtle, index) => 
            <div>
                <div key={turtle.name + index}>
                    <h1>{turtle.name} ({turtle.nickName})</h1>
                    <p>Weapon of choice: {turtle.weapon}</p>
                    <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200"/>
                    <hr/>
                </div>
            </div>
        )

        return (
            <div>
                {displayTurtles}
            </div>
        )
    }
}

export default Turtles;