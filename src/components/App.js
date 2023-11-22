
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import axios from "axios";
import 'regenerator-runtime/runtime'

const App = () => {
  const [data,setData] = useState([]);
  async function handleClick(){
   const response =await axios.get("https://reqres.in/api/users");
   setData(response.data.data);
   console.log(response);
  }
  return (
    <div className="maindiv">
        {/* Do not remove the main div */}
        <nav>
          <h1>Blue Whales</h1>
          <button className="btn" onClick={handleClick}>Get User List</button>
        </nav>
        <table>
          <thead className="tabhead">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            { data.length ===0 ? <tr><td><b>No data found to display.</b></td></tr> : 
              data.map((data,indx)=>{
                return (
                  <tr key={indx}>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>
                      <img src={data.avatar} alt="not available"/>
                    </td>
                  </tr>
                )
              })
            }
           

          </tbody>
        </table>
    </div>
  )
}

export default App
