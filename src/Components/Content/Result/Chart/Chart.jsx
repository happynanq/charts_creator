import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line } from 'recharts';

const Chart = (props)=>{
  
  // 
  // let data = [
  // {name:"A", uv:400, pv:4000, amt:2400},
  // {name:"B", uv:3000, pv:3000, amt:2400},
  // {name:"C", uv:4000, pv:3000, amt:2400},
  // ]
  let color = "#FFFFFF"
  if(props.meta.color){
    color = "#" + props.meta.color
  }
  return (
    <div className="ChartWrapper" style={{backgroundColor:color}} >  
      <LineChart width={730} height={250} data={props.d}>
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip />
        <Legend >wewe</Legend>
        <CartesianGrid stroke="#ccc " strokeDasharray={!props.meta.dashed ? "0" : "5"} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Line type="monotone" dataKey="pv" stroke="#f0aac0" />
      </LineChart>
    </div>
  )
}
export default Chart