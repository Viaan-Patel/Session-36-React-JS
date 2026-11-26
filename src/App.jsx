import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Hw from './components/Hw';

function App(){
const [message, setMessage] = useState("Have an amazing day");
const [activeBtn, setActiveBtn] = useState(null);

const clickHandler = (btnNum)=>{
setActiveBtn(btnNum)
  if(btnNum === 1){
    setMessage("Hello there");
  }
  else if(btnNum === 2){
    setMessage("Greetings");
  }
  else if(btnNum === 3){
    setMessage("Welcome");
  }
  else if(btnNum === 4){
    setMessage("You are awesome");
  }
  else{
    setMessage("Have an amazing day");
  }
}


  return(
    <div className='d-flex justify-content-center align-items-center vh-100 flex-column' style={{
      backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd83F7KBj95L2KzwjjZqHPfL9pb32DR27vIJDHOGjID-oGjMJyY9Sp4Gi_&s=10)", backgroundRepeat: "no-repeat", backgroundSize: "cover"
    }}>
      <div className='text-center bg-white shadow p-3 rounded-3'>
       <h1>Click a button to see a message!</h1>
       <div className='d-flex gap-3 my-3 justify-content-center'>
        <button className={`btn ${activeBtn === 1 ? "btn-primary" : "btn-dark"}`}
        onClick={()=>clickHandler(1)}>Btn 1</button>
        <button className={`btn ${activeBtn === 2 ? "btn-primary" : "btn-dark"}`} 
        onClick={()=>clickHandler(2)}>Btn 2</button>
        <button className={`btn ${activeBtn === 3 ? "btn-primary" : "btn-dark"}`}
        onClick={()=>clickHandler(3)}>Btn 3</button>
        <button className={`btn ${activeBtn === 4 ? "btn-primary" : "btn-dark"}`} 
        onClick={()=>clickHandler(4)}>Btn 4</button>
       </div>
       <h2 className='my-3 text-success'>{message}</h2>
      </div>
      <hr/>
      {/* hw is displayed below */}
      <Hw/>
    </div>
  )
}
export default App