import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Help = (props)=>{
  /* 
  
  *  {name:"A", uv:400, pv:4000, amt:2400},
  *  {name:"B", uv:3000, pv:3000, amt:2400},
  *  {name:"C", uv:4000, pv:3000, amt:2400},
  
  */
 const h = useHistory()
 const backHandler = ()=>{
  h.push("/")
 }
  return(
    <div className="container">
      <div className="wrapper" style={{paddingLeft:10}}> 
        "UV" - XAxios <br/>
        "PV" - YAxios <br/>
        "NAME" - name of XAxios
        <div>
          <strong>
            example:
          </strong> 
        {"[{name:'A', uv:400, pv:4000},...(any elements)]"}
        

        </div>
        <div>
          To collect json follow the <a href="https://jsonformatter.curiousconcept.com/" rel="noopener noreferrer" target="_blank"> link</a>
        </div>
        <button className="btn" style={{marginLeft:2+"em", marginTop:"1em"}} onClick={backHandler}>back</button>
      </div>
    </div>
  )
}
export default Help