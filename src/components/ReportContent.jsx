import React from "react";
import ReportRow from "./ReportRow";

const ReportContent = ({ issues, issueslink, StoreArray }) => {
  return (
    <tbody>
      {issues.map((issueData) => {
        return <ReportRow issueData={issueData} />;
      })}
    </tbody>
  );
};

export default ReportContent;
