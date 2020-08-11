import React, { useState, useEffect } from 'react';
import ChartContainer from './Chart/ChartContainer';

const Result = (props)=>{
  // !data example : 
  /*
  *  {name:"A", uv:400, pv:4000, amt:2400},
  *  {name:"B", uv:3000, pv:3000, amt:2400},
  *  {name:"C", uv:4000, pv:3000, amt:2400},
  */
 
  const [data, setData] = useState(
    {dataForChart:[
      [
        {name:"T", uv:100, pv:500, },
        {name:"E", uv:200, pv:100, },
        {name:"S", uv:50, pv:200,},
        {name:"T", uv:10, pv:500,},
      ]
    ]}
  );
  useEffect(() => {
    if(props.data[0] !== "noData" ){
      setData(props.data)
    }
  }, [props]);
  return (
    <div>
      {data.dataForChart.map(d=><ChartContainer d={d} meta={{color:data.bColor,dashed:data.dashed }}/>)}
    </div>
  )
}
export default Result