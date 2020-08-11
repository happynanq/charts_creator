import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css"

const Fields = (props)=>{
  // ! data res example : 
  /*
  * 
  *  dataForChart:[
  *   {name:"A", uv:400, pv:4000, amt:2400},
  *   {name:"B", uv:3000, pv:3000, amt:2400}
  *   {name:"C", uv:4000, pv:3000, amt:2400}
  *  ],
  * dashed : bool,
  * backColor: 0xFFFFFF, 
  * 
  * 
  */
  // const [dashed, setDashed] = useState(false)
  // const [bColor, setBColor] = useState("")
  // const [data, setData] = useState([{name:"NO DATA"}]);
  const [allData, setAllData] = useState({
    dataForChart:"",
    dashed:false,
    bColor : "FFFFFF"
  })
  const submitHandler = (e)=>{
    e.preventDefault()
    if(allData.dataForChart.trim()==="" || allData.bColor.trim()===""){
      return M.toast({html:"You didn't enter something "})
    }
    let fromJSON = [JSON.parse(allData.dataForChart)]
    props.setData({...allData, dataForChart:fromJSON})
  }
  const handleChange = (e)=>{
    // console.log(e.currentTarget.value);
    const name = e.currentTarget.name
    if(name === "dashed"){
      return setAllData({...allData, [name]:!allData.dashed})
      
    }
    setAllData({...allData, [name]:e.currentTarget.value})
    console.log(allData);
  }
  return (
    <div className="row">

      <form  className="col s12" onSubmit={submitHandler} >

        <div className="row">
          <div className="input-field col s12 ">

            <input id="json" name="dataForChart" type="text" className="validate" onChange={handleChange}/>

            <label htmlFor="json">JSON</label>

            <span className="helper-text" data-error="wrong" data-success="right">Enter ur json, <Link to="/help">more info</Link> </span>

          </div>
        </div>

        <div className="row">
          <p>
            <label>
              <input type="checkbox" className="black" name="dashed" value={allData.dashed} onChange={handleChange}/>
              <span className="checkboxSpan">Dashed</span>
            </label>
          </p>
        </div>

        <div className="row">
          <div className="input-field ">
            <input id="backColor" name="bColor" type="text" className="validate" onChange={handleChange} value={allData.bColor} minLength="3" maxLength="6"/>
            <label htmlFor="backColor">Background Color</label>
            <span className="helper-text" data-error="wrong" data-success="right">Enter ur json, <Link to="/help">more info</Link> </span>
          </div>
        </div>
        <button className="btn">
          render
        </button>

      </form>

    </div>
  )
}
export default Fields