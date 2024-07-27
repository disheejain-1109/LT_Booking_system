import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-modal';
// import Modal  from'react-bootstrap/Modal';

const dataa = [
  { time: "09:00 AM", monday: 1, tuesday:0,  wednesday:1,thusday:0 ,friday: 1,saturday: -1 ,sunday: -1},
  { time: "09:30 AM", monday: 1, tuesday: 1,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "10:00 AM", monday: 1, tuesday: 1 ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "10:30 AM", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "11:00 AM", monday: 1,  tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "11:30 AM", monday: 1, tuesday: "1" ,wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1 },
  { time: "12:00 PM", monday: 1, tuesday: "1",wednesday:1,thusday:1 ,friday: 1,saturday: -1 ,sunday: -1  },
  { time: "12:30 PM", monday: 1, tuesday: "0" ,wednesday:1,thusday:0 ,friday: 1,saturday:- 1 ,sunday: -1 },
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
  { time: "17:30", monday: 1, tuesday: "0" ,wednesday:1,thusday:-1 ,friday: 1,saturday: -1 ,sunday:-1 },
  { time: "18:00", monday: -1, tuesday: 0 ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "18:30", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "19:30", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "20:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "20:30", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "21:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "21:30", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "22:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "22:30", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "23:00", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "12:30 PM", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
  { time: "12:00 AM", monday: -1, tuesday: "0" ,wednesday:-1,thusday:-1 ,friday: -1,saturday: -1 ,sunday: -1 },
]



export default function Home() {

  const[color,setColor] = useState('white');
  const[reason,setReason]=useState('');
  const [data, setData] = useState(dataa);
  const[isModelOpen,setIsModelOpen]=useState(false);

const [showPopup,setShowPopup] = useState(false);
  const hello=(color)=>{
     if(color==="white"){
    //  setColor(color);
      // console.log('Hei');
      // alert('hello');
      setIsModelOpen(true);
     }
  }
 
  // const handleModelSubmit=()=>{
  //   console.log("helli");
  //    setIsModelOpen(false);
  //    console.log('This is after submit button');
  //    setColor('red');
  //   //  body.style.backgroundColor(red);
  // };



  const handleModelSubmit = () => {
    setIsModelOpen(false); 
    // Close the modal

    const updatedData = dataa.map(item => {
      if (item.monday >= 1 && color === 'white') {
        console.log('hellooooooou');
    
        return { ...item, mondayColor: 'red' }; 
      }
      return item;
    });
    setData(updatedData); 
  };


   
  return (
   <>


        
   <div className="App">
            <table id="position">
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                {dataa.map((val, key) => {
                    return (
                        <tr  id='myBox'  key={key}>
                            <td className='tby'>{val.time}</td>
                            <td onClickCapture={()=>hello( `${val.monday}`>=1 ? ' rgb(183, 244, 183)':'white')}  style ={{backgroundColor:`${val.monday}`>=1 ? ' rgb(183, 244, 183)':'white'}} ></td>
                            <td onClickCapture={()=>hello( `${val.tuesday}`>=1 ? ' rgb(183, 244, 183)':'white')} style ={{backgroundColor: `${val.tuesday}`>=1 ? ' rgb(183, 244, 183)':"null"}}></td>
                            <td  onClickCapture={()=>hello( `${val.wednesday}`>=1 ? ' rgb(183, 244, 183)':'white')}  style ={{backgroundColor: `${val.wednesday}`>=1 ? ' rgb(183, 244, 183)':"null"}} ></td>
                            <td onClickCapture={()=>hello( `${val.thusday}`>=1 ? ' rgb(183, 244, 183)':'white')}   style ={{backgroundColor: `${val.thusday}`>=1 ? ' rgb(183, 244, 183)':"null"}}></td>
                            <td  onClickCapture={()=>hello( `${val.friday}`>=1 ? ' rgb(183, 244, 183)':'white')} style ={{backgroundColor: `${val.friday}`>=1 ? ' rgb(183, 244, 183)':"null"}}></td>
                            <td onClickCapture={()=>hello( `${val.saturday}`>=1 ? ' rgb(183, 244, 183)':'white')}   style ={{backgroundColor: `${val.saturday}`>=1 ? ' rgb(183, 244, 183)':"null"}}></td>
                            <td onClickCapture={()=>hello( `${val.sunday}`>=1 ? ' rgb(183, 244, 183)':'white')}    style ={{backgroundColor: `${val.sunday}`>=1 ? ' rgb(183, 244, 183)':"null"}}></td>
                        </tr>
                    )
                })}
                
            </table>

            
            <Modal isOpen ={isModelOpen}>
              {/* <button>okayyyyy</button> */}
              {/* <input type="text"  style={{backgroundColor:'black'}}      value={reason} onChange={(e)=>setReason(e.target.reason.value)}/>
               */}
              <div> <textarea id="msg" name="msg" rows="4" cols="10" required></textarea></div> 
                <button type="submit"     className='modal-btn'  onClick={handleModelSubmit} >Submit</button>

            </Modal>
        </div>
        {showPopup && (
          <p>This is popup</p>
        )}
   </>
  )
}
