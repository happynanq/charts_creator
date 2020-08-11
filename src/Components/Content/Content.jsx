import React, { useState } from 'react';
import FieldsContainer from './Fields/FieldsContainer';
import ResultContainer from './Result/ResultContainer';

const Content = ()=>{
  const [data, setData] = useState(["noData"]);
  return (
    <div className="wrapper"> 
    
    
      <div className="container">
        <div className="row">
          <FieldsContainer setData={setData}/>
        </div>
        <hr/>
        <div className="row">
          <ResultContainer data={data}/>
        </div>
      </div>
      
    </div>
  )
}

export default Content 