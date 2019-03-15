import React from 'react';

function LeaderboardComponent()
{

      return(
        <div>
    
            <table className=" table-dark table-striped" style={{width:'100%'}}>
            <thead>
                 <tr>
                     <th>Rank</th>
                     <th>Name</th>
                     <th>Score</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>1</td>
                        <td>stackroute</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>React</td>
                        <td>46</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>sai</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>jaswanth</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>ram</td>
                        <td>33</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>abcdefgh</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>lklkl</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>jdfkjgd</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>xyzxyz</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>gafgsfaghds</td>
                        <td>6</td>
                    </tr>
            </tbody>
            </table>
        </div>
      )
   }
export default LeaderboardComponent;