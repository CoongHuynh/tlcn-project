import React from "react";
import { HotTable } from "@handsontable/react";
import { format } from "date-fns";

const TableComponent = ({
  hotTableRef,
  data,
  columns,
  colHeaders,
  daysOfMonth,
  handleAfterChange,
  afterGetColHeader,
}) => {
  // Add total row at the end
  const getTableDataWithTotal = () => {
    const tableData = [...data];
    // Calculate total for each day column
    const totalRow = {
      clientId: "",
      taskId: "",
      totalHours: data.reduce(
        (sum, r) => sum + (parseFloat(r.totalHours) || 0),
        0
      ),
    };
    daysOfMonth.forEach((day) => {
      const key = `day_${format(day, "yyyy-MM-dd")}`;
      totalRow[key] = data.reduce(
        (sum, r) => sum + (parseFloat(r[key]) || 0),
        0
      );
    });
    tableData.push(totalRow);
    return tableData;
  };

  return (
    <HotTable
      ref={hotTableRef}
      data={getTableDataWithTotal()}
      columns={columns}
      colHeaders={colHeaders}
      rowHeaders={true}
      width="100%"
      height="auto"
      minRows={5}
      maxRows={100}
      manualRowResize={true}
      manualColumnResize={true}
      fixedColumnsLeft={3}
      stretchH="none"
      contextMenu={true}
      copyPaste={true}
      fillHandle={true}
      licenseKey="non-commercial-and-evaluation"
      afterChange={handleAfterChange}
      afterGetColHeader={afterGetColHeader}
      cells={(row, col) => {
        // Make total row readOnly
        if (row === data.length) {
          return { readOnly: true, className: "htCenter htTotalRow" };
        }
      }}
      className="htCenter handsontable"
    />
  );
};

export default TableComponent; 