import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [details, setDetails] = useState({
    Fname: "",
    Mname: "",
    Lname: "",
    Adhar: "",
    Pan: "",
    CAdd: "",
    PAdd: "",
    MobileNo: "",
    Email: "",
    SSCMarks: "",
    HSCMarks: "",
    AvgMarks: "",
    Grade: "",
    BloodGroup: "",
    BankAcc: "",
  });
  const SubmitHandler = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  const DataChangeHandler = (event) => {
    // console.log(event.target.value);
    setDetails(event.target.value);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <h1 style={{textDecoration:"underline"}}>Details Form</h1>
      <h2>
        First Name : 
        <input
          type="text"
          value={details.Fname}
          placeholder="Enter FirstName"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Middle Name : 
        <input
          type="text"
          value={details.Mname}
          placeholder="Enter MiddleName"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Last Name : 
        <input
          type="text"
          value={details.Lname}
          placeholder="Enter LastName"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Adhar No. : 
        <input
          type="number"
          value={details.Adhar}
          placeholder="Enter AdharNo"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Pan No. : 
        <input
          type="text"
          value={details.Pan}
          placeholder="Enter PanNo."
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Current Address : 
        <input
          type="text"
          value={details.CAdd}
          placeholder="Enter CurrentAddress"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Permanant Address : 
        <input
          type="text"
          value={details.PAdd}
          placeholder="Enter PermanantAddress"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Mobile No. : 
        <input
          type="number"
          value={details.MobileNo}
          placeholder="Enter MobileNo"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Email : 
        <input
          type="email"
          value={details.Email}
          placeholder="Enter Email"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        SSCMarks : 
        <input
          type="number"
          value={details.Fname}
          placeholder="Enter SSCMarks"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        HSCMarks : 
        <input
          type="number"
          value={details.HSCMarks}
          placeholder="Enter HSCMarks"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        AvgMarks : 
        <input
          type="number"
          value={details.AvgMarks}
          placeholder="Enter Average marks"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Grade : 
        <input
          type="text"
          value={details.Grade}
          placeholder="Enter Grade"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        BloodGroup : 
        <input
          type="password"
          value={details.BloodGroup}
          placeholder="Enter BloodGroup"
          onChange={DataChangeHandler}
        />
      </h2>
      <h2>
        Bank Acc No. : 
        <input
          type="number"
          value={details.BankAcc}
          placeholder="Enter Account No."
          onChange={DataChangeHandler}
        />
      </h2>
      <button type="Submit">SUBMIT</button>
    </form>
  );
}

export default App;
