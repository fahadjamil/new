import React,{useState,useEffect} from "react";
import "./LoaderTimer.css"
 const LoaderTimer=()=>{
    const [seconds, setSeconds] = useState(10);
   
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
    },[seconds]); 
    const myfunction=()=>{
       setSeconds(10);
     }
   
     
     return (
       <>
       {seconds?
         <div class="anti">
           <p className="text">{seconds}</p>
           <div className="loader"></div>
         </div>
         :
         <button className="btn btn-info" onClick={myfunction}>retry</button>
 }

 
       </>
     );
 };
 export default LoaderTimer;