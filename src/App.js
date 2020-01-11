import React, {useState, useEffect} from 'react';
import firebase from './Firestore/Firestore';
import './App.css';

function App() {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [fathersname, setFathersname] = useState();
  const [mothersname, setMothersname] = useState();
  const [email, setEmail] = useState();
  const [phoneno, setPhoneno] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      firstname: firstname,
      lastname: lastname,
      fathersname: fathersname,
      mothersname: mothersname,
      email: email,
      phoneno: phoneno
    });  
    alert('Form submitted successfully!');

    // set state to intial state
    setFirstname('');
    setLastname('');
    setFathersname('');
    setMothersname('');
    setPhoneno('');
    setEmail('');
  }

  return (
    <div className="App">
      <div className="form-title">
        <h1>
          Registration  Form
        </h1>
      </div>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <input type="text" 
         placeholder="First Name" 
         name="firstname" 
         value={firstname} 
         onChange={e => setFirstname(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <div className="form-group">
         <input type="text" 
         placeholder="Last Name" 
         name="lastname" 
         value={lastname} 
         onChange={e => setLastname(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <div className="form-group">
         <input type="text" 
         placeholder="Father's Name" 
         name="fathersname" 
         value={fathersname} 
         onChange={e => setFathersname(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <div className="form-group">
         <input type="text" 
         placeholder="Mother's Name" 
         name="mothesname"
         value={mothersname} 
         onChange={e => setMothersname(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <div className="form-group">
         <input type="text" 
         placeholder="Email" 
         name="email"
         value={email} 
         onChange={e => setEmail(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <div className="form-group">
         <input type="text" 
         placeholder="Phone no." 
         name="phoneno"
         value={phoneno} 
         onChange={e => setPhoneno(e.target.value)} 
         required 
         className="form-field"/>
       </div>
       <button type="submit">Register</button>
     </form>
    </div>
  );
}

export default App;
