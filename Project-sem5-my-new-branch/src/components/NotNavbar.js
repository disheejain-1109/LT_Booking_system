import React ,{useEffect,useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
const NotNavbar = ({children}) => {


const location = useLocation();
const [showNavbar,setShowNavbar] = useState(false);
useEffect (()=>{
     console.log('this i location', location);
     if(location.pathname==='/'){
        setShowNavbar(false);
     }
     else{
        setShowNavbar(true);
     }
},[location])

  return (
    <div>
   {showNavbar && children}
    </div>
  )
}

export default NotNavbar
