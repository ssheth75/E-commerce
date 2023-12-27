import React from "react";

const TableRow = ({ rowData, isEven }) => {
  const rowStyle = isEven ? "bg-gray-200" : "bg-white";
  const style = "px-6 py-2 whitespace-no-wrap"
  return (
    <tr className={rowStyle}>
      <td className={style}>{rowData.productName}</td>
      <td className={style}>{rowData.description}</td>
      <td className={style}>{rowData.price}</td>
    </tr>
  );
};

const Table = ({ data }) => {
  const headerStyle = "px-6 py-3 bg-gray-100 w-1/2 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider";
  console.log(data);


  return (
    <div className="flex justify-center items-center w-full">
      <table className="border-4 border-black m-4 w-3/4">
        <thead>
          <tr>
            <th className={headerStyle}>Name</th>
            <th className={headerStyle}>Description</th>
            <th className={headerStyle}>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              rowData={item}
              isEven={index % 2 === 0} // Apply different classes based on index
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
