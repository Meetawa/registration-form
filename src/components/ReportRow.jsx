import React from "react";

function ReportRow({ issueData,StoreArray }) {
  /*TODO:
      1.create an array call cells
      2.create a span with summary and key of main issue and push into cells
      3.iterate over header links and for each header link
          a.find linked issues which have link as the current header link.for each linked issue:
              i.create a span with key and summary
          b.put the array of span's in td and push td into cells
          c.if array is empty push empty td into cells
      4.render cells in tr
      */
  const cells = [];
  const mainissuecell = (
    <td><span>{issueData.key} : {issueData.fields.summary}</span></td>
  );
  cells.push(mainissuecell);

  const cellsData=StoreArray.map(data=>{
      const matchingArray=[]; 
      (issueData.fields.issuelinks.forEach(Element=>{
        if(Element.type.inward===data){
          matchingArray.push(Element.inwardIssue?.key);
          matchingArray.push(Element.inwardIssue?.fields.summary);    
        }
        else if(Element.type.outward===data){
          matchingArray.push(Element.outwardIssue?.key);
          matchingArray.push(Element.outwardIssue?.fields.summary);    
        }
    
      })
      )
      console.log(matchingArray);
      if(matchingArray.length>0){
      return <td>{matchingArray.map(matchingIssuesdata=>{
       return <span>{matchingIssuesdata}</span>
      })}</td>
     }
     else{
       return <td> </td>
     }
      })
  return(
  <tr>
    {cells}
    {cellsData}
  </tr>
  );
}
export default ReportRow;
