import React from 'react'
import "./feedback.css"
import { useState } from 'react';
import MyModal from './ControlModal';
import "./Modal.css";
export default function Feedback() { 

const [useModal,setUseModal] = useState(false);
 const CloseModal = () => setUseModal(false);
  
  return (
    <>
    <div className="flex">
      <img src="1.avif" alt="" />
        <div className="left">
        </div>
   <div className="right ">
    <div className="form-box">
        <div className="textup">
            <i className="fa fa-solid fa-clock"></i> Feedback !
        </div>
        <br />
        <form>
            <label htmlFor="email">
                <i className="fa fa-solid fa-envelope"></i> User ID:
            </label>
            <input type="email" id="email" name="email" required />

        <label htmlFor="msg">
            <i className="fa-solid fa-comments" style={{"margin-right": "3px"}}></i> Write your Suggestions:
            </label>
            <textarea id="msg" name="msg" rows="4" cols="10" required></textarea>

            <button type="submit"  className='modal-btn'    onClick={()=>setUseModal(true)} >Submit

            </button>
            {useModal && <MyModal CloseModal={CloseModal}/>}
        </form>
    </div>
   </div>
    </div>
    <footer>
        <div className="develop"><p> Developed by - Dishee Jain(21UEC047) &nbsp; </p>
        <p> Copyright &copy; LNMIIT | All Rights Reserved </p></div>
    </footer>
    </>
  )
}
