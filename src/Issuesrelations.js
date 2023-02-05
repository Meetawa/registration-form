import React,{useState,useEffect} from 'react'
import './Cssfile.css';
import ReportHeader from './components/ReportHeader';
import ReportContent from './components/ReportContent';


function Issuesrelations() {
  const [issues, setIssues] = useState([]);
  const [issueslink, setIssueslink] = useState([]);


  const getIssues=() => {
    AP.request({
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
  const issueLinkType=() => {
    AP.request({
      url: "/rest/api/2/issueLinkType",
      type: "GET",
      success: response => { 
        response = JSON.parse(response) 
        setIssueslink(response.issueLinkTypes || []);
      }, 
      error: () => {  
        console.log(arguments);
      }
    })
  };
  useEffect(() => {
    getIssues();
    issueLinkType();
  },[]);
  const StoreArray=[];
  issueslink.forEach(data=>{
      StoreArray.push(data.inward)
      StoreArray.push(data.outward)
    })
  return (
    <div>
      <h1>Issue Link Type View</h1>
      <table>
          <ReportHeader 
            StoreArray={StoreArray}
          />
          <ReportContent
          issues={issues}
          issueslink={issueslink}
          StoreArray={StoreArray}
           />
      </table>
    </div>
  );
}

export default Issuesrelations;
