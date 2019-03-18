import React, { Component } from 'react';
//import {UID} from 'react-uid';
class LeaderboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players:[],
      rank:0
    };
  }
  

async componentDidMount(){
    const players = await (await fetch("http://localhost:4000/players?_sort=score&_order=desc")).json()
    this.setState({players})
    //console.log(this.state.players);
  }
  render()
  {
      return (<div>
                    <table className=" table-dark table-striped" style={{width:'100%'}}>
            <thead>
                  <tr>
                     <th>Rank</th>
                     <th>Name</th>
                     <th>Score</th>              
                  </tr>
               </thead>
              <tbody>
              { 
                  this.state.players.map((elem,index) => (
                  <Tr rank ={index+1 } elem={elem} />   
                 ))
             }
            </tbody>
            </table>
      </div>)
  }
}
function Tr(props)
 {
   
    return (
        <tr key={props.elem.id}>
            <td>{props.rank}</td>
            <td>{props.elem.name}</td>
            <td>{props.elem.score}</td>
        </tr>
    )
 }
export default LeaderboardComponent;


