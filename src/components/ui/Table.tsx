import React from "react";

interface propsType {
  columns: {
    header: string;
    accessor: string;
    classesName?: string;
  }[];
  renderRow: (row: any) => React.ReactNode;
  data: any[];
}

export default function Table({ columns, renderRow, data }: propsType) {
  return (
    <div className="my-[20px]">
      <table className="w-full">
        <thead>
          <tr>
            {columns?.map((col) => (
              <th
                className={`${col.classesName} text-primaryTextColor`}
                key={col?.accessor}
              >
                {col?.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data?.map((row) => renderRow(row))}</tbody>
      </table>
    </div>
  );
}
