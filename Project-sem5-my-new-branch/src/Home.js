import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Home.css' ;
import Modal from 'react-modal';
// import './Modalhome.css' ;
// import Button from 'react-bootstrap/Button';


const data = [
  { time: "08:00", monday: -1, tuesday:-1,  wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1},
  { time: "08:30", monday: -1, tuesday:-1,  wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1},
  { time: "09:00", monday: 1, tuesday:-1,  wednesday:1,thusday:-1 ,friday: 1,saturday: -1 ,sunday: -1},
  { time: "09:30", monday: 1, tuesday: 1,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "10:00", monday: 1, tuesday: 1 ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "10:30", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "11:00", monday: 1,  tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "11:30", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "12:00", monday: 1, tuesday: "1",wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "12:30", monday: 1, tuesday: "-1" ,wednesday:1,thusday:-1,friday: 1,saturday:- 1 ,sunday: -1 },
  { time: "13:00 ", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "13:30", monday: -2, tuesday: "1" ,wednesday:-1,thusday:1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "13:30", monday: -1, tuesday: "1" ,wednesday:-1,thusday:1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "14:00", monday: 1, tuesday: "1",wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "14:30", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "15:00", monday: -1, tuesday: "1" ,wednesday:-1,thusday:1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "15:30", monday: -1, tuesday: "1" ,wednesday:-1,thusday:1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "16:00", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "16:30", monday: 1, tuesday: "1" ,wednesday:-1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },  
  { time: "17:00", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "17:30", monday: 1, tuesday: "-1" ,wednesday:1,thusday:-1 ,friday: 1,saturday: -1 ,sunday:-1 },
  { time: "18:00", monday: -1, tuesday: -1 ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "18:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "20:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "20:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "21:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "21:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "22:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "22:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "23:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "23:30", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "00:00", monday: -1, tuesday: "-1" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
]


export default function Home() {

  const [frontEndData,setFrontEndData] = useState(data)
  
  const[color,setColor] = useState("white");
  const[isModelOpen,setIsModelOpen]=useState(false);

  const [currentSelectedCell,setCurrentSelectedCell] = useState([])

const [showPopup,setShowPopup] = useState(false);
  const hello=(color,time,day)=>{
    console.log(time,day)
    setCurrentSelectedCell([time,day])
     if(color==="white"){
      setIsModelOpen(true);
     }
  }
 
  const handleModelSubmit=()=>{
    setIsModelOpen(false);
     setFrontEndData(frontEndData.map(ele=>{
      if(ele.time === currentSelectedCell[0]){
        return {...ele,[currentSelectedCell[1]] : 0}
      }
      return ele
     }))

     console.log(frontEndData)
  };

  const handleModelCancel=()=>{
    setIsModelOpen(false);
  };
  return (
   <>




<Dropdown className='s150' as={ButtonGroup}>
      <Button variant="secondary" className='s1501' >Lecture Halls</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" className='s1502'/>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-3">LT-1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-5</Dropdown.Item>
        <Dropdown.Item href="#/action-2">LT-6</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-7</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-8</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-9</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-10</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-11</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-12</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-13</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-14</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-15</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-16</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-17</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-18</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-19</Dropdown.Item>
        


      </Dropdown.Menu>
    </Dropdown>


   
   
<Dropdown as={ButtonGroup} className='s80'>
      <Button variant="secondary" className='s801'>Labs</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" className='s802'/>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ecad</Dropdown.Item>
        <Dropdown.Item href="#/action-2">MicroLab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CP-1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CP-2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CP-3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DSP</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DC</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Embeded</Dropdown.Item>
        <Dropdown.Item href="#/action-3">MIC Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Robotics Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CAD/CAM Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fluid Mechanics Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">AE Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mechatronics Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Heat-Transfer Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Manufacturing Technology Lab</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ICE Lab</Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown> 


    <Dropdown className='s150' as={ButtonGroup}>
      <Button variant="secondary" className='s1501'>Seminars</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" className='s1502'/>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-3">LT-1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-9</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-10</Dropdown.Item>
        <Dropdown.Item href="#/action-3">LT-16</Dropdown.Item>
        <Dropdown.Item href="#/action-2">LT-17</Dropdown.Item>
        <Dropdown.Item href="#/action-1">LT-18</Dropdown.Item>
      
        <Dropdown.Item href="#/action-3">LT-19</Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
  

         {/* <div className='l1'> */}
          <h2 className='l1'>Lecture Hall 1</h2>
         <div className="App">
            <table id="position">
                <tr>
                  {/* <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "blue" : "green" }}
      >
        SignUp
      </button> */}
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                {frontEndData.map((val, key) => {
                    return (
                        <tr  id='myBox'  key={key}>
                            <td className='tby'>{val.time}</td>
                            <td onClickCapture={()=>hello( `${val.monday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'monday')}  style ={{backgroundColor: `${val.monday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.monday}`== 0 ? 'red' :'white')}} ></td>
                            <td onClickCapture={()=>hello( `${val.tuesday}`>=1 ? 'rgb(59, 250, 59)':'white',val.time,'tuesday')}         style ={{backgroundColor: `${val.tuesday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.tuesday}`== 0 ? 'red' :'white')}}   ></td>
                            <td  onClickCapture={()=>hello( `${val.wednesday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'wednesday')}   style ={{backgroundColor: `${val.wednesday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.wednesday}`== 0 ? 'red' :'white')}}            ></td>
                            <td onClickCapture={()=>hello( `${val.thusday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'thusday')}       style ={{backgroundColor: `${val.thusday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.thusday}`== 0 ? 'red' :'white')}}      ></td>
                            <td  onClickCapture={()=>hello( `${val.friday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'friday')}          style ={{backgroundColor: `${val.friday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.friday}`== 0 ? 'red' :'white')}} ></td>
                            <td onClickCapture={()=>hello( `${val.saturday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'saturday')}      style ={{backgroundColor: `${val.saturday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.saturday}`== 0 ? 'red' :'white')}}        ></td>
                            <td onClickCapture={()=>hello( `${val.sunday}`>=1 ? ' rgb(59, 250, 59)':'white',val.time,'sunday')}         style ={{backgroundColor: `${val.sunday}`>=1 ? ' rgb(59, 250, 59)': ( `${val.sunday}`== 0 ? 'red' :'white')}}    ></td>
                        </tr>

                    )
                })}
                
           

            
            <Modal isOpen ={isModelOpen}>

               

<div className="modal-wrapper" onClick={handleModelSubmit}></div>
         <div className="modal-container">
              <h2 className="pu">Reason </h2>
              <input    type="text" className='pui'     name="msg" id="msg" />
                    {/* <textarea className='pui'  id="msg" name="msg" rows="7" cols="100" required></textarea> */}

            <div className='buttonm'>
              <button   className='modal-btn'  onClick={handleModelSubmit} >Submit</button>
              <button   className='modal-btn'  onClick={handleModelCancel} >Cancel</button>
              </div> 





     
     </div>
            </Modal>
        
        {showPopup && (
          <p>This is popup</p>
        )}
                <tbody className="legend">
    <td className="l">Legend</td>
    <td className="p">Pending</td>
    {/* <td id="v">vacant</td> */}
    <td className="e">Not Available</td>
    <td className="na">Booked</td>
</tbody>
            </table>
        </div>
        
   </>
  )
}
