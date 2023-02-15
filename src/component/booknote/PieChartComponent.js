import React from "react";
import { useEffect ,useState} from "react";
import { PieChart, Pie,  Cell } from "recharts";
import axios from "axios";
import * as PieCharts from "./style";
PieChartComponent.defaultProps = {
  codeRatioArray: [
    { value: 44.53 },
    {  value: 35.57 },
    { value: 13.27 },
    {  value: 6.64 },
  ],
};



export function PieChartComponent({ codeRatioArray }) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const [date,setDate] =useState([]);

useEffect(()=>{
  axios.get("/api/category")
  .then((response) =>{
    
    setDate(response.data)

  })      
},[])
  return (


    <PieCharts.Container>
      <PieCharts.Wrapper>
        <PieCharts.Heading>
          <PieCharts.Title>읽은 도서별</PieCharts.Title>
          <PieCharts.Description>전체 카테고리 기준</PieCharts.Description>
        </PieCharts.Heading>
        <PieCharts.RatioWrapper>
          {date &&
            date.map((it, idx) => (
              <PieCharts.LangColorBoxWrapper key={`${it.name}-${it.value}`} >
                <PieCharts.LangColorBox idx={COLORS[idx]} />
                <div>
                  <PieCharts.LangText>{it.value}%</PieCharts.LangText>
                  <PieCharts.LangText>{it.name}</PieCharts.LangText>
                </div>
              </PieCharts.LangColorBoxWrapper>
            ))}
        </PieCharts.RatioWrapper>
      </PieCharts.Wrapper>
              
      <PieCharts.PieWrapper>
        <PieChart width={200} height={200}>

          
              <Pie
          
              data={date.value}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value" 
        
              
            >
                </Pie>
       
        
            {date.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
        
        </PieChart>
      </PieCharts.PieWrapper>
      <div>
        <h1></h1>
      </div>
    </PieCharts.Container>
    
  );
}

