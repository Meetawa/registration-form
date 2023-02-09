import React from "react";
import ReportRow from "./ReportRow";

const ReportContent = ({ issues,StoreArray }) => {
  return (
    <tbody>
      {issues.map((issueData,index) => {
        return <ReportRow key={index}
        issueData={issueData}
        StoreArray={StoreArray} />;
      })}
    </tbody>
  );
};

export default ReportContent;
