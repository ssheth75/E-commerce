import React from "react";

const TableRow = ({ rowData, isEven }) => {
  const rowStyle = isEven ? "bg-gray-200" : "bg-white";
  const style =
    "px-6 py-3 whitespace-no-wrap text-base leading-5 text-gray-900 ";

const descriptionStyle = {
    maxHeight: "5rem", // Set your desired max height here (e.g., 5rem)
    overflowY: "auto",
    minWidth: "40rem",
    wordWrap: "break-word", // Allow word wrapping within the max width
  };

  return (
    <tr className={rowStyle}>
      <td className={style + "font-semibold text-lg"}>{rowData.productName}</td>
      <td className={style}>
        <p style={descriptionStyle}>{rowData.description}</p>
      </td>
      <td className={style}>{rowData.price}</td>
    </tr>
  );
};


const Table = ({ data }) => {
  const headerStyle =
    "px-6 py-4 bg-gray-100 text-left text-lg font-medium text-gray-600 uppercase tracking-wider"; // Updated header styles
  console.log(data);

  return (
    <div className="">
      <table className="border-none border-black m-4 drop-shadow-2xl">
        <thead>
          <tr >
            <th className={headerStyle} style={{ width: '200px', height: '50px' }}>Name</th>
            <th className={headerStyle} style={{ width: '200px', height: '50px' }}>Description</th>
            <th className={headerStyle} style={{ width: '200px', height: '50px' }}>Price (USD)</th>
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
