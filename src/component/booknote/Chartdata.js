// import {PieChart} from "react-minimal-pie-chart"
// import { useEffect ,useState} from "react";
// import axios from "axios";
// const Chartdata =()=>{
//     const [date,setDate] =useState([]);
    
//     useEffect(()=>{
//       axios.get("/api/category")
//       .then((response) =>{

//         setDate(response.data)
  
//       })      
//     },[])
    
//     return(
//         <svg style={{width: "467px", height:"195px", fil:"none"}}>
           
//         <PieChart text=""style={{width:"300px",height:"300px"}} 
//     data={[
//             {
//             value :date.value,
//             color: "#F6CB44",
//             name: "namel",
//         },
//     ]}
//     reveal={21}
//     lineWidth={18}
//     background="#f3f3f3"
//     lengthAngle={360}
//     rounded
//     animate
//     label={({dataEntry})=> ""+ dataEntry.value +"%"}
//     labelStyle={{
//         fontSize: "5px",
//         fill: "#33333",
//     }}
//     labelPosition={0}
//         />
//         </svg>
//     )
// }
// export default Chartdata;