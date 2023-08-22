
import React, { Component } from "react"; //imp statement React 

// we have to use Class convention for class name here (Class)
class Apple extends Component{



    render(){
        return(
            
            <h1>apple here</h1>

        )
    }
}

// to use Orange class inside the Apple class (nesting of components)
// class Orange{
//     render(){

    
//         return(
//             <h2>Orange here</h2>
//         )
//     }
// }



export default Apple;
