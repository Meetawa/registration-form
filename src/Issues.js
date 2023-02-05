import React, { useState,useEffect} from "react";
import './Cssfile.css';

function Issues(){
  const [issues,setIssues] = useState([]);

  const getIssues=() => {
    AP.request({
      /* TODO: fetch the url of user based priority*/
      url: "/rest/api/2/search?jql=priority=medium",
      type: "GET",
      success: response => { 
        response = JSON.parse(response) 
        setIssues(response.issues || []);
      }, 
      error: () => {  
        console.log(arguments);
      }
    })
  };
  useEffect(() => {
    getIssues();
  },[]);

  return (
    <table>
        <thead>
          <tr>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(data => (
            /*TODO:using map method we fetch all issues*/
            <tr key={data.id}>
              <td>{data.key}:{data.fields.summary}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
  );
}
export default Issues;