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
        if(Element.type.inward===data){
          return true;
        }
        else if(Element.type.outward===data){
          return true;
        }
        else{
          return false;
        }
      }))
      // console.log("matchingIssues is:")
      // console.log(matchingIssues);
      matchingIssues.map(matchingIssuesData=>{
        if(matchingIssuesData.type.inward===data){
          const matchinginward = (
            <td><span>{matchingIssuesData.inwardIssue?.key} : {matchingIssuesData.inwardIssue?.fields.summary}</span></td>
          );
          cells.push(matchinginward);
        }
        else if(matchingIssuesData.type.outward===data){
          const matchingoutward = (
            <td><span>{matchingIssuesData.outwardIssue?.key} : {matchingIssuesData.outwardIssue?.fields.summary}</span></td>
          );
          cells.push(matchingoutward);
        }
        else{
          const Empty = (
            <td>  </td>
          );
          cells.push(Empty);
        }
      })
      
    })

  return(
  <tr>
    {cells}
  </tr>
  );
}
export default ReportRow;
