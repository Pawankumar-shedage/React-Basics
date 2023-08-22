// import logo from './logo.svg';
import './App.css';
import './functionalComponent.js'

import React, { Component} from 'react';
// import { useState } from 'react';
// import {Users} from './Users'
// import {FuncCompo1} from './functionalComponent'
// import ClassComponent from './classComponenet'
// import Apple from './fruits'
// import { useState } from 'react';
 

// class Component

class App extends Component{

  constructor(){
    super();
    this.state = {
      data: "Pawan"
    }
  }

  fun(){
    this.setState({data:"RAGAV"})
  }

  render(){
    return(
      <div>
        <h1>Class Component- {this.state.data}</h1>

        <button onClick={this.fun()}>Click Me</button>
      </div>
    );
  }

}


// function App()  {

//   let data = "Shruti";
//   function getData(){
//     alert(data);
//   }

//   //states
  
//   const [num,setnum]  = useState(0);

//   function updNum(){
//     setnum(num + 1);
//   }

//   return (
//     <div className="App">
//       <h1>Hello Pawankumar and {num}</h1>

//       <button onClick={getData}>Get Data</button> <br />
//       <button onClick={updNum}>Update data</button>


//       <Users />
//       <FuncCompo1 />
//       <ClassComponent />
//       <Apple />
      
//     </div>
    
//   );
// }




export default App;
