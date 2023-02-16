import {PieChart} from "react-minimal-pie-chart"
import { useEffect ,useState} from "react";
import axios from "axios";
const Chartdata =()=>{
    const [date,setDate] =useState([]);
    
    useEffect(()=>{
      axios.get("/api/category")
      .then((response) =>{

        setDate(response.data)
        const nodate = date.map(v => v.value);
      })      
    },[])
    
    return(
        <svg style={{width: "100%", height:"200px", fil:"none"}}>
           
        <PieChart text=""style={{width:"300px",height:"300px"}} 
    data={[
            {
            value :50,
            color: "#F6CB44",
            name: "namel",
            
        },
    ]}
    reveal={51}
    lineWidth={18}
    background="#f3f3f3"
    lengthAngle={360}
    rounded

    animate
    label={({dataEntry})=> "현재 읽은 권수  "+ dataEntry.value +"%"}
    labelStyle={{
        fontSize: "5px",
        fill: "#33333",
    }}
    labelPosition={0}
        />
     
        </svg>
    )
}
export default Chartdata;