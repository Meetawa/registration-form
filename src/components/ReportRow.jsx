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

  StoreArray.map(data=>{
      const matchingIssues=(issueData.fields.issuelinks.filter(Element=>{
        let directionCheck;
        if(Element.outwardIssue){
           directionCheck=Element.type.outward;
           if(directionCheck==data){
            return true;
           }
        }
        else if(Element.inwardIssue){
          directionCheck=Element.type.inward;
          if(directionCheck==data){
            return true;
           }
        }
      }))
      console.log(issueData.key,data,matchingIssues);
      if(matchingIssues.length>0){
        const span=[];
        matchingIssues.forEach(matchingIssuesData=>{
          const matchingData=<span>{matchingIssuesData.outwardIssue?.key  || matchingIssuesData.inwardIssue?.key } : {matchingIssuesData.outwardIssue?.fields.summary  || matchingIssuesData.inwardIssue?.fields.summary}<br /></span> 
          span.push(matchingData);
        })
        cells.push(<td>{span}</td>);
      }
      else{
        const empty=<td> </td>
        cells.push(empty);
      }
      
    })

  return(
  <tr>
    {cells}
  </tr>
  );
}
export default ReportRow;
