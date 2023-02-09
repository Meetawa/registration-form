import React from "react";

function ReportHeader({ StoreArray }) {
  return (
    <tbody>
      <tr>
        <th>Issues</th>
        {StoreArray.map((data,i) => {
          return <th key={i}>{data}</th>;
        })}
      </tr>
    </tbody>
  );
}

export default ReportHeader;
