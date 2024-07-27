// import React,{useState,useEffect} from "react";
import "./Modal.css"
const MyModal = ({CloseModal}) =>{
  
    return(
         <>
         <div className="modal-wrapper" onClick={CloseModal}></div>
         <div className="modal-container">
              <h2 className="pu">Thank You !!!</h2>
              <p className="pui">Yours feedback has been successfully submitted. Thanks!</p> 
        <button  className="modal-btn"    onClick={CloseModal}>OK</button>
     
     </div>
    </>
    ); 
};

export default MyModal;