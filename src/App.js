// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//////////////////////////////////////////Brillio Inter Test 

//import logo from './logo.svg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './App.css';
import $ from "jquery"



function App() {



  // $( function() {
  //   $( "#Datepicker" ).datepicker({ minDate: "-3M -15D", maxDate: "+3M +15D",changeMonth:true,changeYear:true })
  // } )

//   $(document).ready(function(){
//     // alert ('Cliecked');
//     var date_input=$('input[name="orangeDateOfBirthForm"]'); //our date input has the name "date"
//     var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//     var options={
//         format: 'dd/mm/yyyy',
//         container: container,
//         changeYear: true,
//         changeMonth: true,
//         todayHighlight: true,
//         autoclose: true,
//         yearRange: "1930:2100"
//     };
//     date_input.datepicker(options);
// });

const handleSubmit = () => {
  console.log(document.getElementById("datepicker").value)
  alert(document.getElementById("datepicker").value)
} 

  return (

    <div className="App">
    
    <p>Sunday &emsp; &emsp; &emsp; &emsp; Monday &emsp; &emsp; &emsp; &emsp; Tuesday &emsp; &emsp; &emsp; &emsp; Wednesday &emsp; &emsp; &emsp; &emsp; Thursday &emsp; &emsp; &emsp; &emsp; Friday &emsp; &emsp; &emsp; &emsp; Saturday  
    </p>

  <select 
  className="Sunday"
  >
    <option> hi </option>
   </select> 
  
   <select
   className="Monday"
   >
   <option> hi </option>
   </select> 

   <select
   className="Tuesday"
   >
   <option> hi </option>
   </select> 

   <select
   className="Wednesday"
   >
   <option> hi </option>
   </select> 

   <select
   className="Thursday"
   >
   <option> hi </option>
   </select> 

   <select
   className="Friday"
   >
   <option> hi </option>
   </select> 

   <select
   className="Saturday"
   >
   <option> hi </option>
   </select> 

   <br/><br/>

  <form>
   <div className="datepicker"> 
  <label for="datepicker">Date Picker:</label>
  <input defaultValue="2021-07-09" type="date" id="datepicker" name="datepicker"/> &emsp;
  <button type="button" 
  onClick={handleSubmit}>SUBMIT</button>
  </div>
 </form>

 <br/><br/>



  </div>
  );
}

export default App;

