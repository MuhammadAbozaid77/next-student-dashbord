interface columns {
  columns: {
    header: string;
    accessor: string;
    classesName?: string;
  };
}

export default function Table({ columns }: columns) {
  return (
    <div className="my-[20px]">
      <table className="w-full">
        <thead>
          <tr>
            {columns?.map((col) => (
              <th className="text-primaryTextColor" key={col?.accessor}>
                {col?.header}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}
