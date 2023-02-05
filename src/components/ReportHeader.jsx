import React from "react";

function ReportHeader({ StoreArray }) {
  return (
    <tbody>
      <tr>
        <th>Issues</th>
        {StoreArray.map((data) => {
          return <th key={data.id}>{data}</th>;
        })}
      </tr>
    </tbody>
  );
}

export default ReportHeader;
