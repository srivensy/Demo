// import Firstcomponent from "./Firstcomponent";
// import Secondcomponent from "./Secondcomponent";
import Form from "./Form";
import Getdata from "./Getdata";
import Inc_dec from "./Inc_dec";
import React_Form from "./React_Form";
import Registration from "./Registration";
import RegistrationPage from "./RegistrationPage";
// import Ternaryoperator from "./Ternaryoperator";
// import Usestate from "./Usestate";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
// import { Route,Router } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Navbar2 from "./Navbar2";


function App() {
// let student_info = {
//     id:9,
//     name:'Bhagya Sree',
//     branch:'BCA-AI',
//     place:'Madanapalle'
//   }

// let array = ["Apple","Mango","Strabery","Grape","Banana","Guava","Cherry",100,55.7,true]

  return (
    <div>
       {/* <Usestate/>
       <h1>This App component</h1>  */}
      {/* <Firstcomponent student={student_info}/> 
      <Secondcomponent fruits={array}/> */}
      {/* <Ternaryoperator/> */}
      {/* <Inc_dec/> */}
      {/* <React_Form/> */}
      {/* <Getdata/> */}
      {/* <Registration/> */}
      {/* <RegistrationPage/> */}
      <Navbar2/>
      <Routes>
        <Route path="/about" element = {<About/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/contact" element = { <Contact/>}/>
        <Route path="/service" element = {<Services/>}/>
      </Routes>

    </div> 
  );
}

export default App;
