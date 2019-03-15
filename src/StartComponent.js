import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'
const StartComponent = (props) => {
    
    return (
      
      <div className="container-fluid" style={{margin:'200px 0'}} >
    <div id ="main" style={{backgroundColor:'#000',width:'100%',alignItems:'center'}}className="card card-body">
      <form onSubmit={props.formSubmitted} className="form-inline mb-3">
        <input   onChange={props.newPlayerAdded} placeholder={props.placeholder}
         className="form-control mr-2" value={props.newPlayer} />
      <button type="submit" className="btn">
      <Link className="btn btn-success lin" to="/game-play">submit name</Link>
       </button>
      </form>
      {/* <button type="submit" className="btn" >
      <Link  className="btn btn-success lin" to="/game-play">start game</Link>
       </button> */}
      </div>
      </div>
    )
  }
export default StartComponent; 