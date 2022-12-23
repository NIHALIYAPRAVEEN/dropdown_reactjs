import './index.css'
import React, {useState, useEffect, useRef} from 'react';


function App() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    
  
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
    
  return (
    <div className="App">
      <h2>click on logo for dropdown</h2>
    <div className="menu-container" ref={menuRef}>
      <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyG_Qv2CronTXaBBK7DiG1f3tS4YNmRo-plw&usqp=CAU"  alt='jii'/>
        </div>
     <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          
        <h5>Micle website designer </h5>
        <ul>
         <DropdownItem  text = {"My Profile"}/>
            <DropdownItem text = {"Edit Profile"}/>
            <DropdownItem  text = {"Inbox"}/>
            <DropdownItem  text = {"Settings"}/>
            <DropdownItem text = {"Helps"}/>
            <DropdownItem text = {"Logout"}/>
        </ul>
      </div>
    </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
        <a>{props.text} </a>
    </li>
  );
}

export default App;